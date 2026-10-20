import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SeccionContacto from './SeccionContacto';

// datos para reutilizar en los test preparo el
// el escenario una vez y lo uso en cada test
const datosValidos = {
    nombre: 'Maximiliano Rodriguez',
    correo: 'maxi@empresa.com',
    asunto: 'Propuesta de proyecto FullStack',
    mensaje: 'Hola, me gustaría conversar sobre un nuevo proyecto web.',
};

// helper llena el formulario completo con datos que si pasan la validacion
// así cada test se enfoca en lo que quiere verificar, sin repetir codigo
const llenarFormularioValido = async (user) => {
    await user.type(screen.getByLabelText('Nombre'), datosValidos.nombre);
    await user.type(screen.getByLabelText('Correo electrónico'), datosValidos.correo);
    await user.type(screen.getByLabelText('Asunto'), datosValidos.asunto);
    await user.type(screen.getByLabelText('Mensaje'), datosValidos.mensaje);
};

describe('SeccionContacto', () => {

    it('renderiza el formulario con sus cuatro campos y el botón de envío', () => {
        // arrange + Act render monta el componente en un DOM de prueba (jsdom).
        render(<SeccionContacto />);

        // Assert getByLabelText encuentra los inputs por su etiqueta visible,
        // igual que un usuario los identifica si el campo no existe, el test
        // falla automáticamente
        expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByLabelText('Asunto')).toBeInTheDocument();
        expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /Validar y enviar/i })
        ).toBeInTheDocument();
    });

    it('muestra los errores de validación al enviar el formulario vacío', async () => {
        // userEvent.setup() crea un "usuario virtual" conectado al documento.
        const user = userEvent.setup();
        render(<SeccionContacto />);

        // evento clic en enviar sin llenar nada ant Design valida las reglas
        // de tus CampoFormulario y muestra los message de cada regla
        await user.click(screen.getByRole('button', { name: /Validar y enviar/i }));

        // acierto findByText async espera a que el error aparezca, porque la
        // validación de AntD es asincrona Los siguientes son getByText porque
        // los errores de todos los campos aparecen en el mismo renderizado
        expect(await screen.findByText('Ingresa tu nombre.')).toBeInTheDocument();
        expect(screen.getByText('Ingresa tu correo.')).toBeInTheDocument();
        expect(screen.getByText('Indica el asunto.')).toBeInTheDocument();
        expect(
            screen.getByText('El mensaje debe tener al menos 15 caracteres.')
        ).toBeInTheDocument();

        // el panel de exito NO debe existir si hay errores
        expect(screen.queryByText('¡Mensaje enviado!')).not.toBeInTheDocument();
    });

    it('rechaza un correo con formato inválido aunque los demás campos estén bien', async () => {
        const user = userEvent.setup();
        render(<SeccionContacto />);

        // llenamos todo bien excepto el correo que no tiene formato valido
        await user.type(screen.getByLabelText('Nombre'), datosValidos.nombre);
        await user.type(screen.getByLabelText('Correo electrónico'), 'correo-invalido');
        await user.type(screen.getByLabelText('Asunto'), datosValidos.asunto);
        await user.type(screen.getByLabelText('Mensaje'), datosValidos.mensaje);
        await user.click(screen.getByRole('button', { name: /Validar y enviar/i }));

        //solo debe aparecer el error del correo (regla type: 'email')
        expect(await screen.findByText('Ingresa un correo válido.')).toBeInTheDocument();
        expect(screen.queryByText('Ingresa tu nombre.')).not.toBeInTheDocument();
    });

    it('rechaza un mensaje con menos de 15 caracteres', async () => {
        const user = userEvent.setup();
        render(<SeccionContacto />);

        await user.type(screen.getByLabelText('Nombre'), datosValidos.nombre);
        await user.type(screen.getByLabelText('Correo electrónico'), datosValidos.correo);
        await user.type(screen.getByLabelText('Asunto'), datosValidos.asunto);
        await user.type(screen.getByLabelText('Mensaje'), 'Muy corto'); // regla min: 15
        await user.click(screen.getByRole('button', { name: /Validar y enviar/i }));

        expect(
            await screen.findByText('El mensaje debe tener al menos 15 caracteres.')
        ).toBeInTheDocument();
    });

    it('muestra el panel de éxito cuando todos los datos son válidos', async () => {
        const user = userEvent.setup();
        render(<SeccionContacto />);

        // evento flujo completo de un usuario que llena y envía bien el formulario
        await llenarFormularioValido(user);
        await user.click(screen.getByRole('button', { name: /Validar y enviar/i }));

        // acierto onFinish del hook se ejecuta solo pasa si TODAS las rules
        // pasan, cambiando enviado a true y mostrando el panel de exito
        expect(await screen.findByText('¡Mensaje enviado!')).toBeInTheDocument();

        // El formulario desaparece de la pantalla
        expect(screen.queryByLabelText('Nombre')).not.toBeInTheDocument();
    });

    it('vuelve a mostrar el formulario vacío al hacer clic en "Enviar otro mensaje"', async () => {
        const user = userEvent.setup();
        render(<SeccionContacto />);

        // enviamos un formulario valido para q sea un envio exitoso
        await llenarFormularioValido(user);
        await user.click(screen.getByRole('button', { name: /Validar y enviar/i }));
        expect(await screen.findByText('¡Mensaje enviado!')).toBeInTheDocument();

        // se usa el boton de reinicio llama a reiniciar() del hook,
        // que hace form.resetFields() y vuelve enviado a false
        await user.click(
            await screen.findByRole('button', { name: /Enviar otro mensaje/i })
        );

        // el formulario esta de vuelta y sus campos quedaron vacios
        expect(await screen.findByLabelText('Nombre')).toBeInTheDocument();
        expect(screen.getByLabelText('Nombre')).toHaveValue('');
        expect(screen.getByLabelText('Correo electrónico')).toHaveValue('');
    });
});

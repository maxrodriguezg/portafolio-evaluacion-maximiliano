import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import SeccionPerfil from './SeccionPerfil';

describe('Organismo SeccionPerfil', () => {

    it('renderiza el encabezado de la sección', () => {
        render(<SeccionPerfil />);

        // getByRole heading busca por el tipo de encabezado h1-h6,
        // igual que un lector de pantalla anunciaria la pag
        expect(
            screen.getByRole('heading', { level: 1, name: /Software con foco en resultados/ })
        ).toBeInTheDocument();
    });

    it('muestra el nombre, cargo y descripción profesional', () => {
        render(<SeccionPerfil />);

        // el h2 combina nombre apellido de los datos del perfil
        expect(screen.getByText('Maximiliano Rodriguez')).toBeInTheDocument();
        expect(screen.getByText(/Desarrollador FullStack · 19 años/)).toBeInTheDocument();
        expect(screen.getByText(/Analista Programador en formacion/)).toBeInTheDocument();
    });

    it('muestra el avatar con la foto de perfil', () => {
        // render() devuelve container el div donde se monto el componente
        // sirve para buscar elementos que no tienen un rol accesible claro
        const { container } = render(<SeccionPerfil />);

        // el avatar de AntD renderiza un <img> cuando recibe src
        // verifica q exista la imagen y que apunte a la foto del perfil
        const imagen = container.querySelector('img');
        expect(imagen).toBeInTheDocument();
        expect(imagen).toHaveAttribute('src', expect.stringContaining('avatar'));
    });

    it('muestra la especialidad principal con sus etiquetas de tecnología', () => {
        render(<SeccionPerfil />);

        expect(screen.getByText('Arquitectura & Backend')).toBeInTheDocument();

        //  no uso getByText('Spring Boot 3') porque ese texto
        // aparece 3 veces en esta sección descripción etiqueta y metrica
        // y getByText EXIGE una sola coincidencia Usamos textos que son
        // unicos dentro de la sección
        expect(screen.getByText('JWT Security')).toBeInTheDocument();
        expect(screen.getByText('MySQL')).toBeInTheDocument();
    });

    it('muestra los principios de desarrollo', () => {
        render(<SeccionPerfil />);

        expect(screen.getByText('Claridad técnica')).toBeInTheDocument();
        expect(screen.getByText('Calidad verificable')).toBeInTheDocument();
    });

    it('muestra las tarjetas de métricas', () => {
        render(<SeccionPerfil />);

        expect(screen.getByText('Formación')).toBeInTheDocument();
        expect(screen.getByText('Idiomas')).toBeInTheDocument();
        expect(screen.getByText('Foco técnico')).toBeInTheDocument();
    });

    it('navega a la sección de proyectos al hacer clic en "Explorar proyectos"', async () => {
        // vi.fn() crea una función espía registra si fue llamada y con cuales
        // argumentos SeccionPerfil recibe onNavegar por props desde
        // PaginaPrincipal, así que en el test se la pasamos nosotros
        const onNavegar = vi.fn();
        const user = userEvent.setup();
        render(<SeccionPerfil onNavegar={onNavegar} />);

        await user.click(screen.getByRole('button', { name: /Explorar proyectos/i }));

        // verifica que el clic llamo al callback con la seccion q era
        expect(onNavegar).toHaveBeenCalledWith('proyectos');
    });

    it('navega a la sección de contacto al hacer clic en "Contactar"', async () => {
        const onNavegar = vi.fn();
        const user = userEvent.setup();
        render(<SeccionPerfil onNavegar={onNavegar} />);

        await user.click(screen.getByRole('button', { name: /Contactar/i }));

        expect(onNavegar).toHaveBeenCalledWith('contacto');
    });
});

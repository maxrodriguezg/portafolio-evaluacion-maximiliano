import { useState } from 'react';
import { Form } from 'antd';

// hook q maneja el formulario de contacto
export const useFormularioContacto = () => {
    // Form.useForm() de Ant Design crea una especie de instancia del formulario
    // un objeto con metodos para controlarlo desde codigo (resetear
    // campos, leer valore)se conecta al <Form form={form}>.
    const [form] = Form.useForm();

    // estado propio del hook indica si el mensaje ya se envio con exito
    // la validación NO vive aqui la hacen las reglas que cada
    // CampoFormulario declara, y Ant Design las evalua solo
    const [enviado, setEnviado] = useState(false);

    // onFinish de Ant Design se ejecuta ÚNICAMENTE si todas las reglas
    // pasan la validacion por eso aqui ya podemos marcar el envio como
    // exitoso sin volver a validar valores trae los datos del form
    // { nombre, correo, asunto, mensaje }
    const manejarEnvio = (valores) => {
        console.log('Formulario válido:', valores);
        setEnviado(true); // true -> el componente muestra el panel d exito
    };

    // reiinicia el formulario para permitir un nuevo envío
    const reiniciar = () => {
        form.resetFields(); // método de AntD: vacía todos los campos
        setEnviado(false);  // vuelve a mostrar el formulario
    };

    // Expone la instanciaformulario el estado y las dos funciones
    return { form, enviado, manejarEnvio, reiniciar };
};

export default useFormularioContacto;

import { useState } from 'react';
import { Form } from 'antd';

export const useFormularioContacto = () => {
    // Instancia del formulario de AntD (igual que en 'actividad-cinco')
    const [form] = Form.useForm();

    // Estado propio: si el mensaje ya se envió
    const [enviado, setEnviado] = useState(false);

    // onFinish se ejecuta SOLO si todas las 'rules' pasan la validación
    const manejarEnvio = (valores) => {
        console.log('Formulario válido:', valores);
        setEnviado(true);
    };

    const reiniciar = () => {
        form.resetFields();
        setEnviado(false);
    };

    return { form, enviado, manejarEnvio, reiniciar };
};

import { Form, Input } from 'antd';

const { TextArea } = Input;

const CampoFormulario = ({ nombre, etiqueta, reglas, tipo = 'text', ...resto }) => {
    return (
        <Form.Item name={nombre} label={etiqueta} rules={reglas}>
            {tipo === 'textarea' ? (
                <TextArea rows={6} {...resto} />
            ) : (
                <Input type={tipo} {...resto} />
            )}
        </Form.Item>
    );
};

export default CampoFormulario;

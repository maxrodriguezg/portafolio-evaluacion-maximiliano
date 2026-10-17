import { Button } from 'antd';

const Boton = ({ variante = 'primario', children, ...resto }) => {
    const tiposBoton = {
        primario: 'primary',
        secundario: 'default',
        texto: 'primary',
    };

    const tipo = tiposBoton[variante];

    return (
        <Button type={tipo} {...resto}>
            {children}
        </Button>
    );
};

export default Boton;
import { Card } from 'antd';
import Icono from '../atomos/Icono';


const ItemHabilidad = ({ grupo, indice }) => (

    <Card className="tarjeta-habilidad" role="article">
        <div className="tarjeta-habilidad__cabecera">
            <span className="icono-habilidad">
                <Icono nombre={grupo.icono} tamano={18} />
            </span>
            <small>{`0${indice + 1}`}</small>
        </div>
        <h2>{grupo.titulo}</h2>
        <p>{grupo.descripcion}</p>
        <div className="lista-habilidades">
            {grupo.habilidades.map(({ nombre, nivel }) => (
                <div className="fila-habilidad" key={nombre}>
                    <span>{nombre}</span>
                    <small>{nivel}</small>
                </div>
            ))}
        </div>
    </Card>
    
);

export default ItemHabilidad;
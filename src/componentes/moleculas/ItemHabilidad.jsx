import { Card } from 'antd';
import Icono from '../atomos/Icono';


// tarjeta de un grupo de habilidades Backend, Frontend, Tools
// recibe dos props desde SeccionHabilidades
//   grupo-> el objeto con los datos del grupo
//   indie-> su posicion en el array (0, 1, 2...)
const ItemHabilidad = ({ grupo, indice }) => (

    // role="article"(igual que TarjetaProyecto).
    <Card className="tarjeta-habilidad" role="article">
        <div className="tarjeta-habilidad__cabecera">
            <span className="icono-habilidad">
                {/* el icono viene del dato grupo.icono backend, frontend etc*/}
                <Icono nombre={grupo.icono} tamano={18} />
            </span>
            {/* template literal para el número de tarjet como los índices
                empiezan en 0, suma 1 -> 01, 02, 03
                el 0 prefijado es parte del diseño siempre dos digitos */}
            <small>{`0${indice + 1}`}</small>
        </div>
        <h2>{grupo.titulo}</h2>
        <p>{grupo.descripcion}</p>
        <div className="lista-habilidades">
            {/* segundo nivel de map cada grupo tiene su propio array de
                habilidades. la desestructuracion se hace directamente en el
                parameto ({ nombre, nivel }) en vez de (h) => h.nombre.
               la key usa el nombre de la habilidad unico dentro del grupo */}
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

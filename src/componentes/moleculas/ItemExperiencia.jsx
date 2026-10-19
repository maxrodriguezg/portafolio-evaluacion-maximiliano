import { Card } from 'antd';
import Icono from '../atomos/Icono';
import EtiquetaTecnologia from '../atomos/EtiquetaTecnologia';

const ItemExperiencia = ({ experiencia }) => {

    const {empresa, cargo, periodo, icono, destacado, encabezado, descripcion, logros, tecnologias,} = experiencia;

    const clasesItem = destacado ? 'item-experiencia item-experiencia--destacado' : 'item-experiencia';

    return (
        <article className={clasesItem}>
            <span className="item-experiencia__marca" aria-hidden="true">
                <Icono nombre={icono} tamano={15} />
            </span>
            <Card className="tarjeta-experiencia tarjeta-seccion">
                <div className="tarjeta-experiencia__cabecera">
                    <div>
                        <span className="antetitulo">{encabezado}</span>
                        <h2>
                            {cargo} · {empresa}
                        </h2>
                    </div>
                    <span className="fecha">
                        <Icono nombre="calendario" tamano={13} /> {periodo}
                    </span>
                </div>
                <p>{descripcion}</p>
                <ul>
                    {logros.map((logro) => (
                        <li key={logro}>{logro}</li>
                    ))}
                </ul>
                <div className="fila-tecnologias">
                    {tecnologias.map((tecnologia) => (
                        <EtiquetaTecnologia key={tecnologia}>{tecnologia}</EtiquetaTecnologia>
                    ))}
                </div>
            </Card>
    </article>
    );
};

export default ItemExperiencia;
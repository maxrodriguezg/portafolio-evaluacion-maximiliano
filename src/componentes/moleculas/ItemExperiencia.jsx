import { Card } from 'antd';
import Icono from '../atomos/Icono';
import EtiquetaTecnologia from '../atomos/EtiquetaTecnologia';

// recibe el objeto experiencia completo por props lo pasa SeccionExperiencia
// con un map y extrae sus campos x desestructuracion
const ItemExperiencia = ({ experiencia }) => {

    const {empresa, cargo, periodo, icono, destacado, encabezado, descripcion, logros, tecnologias,} = experiencia;

    // clase condicional con operador ternario si la experiencia este marcada
    // como destacada en los datos, se agrega el modificador que el CSS usa
    // para resaltarla visualmente condicional de estilo,
    // no de contenido el elemento siempre se renderiza
    const clasesItem = destacado ? 'item-experiencia item-experiencia--destacado' : 'item-experiencia';

    return (
        // <article> es el contenedor de cada ítem del timeline.
        <article className={clasesItem}>
            {/* marca de la linea de tiempo decorativa, por eso aria-hidden
                la oculta de los lectores de pantalla */}
            <span className="item-experiencia__marca" aria-hidden="true">
                <Icono nombre={icono} tamano={15} />
            </span>
            <Card className="tarjeta-experiencia tarjeta-seccion">
                <div className="tarjeta-experiencia__cabecera">
                    <div>
                        <span className="antetitulo">{encabezado}</span>
                        {/* el h2 combina cargo y empresa en una sola línea
                            desarrollador FullStack · Proyectos académicos y
                            personales, los tests verifican este texto */}
                        <h2>
                            {cargo} · {empresa}
                        </h2>
                    </div>
                    {/* periodo = fechas de inicio y termino  */}
                    <span className="fecha">
                        <Icono nombre="calendario" tamano={13} /> {periodo}
                    </span>
                </div>
                <p>{descripcion}</p>
                {/* lista <ul><li> para los logros un lector de
                    pantalla anuncia lista de 3 elementos, dando contexto
                    la key usa el texto del logro unico en los datos */}
                <ul>
                    {logros.map((logro) => (
                        <li key={logro}>{logro}</li>
                    ))}
                </ul>
                {/* etiquetas de tecnologias usadas en la experiencia */}
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

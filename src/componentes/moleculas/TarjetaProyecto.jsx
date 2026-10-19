import { Card } from 'antd';
import Icono from '../atomos/Icono';
import EtiquetaTecnologia from '../atomos/EtiquetaTecnologia';


const MaquetaProyecto = ({ variante }) => (
    <div className={`tarjeta-proyecto__visual ${variante}`} aria-hidden="true">
        <div className="maqueta-lateral">
            <i />
            <i />
            <i />
            <i />
        </div>
        <div className="maqueta-principal">
            <div className="maqueta-cabecera">
                <span />
                <b />
            </div>
            <div className="maqueta-metricas">
                <i />
                <i />
                <i />
            </div>
            <div className="maqueta-grafico">
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
        </div>
    </div>
);

const TarjetaProyecto = ({ proyecto }) => {
    const { titulo, encabezado, descripcion, tecnologias, categoriaVisual, repositorio } = proyecto;

    return (
        <Card className="tarjeta-proyecto tarjeta-base" role="article" hoverable={true}>
            <MaquetaProyecto variante={categoriaVisual} />
            <div className="tarjeta-proyecto__cuerpo">
                <span className="antetitulo">{encabezado}</span>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <div className="fila-tecnologias">
                    {tecnologias.map((tecnologia) => (
                        <EtiquetaTecnologia key={tecnologia}>{tecnologia}</EtiquetaTecnologia>
                    ))}
                </div>
                <div className="acciones-proyecto">
                    <a
                        href={repositorio}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Repositorio de ${titulo}`}
                    >
                        <Icono nombre="github" tamano={16} /> Repositorio
                    </a>
                </div>
            </div>
        </Card>
    );
};

export default TarjetaProyecto;

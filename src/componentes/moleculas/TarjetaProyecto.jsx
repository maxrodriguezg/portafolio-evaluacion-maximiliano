import { Card } from 'antd';
import Icono from '../atomos/Icono';
import EtiquetaTecnologia from '../atomos/EtiquetaTecnologia';


// es como una previsualizacion decorativa de la tarjeta
// Es un componente auxiliar local no se exporta solo existe para
// mantener TarjetaProyecto corto y con una sola responsabilidad.
// Dibuja un wireframe con elementos vacíos (<i />, <span />, <b />) que
// css transforma en barras y bloques que simulan una captura de pantalla

const MaquetaProyecto = ({ variante }) => (
    // className con template literal combina la clase base con la variante
    // de color según la categoría del proyecto
    // aria-hidden="true" la oculta de los lectores de pantalla es decoracion
    // pura, no información
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

//  tarjeta de un proyecto del portafolio
// Recibe el objeto 'proyecto' completo por props y extrae solo lo que necesita
// desestructuración evita repetir proyecto.titulo, proyecto.descripcion
const TarjetaProyecto = ({ proyecto }) => {
    const { titulo, encabezado, descripcion, tecnologias, categoriaVisual, repositorio } = proyecto;

    return (
        // role="article" los tests
        // lo usan para contar tarjetas (getAllByRole('article')).
        <Card className="tarjeta-proyecto tarjeta-base" role="article" >
            {/* la previsualización recibe la variante de color de la categoría */}
            <MaquetaProyecto variante={categoriaVisual} />
            <div className="tarjeta-proyecto__cuerpo">
                <span className="antetitulo">{encabezado}</span>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                {/* una etiqueta por tecnología key identifica cada una
                    para que react pueda actualizarlas eficientemente */}
                <div className="fila-tecnologias">
                    {tecnologias.map((tecnologia) => (
                        <EtiquetaTecnologia key={tecnologia}>{tecnologia}</EtiquetaTecnologia>
                    ))}
                </div>
                <div className="acciones-proyecto">
                    {/* enlace al repositorio
                        El texto visible es solo "Repositorio" en TODAS las
                        tarjetas, por eso el aria-label lo hace único y
                        descriptivo Repositorio de Nube Medica sin el
                        un lector de pantalla anunciaria varios enlaces
                        idénticos sin forma de distinguirlos
                        target="_blank" abre en pestaña nueva y
                        rel="noreferrer" es la medida de seguridad estándar */}
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

import Icono from '../atomos/Icono';
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion';
import ItemExperiencia from '../moleculas/ItemExperiencia';
import { encabezadosSecciones, experiencia } from '../../datos/informacionPerfil';


// como no tiene estado ni props, es un componente q solo tiene q presentar cosas en la pagina
// su unico trabajo es recorrer los datos y delegar en moleculas
const SeccionExperiencia = () => (
    <>
        {/* Encabezad  antetítulo, h1 y descripción desde los datos */}
        <EncabezadoSeccion {...encabezadosSecciones.experiencia} />

        {/* aria-label le da a esta zona un nombre accesible los lectores
            de pantalla la anuncian como region navegable */}
        <section className="linea-tiempo" aria-label="Historial de experiencia">
            {/* map() renderiza un ItemExperiencia por cada experiencia del
                array El spread {...} no se usa aquí pasamos el objeto
                completo como prop experiencia, que el item desestructura */}
            {experiencia.map((experiencia) => (
                <ItemExperiencia key={experiencia.id} experiencia={experiencia} />
            ))}
        </section>

        {/* llamado de cierre objetivo profesional */}
        <aside className="llamada">
            <div>
                <span className="antetitulo">Objetivo profesional</span>
                <h3>Contribuir en equipos donde la calidad del software sea una decisión de arquitectura.</h3>
            </div>
            <Icono nombre="flecha" tamano={20} />
        </aside>
    </>
);

export default SeccionExperiencia;

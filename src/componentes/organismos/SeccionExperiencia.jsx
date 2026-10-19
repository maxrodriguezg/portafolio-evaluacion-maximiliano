import Icono from '../atomos/Icono';
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion';
import ItemExperiencia from '../moleculas/ItemExperiencia';
import { encabezadosSecciones, experiencia } from '../../datos/informacionPerfil';

// Organismo: línea de tiempo cronológica con el historial de experiencia laboral.
const SeccionExperiencia = () => (
    <>
        <EncabezadoSeccion {...encabezadosSecciones.experiencia} />

        <section className="linea-tiempo" aria-label="Historial de experiencia">
            {experiencia.map((experiencia) => (
                <ItemExperiencia key={experiencia.id} experiencia={experiencia} />
            ))}
        </section>

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

import Icono from '../atomos/Icono.jsx';
import { useAnioActual } from '../../hooks/useAnioActual.js';
import { perfil, redes } from '../../datos/informacionPerfil.js';

// organismo pie de página de la aplicación.

const PieDePagina = () => {
    // llamamos al hook q devuelve el año en curso Al calcularse
    // en cada render el footer se mantiene siempre actualizado solo
    const anio = useAnioActual();

    return (
        <footer className="pie">
            {/* Bloque izquierdo: copyright y stack de desarrollo */}
            <div className="pie-pagina__bloque">
                <span>
                    {/* El año viene del hook; el nombre y apellido, de los datos */}
                    © {anio} {perfil.nombre} {perfil.apellido} — Todos
                    los derechos reservados.
                </span>
                <small>Desarrollado con React + Vite y Ant Design.</small>
            </div>

            {/* Bloque derecho: contacto y redes sociales */}
            <div className="pie__redes">
                <div className="pie-pagina__bloque pie-pagina__enlaces">
                    {/* mailto: abre el cliente de correo del usuario */}
                    <a href={`mailto:${perfil.correo}`}>
                        <Icono nombre="contacto" tamano={12} /> {perfil.correo}
                    </a>
                    {/* target="_blank" abre en pestaña nueva; rel="noreferrer"
                        es la medida de seguridad recomendada para enlaces externos */}
                    <a href={redes.github} target="_blank" rel="noreferrer">
                        <Icono nombre="github" tamano={12} /> GitHub
                    </a>
                    <a href={redes.linkedin} target="_blank" rel="noreferrer">
                        <Icono nombre="linkedin" tamano={12} /> LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default PieDePagina;

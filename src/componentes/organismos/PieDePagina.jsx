import Icono from '../atomos/Icono.jsx';
import { useAnioActual } from '../../hooks/useAnioActual.js';
import { perfil, redes } from '../../datos/informacionPerfil.js';

const PieDePagina = () => {
    const anio = useAnioActual();

    return (
        <footer className="pie">
            <div className="pie-pagina__bloque">
                <span>
                    © {anio} {perfil.nombre} {perfil.apellido} — Todos
                    los derechos reservados.
                </span>
                <small>Desarrollado con React + Vite y Ant Design.</small>
            </div>
            <div className="pie__redes">
                <div className="pie-pagina__bloque pie-pagina__enlaces">
                    <a href={`mailto:${perfil.correo}`}>
                        <Icono nombre="contacto" tamano={12} /> {perfil.correo}
                    </a>
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
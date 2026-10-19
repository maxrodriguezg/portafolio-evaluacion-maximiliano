import { enlacesNavegacion } from '../../datos/enlacesNavegacion.js';
import ItemMenu from '../moleculas/ItemMenu.jsx';
import {perfil as perfilProfesional} from "../../datos/informacionPerfil.js";

const NavegacionLateral = ({ seccionActiva, onCambiar }) => {
    return (
        <nav className="navegacion-lateral">
            <div className="navegacion-lateral__marca">
                    <span className="navegacion-lateral__iniciales">{perfilProfesional.iniciales}</span>
                    <div>
                        <strong>{perfilProfesional.nombre}</strong>
                        <small>{perfilProfesional.apellido} · Workspace</small>
                    </div>
            </div>

            <span className="navegacion-lateral__etiqueta">Navegación</span>

            {enlacesNavegacion.map((enlace) => (
                <ItemMenu
                    key={enlace.id}
                    etiqueta={enlace.etiqueta}
                    icono={enlace.icono}
                    activo={seccionActiva === enlace.id}
                    onClick={() => onCambiar(enlace.id)}
                />
            ))}
        </nav>
    );
};

export default NavegacionLateral;
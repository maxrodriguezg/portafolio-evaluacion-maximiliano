import { useNavegacion } from '../hooks/useNavegacion.js';
import PlantillaDashboard from '../componentes/plantillas/PlantillaDashboard.jsx';
import SeccionPerfil from '../componentes/organismos/SeccionPerfil.jsx';
import SeccionExperiencia from "../componentes/organismos/SeccionExperiencia.jsx";
import SeccionEducacion from "../componentes/organismos/SeccionEducacion.jsx";
import SeccionHabilidades from "../componentes/organismos/SeccionHabilidad.jsx";
import SeccionProyectos from "../componentes/organismos/SeccionProyectos.jsx";
import SeccionContacto from "../componentes/organismos/SeccionContacto.jsx";

const PaginaPrincipal = () => {
    const { seccionActiva, cambiarSeccion } = useNavegacion();

    return (
        <PlantillaDashboard seccionActiva={seccionActiva} onCambiar={cambiarSeccion}>
            {seccionActiva === 'perfil' && <SeccionPerfil onNavegar={cambiarSeccion} />}
            {seccionActiva === 'experiencia' && <SeccionExperiencia/>}
            {seccionActiva === 'educacion' && <SeccionEducacion />}
            {seccionActiva === 'habilidades' && <SeccionHabilidades />}
            {seccionActiva === 'proyectos' && <SeccionProyectos />}
            {seccionActiva === 'contacto' && <SeccionContacto />}
        </PlantillaDashboard>
    );
};

export default PaginaPrincipal;
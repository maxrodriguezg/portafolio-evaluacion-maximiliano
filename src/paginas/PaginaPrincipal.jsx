import { useNavegacion } from '../hooks/useNavegacion.js';
import PlantillaDashboard from '../componentes/plantillas/PlantillaDashboard.jsx';
import SeccionPerfil from '../componentes/organismos/SeccionPerfil.jsx';
import SeccionExperiencia from "../componentes/organismos/SeccionExperiencia.jsx";
import SeccionEducacion from "../componentes/organismos/SeccionEducacion.jsx";
import SeccionHabilidades from "../componentes/organismos/SeccionHabilidad.jsx";
import SeccionProyectos from "../componentes/organismos/SeccionProyectos.jsx";
import SeccionContacto from "../componentes/organismos/SeccionContacto.jsx";

// PÁGINA  punto de composición de la app
//no es parA renderizar ui propia sino CONECTAR las piezas
//   1. Crear el estado llama al hook d navegacion
//   2. Elegir la plantilla el layout
//   3. Decidir q seccion muestra según el estado
const PaginaPrincipal = () => {
    // el estado vive aqui en el componente mas alto que lo necesita
    // es lafuente unica de verdad seccionActiva dice q se ve y
    // cambiarSeccion es la unica forma de cambiarlo
    const { seccionActiva, cambiarSeccion } = useNavegacion();

    return (
        // la plantilla recibe el estado para marcar el menú activo
        //  y el callback para que el menú pueda navegar
        <PlantillaDashboard seccionActiva={seccionActiva} onCambiar={cambiarSeccion}>
            {/* Renderizado condicional con el patrón condición && elemento
                si la condición es falsa React no renderiza NADA ni un espacio
                solo la sección activa se monta las demas no existen en el dom
                cada seccion recibe onNavegar cuando tiene botones que navegan
                a otra sección Perfil lleva a Proyectos y Contacto */}
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

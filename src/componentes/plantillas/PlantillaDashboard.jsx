import NavegacionLateral from '../organismos/NavegacionLateral.jsx';
import BarraSuperior from '../organismos/BarraSuperior.jsx';
import PieDePagina from '../organismos/PieDePagina.jsx';

// PLANTILLA define el layout de la aplicación sin saber q secciones existen por eso es
// reutilizable maqueta el esqueleto y deja el contenido en el hijo q se pasa entre etiquetas
// recibe por props
//   seccionActiva -> q sección esta activa para el menu
//   onCambiar-> callback de navegación loq pasa al menu lateral
//   children-> el contenido variable la sección activa
const PlantillaDashboard = ({ seccionActiva, onCambiar, children }) => {
    return (
        // 'app-shell' es el contenedor del layout completo sidebar mas main
        <div className="app-shell">
            {/* columna izquierda fija navegación La plantilla REPARTE las
                props le pasa al menu el estado y el callback que recibe */}
            <aside className="sidebar">
                <NavegacionLateral seccionActiva={seccionActiva} onCambiar={onCambiar} />
            </aside>

            {/* columna principal tres zonas apiladas */}
            <main>
                {/* barra superior q muestra la sección activa */}
                <BarraSuperior seccionActiva={seccionActiva} />
                {/* cona de contenido aquíise pone la sección activa que
                    PaginaPrincipal pasa como children. La plantilla no sabe
                    ni le importa qué seccion es solo la coloca */}
                <div className="contenido">{children}</div>
                {/* Pie de página fijo en todas las secciones */}
                <PieDePagina />
            </main>
        </div>
    );
};

export default PlantillaDashboard;

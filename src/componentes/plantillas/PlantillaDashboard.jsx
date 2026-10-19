import NavegacionLateral from '../organismos/NavegacionLateral.jsx';
import BarraSuperior from '../organismos/BarraSuperior.jsx';
import PieDePagina from '../organismos/PieDePagina.jsx';

const PlantillaDashboard = ({ seccionActiva, onCambiar, children }) => {
    return (
        <div className="app-shell">
            <aside className="sidebar">
                <NavegacionLateral seccionActiva={seccionActiva} onCambiar={onCambiar} />
            </aside>

            <main>
                <BarraSuperior seccionActiva={seccionActiva} />
                <div className="contenido">{children}</div>
                <PieDePagina />
            </main>
        </div>
    );
};

export default PlantillaDashboard;
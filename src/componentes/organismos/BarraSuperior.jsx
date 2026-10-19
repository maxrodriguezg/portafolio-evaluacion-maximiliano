import { enlacesNavegacion } from '../../datos/enlacesNavegacion.js';

const BarraSuperior = ({ seccionActiva }) => {
    const enlaceActual = enlacesNavegacion.find((e) => e.id === seccionActiva);

    return (
        <header className="topbar">
            <div className="migas">
                <span>Portfolio</span>
                <i>/</i>
                <strong>{enlaceActual?.etiqueta}</strong>
            </div>
            <div className="estado">
                <i /> Disponible para oportunidades
            </div>
        </header>
    );
};

export default BarraSuperior;
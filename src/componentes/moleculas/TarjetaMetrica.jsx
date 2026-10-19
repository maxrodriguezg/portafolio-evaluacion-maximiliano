import Icono from '../atomos/Icono.jsx';

const TarjetaMetrica = ({ icono, numero, titulo, descripcion }) => {
    return (
        <article className="tarjeta-metrica">
            {numero && <span className="tarjeta-metrica__numero">{numero}</span>}
            {icono && <Icono nombre={icono} />}
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
        </article>
    );
};

export default TarjetaMetrica;
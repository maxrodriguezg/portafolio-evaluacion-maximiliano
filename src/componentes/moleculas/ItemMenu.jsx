import Icono from '../atomos/Icono.jsx';

const ItemMenu = ({ etiqueta, icono, activo = false, ...resto }) => {
    return (
        <button className={activo ? 'item item--activo' : 'item'} {...resto}>
            <Icono nombre={icono} />
            <span>{etiqueta}</span>
        </button>
    );
};

export default ItemMenu;
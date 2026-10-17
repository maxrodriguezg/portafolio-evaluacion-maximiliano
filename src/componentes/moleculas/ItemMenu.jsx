import Icono from '../atomos/Icono.jsx';

const ItemMenu = ({ etiqueta, icono, activo = false, ...resto }) => {
    // 🔴 Reto: devuelve un <button> que:
    //   1. cambie la clase según si está 'activo' (condicional)
    //   2. muestre el átomo <Icono nombre={icono} />
    //   3. muestre la etiqueta
    //   4. pase '...resto' (para onClick, etc.)
    return (
        <button ______ {...resto}>
            <Icono ______ />
            <span>______</span>
        </button>
    );
};

export default ItemMenu;
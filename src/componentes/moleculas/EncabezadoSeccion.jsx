
const EncabezadoSeccion = ({ antetitulo, titulo, descripcion }) => {
    return (
        <header className="encabezado-seccion">
            <span className="antetitulo">{antetitulo}</span>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </header>
    );
};

export default EncabezadoSeccion;
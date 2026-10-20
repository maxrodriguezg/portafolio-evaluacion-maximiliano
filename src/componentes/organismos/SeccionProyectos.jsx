import EncabezadoSeccion from '../moleculas/EncabezadoSeccion.jsx';
import TarjetaProyecto from '../moleculas/TarjetaProyecto.jsx';
import { useFiltroProyectos } from '../../hooks/useFiltroProyectos.js';
import {encabezadosSecciones, proyectos} from '../../datos/informacionPerfil';
import {Button, Card} from "antd";
import Icono from "../atomos/Icono.jsx";

// consume el hook useFiltroProyectos y reacciona al estado del filtro.
const SeccionProyectos = () => {

    // llamamos al hook y desestructura lo que retorna
    //   filtroActivo> filtro seleccionado (para marcarlo visualmente)
    //   cambiarFiltro -> función que cambia el filtro (la llaman los botones)
    //   proyectosFiltrados -> lista ya filtrada (para la pantalla)
    //   filtros-> filtros disponibles (para dibujar los botones)
    const { filtroActivo, cambiarFiltro, proyectosFiltrados, filtros } = useFiltroProyectos();

    // Proyecto destacado del bloque inferior el primero de la lista filtrada
    // El operador ?? devuelve el lado derecho solo si el izquierdo es null o
    // undefined si un filtro no tiene resultados, proyectosFiltrados[0] es
    // undefined y se toma proyectos[0] como respaldo asi nunca queda vacio
    const proyectoDestacado = proyectosFiltrados[0] ?? proyectos[0];

    return (
        <section>

            <EncabezadoSeccion {...encabezadosSecciones.proyectos} />

            {/* fila d botones de filtro role="group" + aria-label dan nombre
                accesible al conjunto de botones */}
            <div className="fila-filtros" role="group" aria-label="Filtros de proyectos">
                {filtros.map((fil) => (
                    <Button key={fil}
                        size="small"
                        // clase condicional el filtro activo se ve diferente
                        className={filtroActivo === fil ? 'filtro filtro--activo' : 'filtro'}
                        // aria-pressed expone el estado del botón para lectores
                        // de pantalla (true = filtro aplicado)
                        aria-pressed={filtroActivo === fil}
                        // cada clic cambia el estado del hook -> React re-renderiza
                        // la grilla con la nueva lista filtrada
                        onClick={() => cambiarFiltro(fil)}
                    >
                        {fil}
                    </Button>
                ))}
            </div>

            {/* grilla: pintamos los proyectos ya filtrados */}
            <div className="grilla-proyectos">
                {proyectosFiltrados.map((proyecto) => (
                    <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
                ))}
            </div>

            {/* bloque de analisis  sigue al primer proyecto filtrado */}
            <Card className="detalle-proyecto" id="detalle-proyecto">
                <span className="antetitulo">Análisis técnico destacado</span>
                <h2>{proyectoDestacado.titulo}: arquitectura implementada</h2>
                <div className="columnas-detalle">
                    <div>
                        <Icono nombre="datos" tamano={18} />
                        <strong>Problemática</strong>
                        <p>
                            {proyectoDestacado.problematica}
                        </p>
                    </div>
                    <div>
                        <Icono nombre="frontend" tamano={18} />
                        <strong>Arquitectura</strong>
                        <p>{proyectoDestacado.arquitectura}</p>
                    </div>
                    <div>
                        <Icono nombre="verificar" tamano={18} />
                        <strong>Resultado</strong>
                        <p>{proyectoDestacado.resultado}</p>
                    </div>
                </div>
            </Card>

        </section>
    );
};

export default SeccionProyectos;

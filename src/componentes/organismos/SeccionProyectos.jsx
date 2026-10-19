import EncabezadoSeccion from '../moleculas/EncabezadoSeccion';
import TarjetaProyecto from '../moleculas/TarjetaProyecto';
import { useFiltroProyectos } from '../../hooks/useFiltroProyectos.js';
import {encabezadosSecciones, proyectos} from '../../datos/informacionPerfil';
import {Button, Card} from "antd";
import Icono from "../atomos/Icono.jsx";

const SeccionProyectos = () => {

    const { filtroActivo, cambiarFiltro, proyectosFiltrados, filtros } = useFiltroProyectos();
        // llamo al metodo del hook y destructuro lo q me retorna

    const proyectoDestacado = proyectosFiltrados[0] ?? proyectos[0];
        //proyectos filtrados intenta obtener el primer elemento de la lista filtrada
        // ?? revisa q lo q esta a su izquierda no sea nulo o undefines
        // si el lado izq fue undefined toma como respaldo del primer proyecto de la lista

    return (
        <section>

            <EncabezadoSeccion {...encabezadosSecciones.proyectos} />

            <div className="fila-filtros" role="group" aria-label="Filtros de proyectos">
                {filtros.map((fil) => (
                    <Button key={fil}
                        size="small"
                        className={filtroActivo === fil ? 'filtro filtro--activo' : 'filtro'}
                        aria-pressed={filtroActivo === fil}
                        onClick={() => cambiarFiltro(fil)}
                    >
                        {fil}
                    </Button>
                ))}
            </div>

            {/* pinto los proyectos ya filtrados */}
            <div className="grilla-proyectos">
                {proyectosFiltrados.map((proyecto) => (
                    <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
                ))}
            </div>


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
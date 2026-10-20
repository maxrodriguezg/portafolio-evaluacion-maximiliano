import { Fragment } from 'react';
import { Card } from 'antd';
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion';
import ItemHabilidad from '../moleculas/ItemHabilidad';
import {
    encabezadosSecciones,
    flujoIngenieria,
    // 'as' renombra la importación: dentro del componente se llama
    // 'gruposHabilidades' porque cada elemento es un grupo (Backend,
    // Frontend, Tools), no una habilidad individual.
    habilidades as gruposHabilidades,
} from '../../datos/informacionPerfil';

// no tiene estado ni props, solo recorre los datos
// y delega el render de cada grupo en la molécula ItemHabilidad.
const SeccionHabilidades = () => (
    <>
        {/* Encabezado de la sección desde los datos centralizados */}
        <EncabezadoSeccion {...encabezadosSecciones.habilidades} />

        {/* aria-label da nombre accesible a la zona: los lectores de
            pantalla la anuncian como región navegable */}
        <section className="grilla-habilidades" aria-label="Stack técnico">
            {/* map recorre los 3 grupos de habilidades. Además del grupo,
                pasamos el 'indice' (posición en el array): ItemHabilidad
                lo usa para numerar cada tarjeta ("01", "02", "03") */}
            {gruposHabilidades.map((grupo, indice) => (
                <ItemHabilidad key={grupo.id} grupo={grupo} indice={indice} />
            ))}
        </section>

        {/* Bloque inferior: flujo de ingeniería como línea de pasos */}
        <Card className="flujo-trabajo">
            <div className="flujo-trabajo__cuerpo">
                <div>
                    <span className="antetitulo">Flujo de ingeniería</span>
                    <h3>Del requerimiento a una entrega verificable.</h3>
                </div>
                <div className="pasos-flujo">
                    {/* Cada paso es un <span>, y ENTRE pasos se dibuja un <i />
                        que hace de separador visual (un punto en el diseño).
                        Para devolver dos elementos por iteración, React exige
                        un elemento padre con 'key': Fragment cumple ese rol
                        SIN agregar un nodo extra al DOM (a diferencia de un div) */}
                    {flujoIngenieria.map((paso, indice) => (
                        <Fragment key={paso}>
                            <span>{paso}</span>
                            {/* El separador se dibuja solo si NO es el último
                                paso: length - 1 es el índice del último, así
                                evitamos un punto colgando al final */}
                            {indice < flujoIngenieria.length - 1 && <i />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </Card>
    </>
);

export default SeccionHabilidades;

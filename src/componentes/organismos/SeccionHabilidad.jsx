import { Fragment } from 'react';
import { Card } from 'antd';
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion';
import ItemHabilidad from '../moleculas/ItemHabilidad';
import {
    encabezadosSecciones,
    flujoIngenieria,
    habilidades as gruposHabilidades,
} from '../../datos/informacionPerfil';

const SeccionHabilidades = () => (
    <>
        <EncabezadoSeccion {...encabezadosSecciones.habilidades} />

        <section className="grilla-habilidades" aria-label="Stack técnico">
            {gruposHabilidades.map((grupo, indice) => (
                <ItemHabilidad key={grupo.id} grupo={grupo} indice={indice} />
            ))}
        </section>

        <Card className="flujo-trabajo">
            <div className="flujo-trabajo__cuerpo">
                <div>
                    <span className="antetitulo">Flujo de ingeniería</span>
                    <h3>Del requerimiento a una entrega verificable.</h3>
                </div>
                <div className="pasos-flujo">
                    {flujoIngenieria.map((paso, indice) => (
                        <Fragment key={paso}>
                            <span>{paso}</span>
                            {indice < flujoIngenieria.length - 1 && <i />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </Card>
    </>
);

export default SeccionHabilidades;

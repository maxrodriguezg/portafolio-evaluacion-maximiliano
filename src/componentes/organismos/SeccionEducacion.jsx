
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion';

import { encabezadosSecciones, educacion, modulosFormacion, metodologias} from '../../datos/informacionPerfil';
import {Card} from "antd";
import Icono from "../atomos/Icono.jsx";
import EtiquetaTecnologia from "../atomos/EtiquetaTecnologia.jsx";


const SeccionEducacion = () => (
    <>
        <EncabezadoSeccion {...encabezadosSecciones.educacion} />

        {educacion.map(({ id, institucion, logo, titulo, estado, descripcion }) => (
            <Card key={id} className="portada-educacion tarjeta-seccion">
                <div className="portada-educacion__cuerpo">
                    <div className="marca-institucion">
                        <img src={logo} alt="Duoc UC" className="marca-institucion__logo" />
                    </div>
                    <div>
                        <span className="antetitulo">Formación principal</span>
                        <h2>{titulo}</h2>
                        <p>
                            {institucion} · {descripcion}
                        </p>
                    </div>
                    <span className="fecha">
                        <Icono nombre="calendario" tamano={13} /> {estado}
                    </span>
                </div>
            </Card>
        ))}

        <div className="grilla-modulos">
            {modulosFormacion.map((modulo) => (
                <Card key={modulo.numero} className="tarjeta-modulo">
                    <span className="tarjeta-modulo__numero">{modulo.numero}</span>
                    <Icono nombre={modulo.icono} tamano={20} />
                    <h3>{modulo.titulo}</h3>
                    <p>{modulo.descripcion}</p>
                </Card>
            ))}
        </div>

        <Card className="tarjeta-metodologias">
            <div className="tarjeta-metodologias__cuerpo">
                <div>
                    <span className="antetitulo">Metodologías complementarias</span>
                    <h3>Preparación integral para equipos de producto</h3>
                </div>
                <div className="fila-tecnologias">
                    {metodologias.map((meto) => (
                        <EtiquetaTecnologia key={meto}>{meto}</EtiquetaTecnologia>
                    ))}
                </div>
            </div>
        </Card>
    </>
);

export default SeccionEducacion;

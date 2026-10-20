
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion.jsx';

import { encabezadosSecciones, educacion, modulosFormacion, metodologias} from '../../datos/informacionPerfil';
import {Card} from "antd";
import Icono from "../atomos/Icono.jsx";
import EtiquetaTecnologia from "../atomos/EtiquetaTecnologia.jsx";

// recorre los datos y los reparte en moleculas
const SeccionEducacion = () => (
    <>
        {/* encabezado de la sección desde los datos centralizados */}
        <EncabezadoSeccion {...encabezadosSecciones.educacion} />

        {/* tarjeta principal por cada título obtenidoen los datos hay uno
            Analista Programador en Duoc UC el map desestructura cada cosa
            para usar sus campos directamente por nombre */}
        {educacion.map(({ id, institucion, logo, titulo, estado, descripcion }) => (
            <Card key={id} className="portada-educacion tarjeta-seccion">
                <div className="portada-educacion__cuerpo">
                    <div className="marca-institucion">
                        {/* alt describe la imagen para accesibilidad */}
                        <img src={logo} alt="Duoc UC" className="marca-institucion__logo" />
                    </div>
                    <div>
                        <span className="antetitulo">Formación principal</span>
                        <h2>{titulo}</h2>
                        <p>
                            {institucion} · {descripcion}
                        </p>
                    </div>
                    {/* estado cumple el rol del año de obtención En curso */}
                    <span className="fecha">
                        <Icono nombre="calendario" tamano={13} /> {estado}
                    </span>
                </div>
            </Card>
        ))}

        {/* plantilla con los modulos de la malla formativa */}
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

        {/* metodologias complementarias como etiquetas */}
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

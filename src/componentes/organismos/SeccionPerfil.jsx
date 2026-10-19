import { Card } from 'antd';
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion.jsx';
import AvatarPerfil from '../atomos/AvatarPerfil.jsx';
import Boton from '../atomos/Boton.jsx';
import Icono from '../atomos/Icono.jsx';
import EtiquetaTecnologia from '../atomos/EtiquetaTecnologia.jsx';
import TarjetaMetrica from '../moleculas/TarjetaMetrica.jsx';
import {
    perfil, especialidad, principiosDesarrollo, metricas, encabezadosSecciones,
} from '../../datos/informacionPerfil.js';

const SeccionPerfil = ({ onNavegar }) => {
    const meta = encabezadosSecciones.perfil;

    return (
        <section>
            <EncabezadoSeccion antetitulo={meta.antetitulo} titulo={meta.titulo} descripcion={meta.descripcion} />

            <div className="perfil-grid">
                <Card className="perfil-card tarjeta-base">
                    <div className="perfil-card__retrato">
                        <AvatarPerfil src={perfil.avatar} iniciales={perfil.iniciales} tamano={120} />
                    </div>
                    <div className="perfil-card__info">
                        <span className="antetitulo">{perfil.cargo} · {perfil.edad} años</span>
                        <h2>{perfil.nombre} {perfil.apellido}</h2>
                        <p>{perfil.descripcion}</p>
                        <div className="perfil-card__acciones">
                            <Boton onClick={() => onNavegar('proyectos')}>Explorar proyectos <Icono nombre="flecha" /></Boton>
                            <Boton variante="secundario" onClick={() => onNavegar('contacto')}>Contactar</Boton>
                        </div>
                    </div>
                </Card>

                <div className="columna-perfil">
                    <Card className="tarjeta-declaracion tarjeta-base">
                        <span className="antetitulo">{especialidad.antetitulo}</span>
                        <div className="titulo-declaracion">
                            <Icono nombre={especialidad.icono} tamano={20} />
                            <h3>{especialidad.titulo}</h3>
                        </div>
                        <p>{especialidad.descripcion}</p>
                        <div className="fila-tecnologias">
                            {especialidad.tecnologias.map((tec) => (
                                <EtiquetaTecnologia key={tec}>{tec}</EtiquetaTecnologia>
                            ))}
                        </div>
                    </Card>

                    <Card className="tarjeta-principios tarjeta-base">
                        <h3>Principios de desarrollo</h3>
                        {principiosDesarrollo.map((principio) => (
                            <div className="principio" key={principio.titulo}>
                                <Icono nombre="verificar" tamano={16} />
                                <div>
                                    <strong>{principio.titulo}</strong>
                                    <span>{principio.detalle}</span>
                                </div>
                            </div>
                        ))}
                    </Card>
                </div>
            </div>

            <div className="perfil-metricas">
                {metricas.map((m) => (
                    <TarjetaMetrica key={m.id} icono={m.icono} titulo={m.titulo} descripcion={m.descripcion} />
                ))}
            </div>
        </section>
    );
};

export default SeccionPerfil;
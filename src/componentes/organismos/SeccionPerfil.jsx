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

// recibe 'onNavegar' por props la funcion del hook useNavegacion que
// le pasa PaginaPrincipal para cambiar de sección sin recargar la pagina
const SeccionPerfil = ({ onNavegar }) => {
    // Tomamos el encabezado de esta sección desde los datos centralizados.
    const meta = encabezadosSecciones.perfil;

    return (
        <section>
            {/* encabezado reutilizable antetitulo, h1 y descripcion  */}
            <EncabezadoSeccion antetitulo={meta.antetitulo} titulo={meta.titulo} descripcion={meta.descripcion} />

            <div className="perfil-grid">
                {/* Tarjeta principal foto + datos personales */}
                <Card className="perfil-card tarjeta-base">
                    <div className="perfil-card__retrato">
                        {/* avatar con la foto si no carga, muestra las iniciales */}
                        <AvatarPerfil src={perfil.avatar} iniciales={perfil.iniciales} tamano={120} />
                    </div>
                    <div className="perfil-card__info">
                        <span className="antetitulo">{perfil.cargo} · {perfil.edad} años</span>
                        <h2>{perfil.nombre} {perfil.apellido}</h2>
                        <p>{perfil.descripcion}</p>
                        {/* botones de llamada a la accion navegan a otras
                            secciones usando el callback recibido por props */}
                        <div className="perfil-card__acciones">
                            <Boton onClick={() => onNavegar('proyectos')}>Explorar proyectos <Icono nombre="flecha" /></Boton>
                            <Boton variante="secundario" onClick={() => onNavegar('contacto')}>Contactar</Boton>
                        </div>
                    </div>
                </Card>

                {/* columna secundaria especialidad y principios */}
                <div className="columna-perfil">
                    <Card className="tarjeta-declaracion tarjeta-base">
                        <span className="antetitulo">{especialidad.antetitulo}</span>
                        <div className="titulo-declaracion">
                            <Icono nombre={especialidad.icono} tamano={20} />
                            <h3>{especialidad.titulo}</h3>
                        </div>
                        <p>{especialidad.descripcion}</p>
                        {/* map() recorre el array de tecnologías y renderiza
                            una etiqueta por cada una 'key' es obligatoria siempre xq
                            ayuda a React a identificar cada elemento de la lista */}
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

            {/* fila inferior metricas de formación idiomas y foco tecnico */}
            <div className="perfil-metricas">
                {metricas.map((m) => (
                    <TarjetaMetrica key={m.id} icono={m.icono} titulo={m.titulo} descripcion={m.descripcion} />
                ))}
            </div>
        </section>
    );
};

export default SeccionPerfil;

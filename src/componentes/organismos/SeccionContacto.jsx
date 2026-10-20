import { Form } from 'antd';
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion.jsx';
import CampoFormulario from '../moleculas/CampoFormulario.jsx';
import Boton from '../atomos/Boton.jsx';
import Icono from '../atomos/Icono.jsx';
import { useFormularioContacto } from '../../hooks/useFormularioContacto.js';
import { encabezadosSecciones, perfil, redes } from '../../datos/informacionPerfil';

const SeccionContacto = () => {
    // del hook obtenemos:
    //   form -> instancia del formulario de AntD se conecta al <Form>
    //   enviado -> true cuando el formulario se envió con éxito
    //   manejarEnvio -> onFinish solo corre si TODAS las validaciones pasan
    //   reiniciar -> vuelve al formulario vacío
    const { form, enviado, manejarEnvio, reiniciar } = useFormularioContacto();

    return (
        <section>
            <EncabezadoSeccion {...encabezadosSecciones.contacto} />

            <div className="contacto-grid">
                {/* columna izquierda presentación y redes iempre visible */}
                <aside className="contacto-lado">
                    <div className="contacto-ilustracion">
                        <img src={perfil.avatar} alt="Ilustración de perfil" />
                        <span className="contacto-ilustracion__badge">Disponible para nuevos desafíos</span>
                    </div>

                    <h2>Construyamos una solución sólida.</h2>
                    <p>
                        Comparta el contexto, los objetivos y el alcance inicial.
                        Responderé con una propuesta de próximos pasos.
                    </p>

                    <div className="contacto-redes">
                        <a href={redes.linkedin} target="_blank" rel="noreferrer">
                            <Icono nombre="linkedin" tamano={14} /> LinkedIn <Icono nombre="externo" tamano={13} />
                        </a>
                        <a href={redes.github} target="_blank" rel="noreferrer">
                            <Icono nombre="github" tamano={14} /> GitHub <Icono nombre="externo" tamano={13} />
                        </a>
                    </div>
                </aside>

                {/* renderizado condicional si ya se envio, muestra el panel
                    de exito si no, el formulario. enviado es el interruptor */}
                {enviado ? (
                    <div className="contacto-exito">
                        <Icono nombre="verificar" tamano={30} />
                        <h2>¡Mensaje enviado!</h2>
                        <p>Gracias por contactarme. Te responderé pronto.</p>
                        {/* boton para volver atrás llama a reiniciar() del hook */}
                        <Boton onClick={reiniciar}>Enviar otro mensaje</Boton>
                    </div>
                ) : (
                    // form={form} conecta la instancia del hook onFinish se
                    // ejecuta SOLO si la validación de AntD pasa
                    <Form form={form} layout="vertical" className="contacto-form" onFinish={manejarEnvio}>
                        <div className="contacto-form__fila">
                            {/* Cada CampoFormulario envuelve un Form.Item de AntD
                                con sus reglas required, type: email, min: 15.
                                La validación del cliente la hace AntD con ellas */}
                            <CampoFormulario
                                nombre="nombre"
                                etiqueta="Nombre"
                                placeholder="Nombre y apellido"
                                reglas={[{ required: true, message: 'Ingresa tu nombre.' }]}
                            />
                            <CampoFormulario
                                nombre="correo"
                                etiqueta="Correo electrónico"
                                tipo="email"
                                placeholder="nombre@empresa.com"
                                reglas={[
                                    { required: true, message: 'Ingresa tu correo.' },
                                    { type: 'email', message: 'Ingresa un correo válido.' },
                                ]}
                            />
                        </div>

                        <CampoFormulario
                            nombre="asunto"
                            etiqueta="Asunto"
                            placeholder="¿En qué puedo colaborar?"
                            reglas={[{ required: true, message: 'Indica el asunto.' }]}
                        />

                        <CampoFormulario
                            nombre="mensaje"
                            etiqueta="Mensaje"
                            tipo="textarea"
                            placeholder="Describa brevemente el proyecto, alcance u oportunidad..."
                            reglas={[{ required: true, min: 15, message: 'El mensaje debe tener al menos 15 caracteres.' }]}
                        />

                        <div className="contacto-form__pie">
                            <span>Los campos son obligatorios.</span>
                            {/* htmlType="submit" dispara la validación de AntD:
                                si todo pasa, onFinish (manejarEnvio) se ejecuta */}
                            <Boton htmlType="submit">Validar y enviar <Icono nombre="flecha" tamano={15} /></Boton>
                        </div>
                    </Form>
                )}
            </div>
        </section>
    );
};

export default SeccionContacto;

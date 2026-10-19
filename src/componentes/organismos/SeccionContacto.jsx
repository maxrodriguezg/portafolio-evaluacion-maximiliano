import { Form } from 'antd';
import EncabezadoSeccion from '../moleculas/EncabezadoSeccion';
import CampoFormulario from '../moleculas/CampoFormulario';
import Boton from '../atomos/Boton';
import Icono from '../atomos/Icono';
import { useFormularioContacto } from '../../hooks/useFormularioContacto.js';
import { encabezadosSecciones, perfil, redes } from '../../datos/informacionPerfil';

const SeccionContacto = () => {
    const { form, enviado, manejarEnvio, reiniciar } = useFormularioContacto();

    return (
        <section>
            <EncabezadoSeccion {...encabezadosSecciones.contacto} />

            <div className="contacto-grid">
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

                {enviado ? (
                    <div className="contacto-exito">
                        <Icono nombre="verificar" tamano={30} />
                        <h2>¡Mensaje enviado!</h2>
                        <p>Gracias por contactarme. Te responderé pronto.</p>
                        <Boton onClick={reiniciar}>Enviar otro mensaje</Boton>
                    </div>
                ) : (
                    <Form form={form} layout="vertical" className="contacto-form" onFinish={manejarEnvio}>
                        <div className="contacto-form__fila">
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
                            <Boton htmlType="submit">Validar y enviar <Icono nombre="flecha" tamano={15} /></Boton>
                        </div>
                    </Form>
                )}
            </div>
        </section>
    );
};

export default SeccionContacto;

# Portafolio Profesional · Maximiliano Rodríguez

Portafolio web interactivo desarrollado como con **React, Vite y Ant Design**, bajo la metodología **Atomic Design**. Presenta mi perfil profesional, proyectos, experiencia, formación, habilidades y un formulario de contacto con validación en el cliente.

---

## Demo

> _()._

## Tecnologías

| Tecnología | Uso |
|---|---|
| **React ** | Construcción de la interfaz por componentes |
| **Vite ** | Entorno de desarrollo y empaquetado |
| **Ant Design 6=** | Librería de componentes de interfaz |
| **JavaScript ** | Lógica  |
| **CSS** | Estilos propios (variables, Grid y Flexbox) |
| **Vitest + Testing Library** | Pruebas automatizadas |

##  Características

- navegación entre secciones sin recargar la página.
- **Atomic Design**: componentes organizados en átomos, moléculas, organismos, plantilla y página.
- **Tema personalizado** de Ant Design mediante *design tokens* (`ConfigProvider`).
- **Formulario de contacto** con validación en el cliente usando reglas de Ant Design.
- **Filtro dinámico** de proyectos por categoría y tecnología.
- **Footer dinámico**: el año se calcula por código con un hook personalizado.
- **49 pruebas automatizadas** que validan el renderizado de los organismos principales y el comportamiento del formulario.

##  Arquitectura — Atomic Design

```text
src/
├── componentes/
│   ├── atomos/          # Boton, Icono, EtiquetaTecnologia, AvatarPerfil
│   ├── moleculas/       # ItemMenu, EncabezadoSeccion, TarjetaProyecto, TarjetaMetrica, ...
│   ├── organismos/      # NavegacionLateral, BarraSuperior, SeccionPerfil, SeccionProyectos, ...
│   └── plantillas/      # PlantillaDashboard (estructura de la página)
├── paginas/             # PaginaPrincipal (une datos + plantilla + secciones)
├── hooks/               # Hooks personalizados
├── datos/               # Contenido centralizado (única fuente de verdad)
├── estilos/             # variables, base, layout y componentes
└── pruebas/             # Configuración del entorno de testing
```

### Flujo de composición

```text
index.html → main.jsx → App.jsx → PaginaPrincipal (Página)
  → PlantillaDashboard (Plantilla)
    → Organismos → Moléculas → Átomos
```

## 🪝 Hooks personalizados

| Hook | Responsabilidad |
|---|---|
| `useNavegacion` | Controla la sección activa de la SPA |
| `useFiltroProyectos` | Gestiona el filtro dinámico de proyectos por categoría o tecnología |
| `useFormularioContacto` | Integra `Form.useForm()` de Ant Design y el estado de envío |
| `useAnioActual` | Calcula el año actual para el footer |

##  Formulario de contacto

Construido con **Ant Design Form** (`Form`, `Form.Item`, `useForm`) y validación declarativa:

- **Campos**: nombre, correo electrónico, asunto y mensaje.
- **Reglas**: campos obligatorios, formato de correo válido y longitud mínima del mensaje.
- **Comportamiento**: al enviar un formulario válido se muestra un panel de éxito; el botón **"Enviar otro mensaje"** reinicia el formulario.
- **`onFinish`** solo se ejecuta cuando todas las reglas de validación se cumplen.

## Pruebas automatizadas

```bash
npm test          # ejecuta todas las pruebas una vez
npm run test:watch # ejecuta las pruebas en modo watch
```

Estado actual: **49 pruebas en 7 archivos, todas en verde** ✅.

Cubren, entre otras cosas:

- Renderizado de los organismos principales.
- Validación del formulario (vacío, correo inválido y mensaje demasiado corto).
- Flujo de éxito y reinicio del formulario.
- Lógica del hook `useFiltroProyectos`.
- Footer con año dinámico.

##  Autor

**Maximiliano Rodríguez** — Analista Programador en formacion (Duoc UC)

- GitHub: [@maxrodriguezg](https://github.com/maxrodriguezg)
- LinkedIn: [Maximiliano Rodríguez Gamboa](https://www.linkedin.com/in/maximiliano-rodriguez-gamboa-0416b0444/)
- Correo: maxi.rodriguezg@outlook.com

## Licencia

Proyecto desarrollado con fines académicos para la asignatura de Desarrollo FullStack 2(Duoc UC).

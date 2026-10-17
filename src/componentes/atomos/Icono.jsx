import {
    AppstoreOutlined,
    ArrowRightOutlined,
    CalendarOutlined,
    CheckOutlined,
    CloudServerOutlined,
    CodeOutlined,
    DatabaseOutlined,
    ExportOutlined,
    FileTextOutlined,
    GithubOutlined,
    LayoutOutlined,
    LinkedinOutlined,
    MailOutlined,
    ReadOutlined,
    SafetyCertificateOutlined,
    SettingOutlined,
    SolutionOutlined,
    ToolOutlined,
    UserOutlined,
} from '@ant-design/icons';

const diccionarioIconos = {
    perfil: UserOutlined,
    proyectos: AppstoreOutlined,
    experiencia: SolutionOutlined,
    educacion: ReadOutlined,
    habilidades: CodeOutlined,
    contacto: MailOutlined,
    apariencia: SettingOutlined,
    herramientas: ToolOutlined,
    seguridad: SafetyCertificateOutlined,
    herramienta: ToolOutlined,
    calendario: CalendarOutlined,
    documento: FileTextOutlined,
    backend: CloudServerOutlined,
    frontend: LayoutOutlined,
    github: GithubOutlined,
    linkedin: LinkedinOutlined,
    datos: DatabaseOutlined,
    flecha: ArrowRightOutlined,
    verificar: CheckOutlined,
    externo: ExportOutlined,
};

const Icono = ({ nombre, tamano = 18, style, ...resto }) => {
    const ComponenteIcono = diccionarioIconos[nombre];
    if (!ComponenteIcono) return null;

    return (
        <ComponenteIcono
            style={{ fontSize: tamano, ...style }}
            {...resto}
        />
    );
};

export default Icono;
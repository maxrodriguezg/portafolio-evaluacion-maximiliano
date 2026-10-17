import { Tag } from 'antd';

const EtiquetaTecnologia = ({ children, ...resto }) => (
    <Tag {...resto}>{children}</Tag>
);

export default EtiquetaTecnologia;
import { Avatar } from 'antd';

const AvatarPerfil = ({ src, iniciales, tamano = 80, ...resto }) => {
    return (
        <Avatar size={tamano} src={src} {...resto}>
            {iniciales}
        </Avatar>
    );
};

export default AvatarPerfil;
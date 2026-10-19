import { useState } from 'react';

export const useNavegacion = (seccionInicial = 'perfil') => {   // 1
    const [seccionActiva, setSeccionActiva] = useState(seccionInicial);   // 2

    const cambiarSeccion = (id) => setSeccionActiva(id);   // 3

    return { seccionActiva, cambiarSeccion };   // 4
};
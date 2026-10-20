import { useState } from 'react';

// hook q controla la navegación del dashboard q seccion esta activa
// el parametro tiene valor por defecto perfil si nadie pasa nada
// la aplicación arranca mostrando la sección de perfil
export const useNavegacion = (seccionInicial = 'perfil') => {
    // useState crea una variable con memoria su valor sobrevive entre
    // renders y cuando cambia React vuelve a renderizar lo que la usa
    // Devuelve un array con dos elementos
    //    el valor actual -> seccionActiva
    //   [la función para cambiarlo -> setSeccionActiva
    const [seccionActiva, setSeccionActiva] = useState(seccionInicial);

    // Funcio que cambia la seccion activa Se la pasamos a los menus
    // (NavegacionLateral, SeccionPerfil) para que naveguen al hacer clic.\
    const cambiarSeccion = (id) => setSeccionActiva(id);

    // El hook devuelve un objeto con el estado actual y la función para
    // modificarlo los componentes LEEN seccionActiva y LLAMAN
    // cambiarSeccion Nunca se expone el setter directamente
    return { seccionActiva, cambiarSeccion };
};

export default useNavegacion;

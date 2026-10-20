// hook más simple posible no guarda estado ni usa efectos, solo calcula un valor en cada render
export const useAnioActual = () => new Date().getFullYear();

// new Date()    -> crea un objeto con la fecha y hora de este instante
// .getFullYear() -> extrae solo el año (ej: 2026) de esa fecha
// Al ser una función flecha de una sola línea, el return es implícito.

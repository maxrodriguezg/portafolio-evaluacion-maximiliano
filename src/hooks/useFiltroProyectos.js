import { useState } from 'react';
import { proyectos, filtrosProyectos } from '../datos/informacionPerfil.js';

// hook q gestiona el filtro de la lista de proyectos por categoria
// o por tecnologia.
export const useFiltroProyectos = () => {
    // estado con el filtro seleccionado. Arranca en Todos, que significa
    // sin filtrar asi q se muestran todos los proyectos
    const [filtroActivo, setFiltroActivo] = useState('Todos');

    // variable mutable por defecto apunta a la lista completa de proyectos
    let proyectosFiltrados = proyectos;

    // pero si el filtro activo no es Todos, se reemplaza por una lista neva
    // filter() NO modifica el array original crea
    // uno nuevo con solo los elementos que cumplen la condicion
    if (filtroActivo !== 'Todos') {
        proyectosFiltrados = proyectos.filter(
            // Un proyecto pasa el filtro si su categoría es exactamente igual al filtro, o
            //  alguna de sus tecnologías es exactamente igual al filtro
            (p) => p.categoria === filtroActivo || p.tecnologias.includes(filtroActivo)
        );
    }

    // el hook devuelve
    //   filtroActivo -> el filtro seleccionado para marcarlo en la UI
    //   cambiarFiltro -> el setState renombrado para los botones
    //   proyectosFiltrado -> la lista ya filtrada para la pantalla
    //   filtros -> los filtros disponibles para dibujar botones
    return {
        filtroActivo,
        cambiarFiltro: setFiltroActivo,
        proyectosFiltrados,
        filtros: filtrosProyectos
    };
};

export default useFiltroProyectos;

import { useState } from 'react';
import { proyectos, filtrosProyectos } from '../datos/informacionPerfil.js';

export const useFiltroProyectos = () => {
    const [filtroActivo, setFiltroActivo] = useState('Todos');

    // por defecto se muestran
    let proyectosFiltrados = proyectos;

    // Si el filtro cambia, aplicamos la condición de filtrado
    if (filtroActivo !== 'Todos') {
        proyectosFiltrados = proyectos.filter(
            (p) => p.categoria === filtroActivo || p.tecnologias.includes(filtroActivo)
        );
    }

    return {
        filtroActivo,
        cambiarFiltro: setFiltroActivo,
        proyectosFiltrados,
        filtros: filtrosProyectos
    };
};
import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useFiltroProyectos } from './useFiltroProyectos';

// describe() agrupa todos los tests de una misma unidad (el hook).
// El nombre describe qué estamos testeando.
describe('useFiltroProyectos', () => {

    // it() define UN comportamiento esperado. El nombre se lee como una
    // frase: "inicia con el filtro Todos y la lista completa".
    it('inicia con el filtro "Todos" y la lista completa de proyectos', () => {
        // ARRANGE: renderHook ejecuta el hook dentro de un componente React
        // real (los hooks necesitan React para funcionar).
        // result.current contiene TODO lo que el hook retorna.
        const { result } = renderHook(() => useFiltroProyectos());

        // ASSERT: verificamos el estado inicial.
        // Tus datos tienen 2 proyectos: Nube Médica y TrauMed.
        expect(result.current.filtroActivo).toBe('Todos');
        expect(result.current.proyectosFiltrados).toHaveLength(2);
    });

    it('filtra por categoría "Backend" y deja solo Nube Médica', () => {
        const { result } = renderHook(() => useFiltroProyectos());

        // ACT: cambiarFiltro es el setState del hook. Toda actualización de
        // estado debe ir envuelta en act() para que React la procese.
        act(() => result.current.cambiarFiltro('Backend'));

        // ASSERT: solo el proyecto con categoria 'Backend' sobrevive.
        expect(result.current.proyectosFiltrados).toHaveLength(1);
        expect(result.current.proyectosFiltrados[0].titulo).toBe('Nube Médica');
    });

    it('filtra por categoría "Desktop" y deja solo TrauMed', () => {
        const { result } = renderHook(() => useFiltroProyectos());

        act(() => result.current.cambiarFiltro('Desktop'));

        expect(result.current.proyectosFiltrados).toHaveLength(1);
        expect(result.current.proyectosFiltrados[0].titulo).toBe('TrauMed');
    });

    it('filtra por tecnología "Java", que está en ambos proyectos', () => {
        const { result } = renderHook(() => useFiltroProyectos());

        // El hook filtra por categoria O por tecnologías incluidas:
        // Nube Médica y TrauMed ambos tienen 'Java' en su array de tecnologías.
        act(() => result.current.cambiarFiltro('Java'));

        expect(result.current.proyectosFiltrados).toHaveLength(2);
    });

    it('filtra por tecnología "Spring Boot 3", que solo está en Nube Médica', () => {
        const { result } = renderHook(() => useFiltroProyectos());

        act(() => result.current.cambiarFiltro('Spring Boot 3'));

        expect(result.current.proyectosFiltrados).toHaveLength(1);
        expect(result.current.proyectosFiltrados[0].titulo).toBe('Nube Médica');
    });

    it('devuelve una lista vacía si el filtro no coincide con nada', () => {
        const { result } = renderHook(() => useFiltroProyectos());

        // Caso borde: un filtro que no existe en los datos.
        // Es importante testear estos casos, no solo el "camino feliz".
        act(() => result.current.cambiarFiltro('Python'));

        expect(result.current.proyectosFiltrados).toHaveLength(0);
    });

    it('vuelve a mostrar todo al seleccionar "Todos" después de filtrar', () => {
        const { result } = renderHook(() => useFiltroProyectos());

        // Filtramos primero...
        act(() => result.current.cambiarFiltro('Backend'));
        expect(result.current.proyectosFiltrados).toHaveLength(1);

        // ...y después volvemos a "Todos": el hook debe restaurar la lista completa.
        act(() => result.current.cambiarFiltro('Todos'));
        expect(result.current.proyectosFiltrados).toHaveLength(2);
    });
});

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SeccionProyectos from './SeccionProyectos';

// cada proyecto debe mostrar una previsualizacion, un titulo y proporcionar un enlace
// directo al repositorio además de verificar  el filtro por tecnología.
describe('Organismo SeccionProyectos', () => {

    it('renderiza el encabezado de la sección', () => {
        render(<SeccionProyectos />);

        expect(
            screen.getByRole('heading', { level: 1, name: 'Desarrollos y Proyectos' })
        ).toBeInTheDocument();
    });

    it('muestra todos los proyectos con su título', () => {
        render(<SeccionProyectos />);

        // cada TarjetaProyecto es un <Card role="article"> así que contarlos
        // verifica que la grilla renderiza una tarjeta por proyecto
        expect(screen.getAllByRole('article')).toHaveLength(2);
        expect(screen.getByText('Nube Médica')).toBeInTheDocument();
        expect(screen.getByText('TrauMed')).toBeInTheDocument();
    });

    it('cada proyecto tiene enlace directo a su repositorio', () => {
        render(<SeccionProyectos />);

        // el enlace tiene aria-label="Repositorio de {titulo}" q es su
        // nombre accesible unico por proyecto, ideal asi se busca x rol
        expect(
            screen.getByRole('link', { name: 'Repositorio de Nube Médica' })
        ).toHaveAttribute(
            'href',
            'https://github.com/CristianHernandezF/gomez_hernandez_rodriguez_010D'
        );
        expect(
            screen.getByRole('link', { name: 'Repositorio de TrauMed' })
        ).toHaveAttribute('href', 'https://github.com/maxrodriguezg');
    });

    it('destaca el primer proyecto en el análisis técnico', () => {
        render(<SeccionProyectos />);

        // el bloque Análisis tecnico destacado muestra proyectosFiltrados[0]
        expect(
            screen.getByRole('heading', { name: /Nube Médica: arquitectura implementada/ })
        ).toBeInTheDocument();
    });

    it('filtra por categoría "Backend" y deja solo Nube Médica', async () => {
        const user = userEvent.setup();
        render(<SeccionProyectos />);

        await user.click(screen.getByRole('button', { name: 'Backend' }));

        expect(screen.getByText('Nube Médica')).toBeInTheDocument();
        // queryByText devuelve null si no encuentra a diferencia de getByText
        // que lanza error es una forma de verificar q no este
        expect(screen.queryByText('TrauMed')).not.toBeInTheDocument();
        expect(screen.getAllByRole('article')).toHaveLength(1);
    });

    it('filtra por tecnología "Java", presente en ambos proyectos', async () => {
        const user = userEvent.setup();
        render(<SeccionProyectos />);

        await user.click(screen.getByRole('button', { name: 'Java' }));

        // ambos proyectos tienen JAVA en sus tecnologías.
        expect(screen.getAllByRole('article')).toHaveLength(2);
    });

    it('vuelve a mostrar todos los proyectos al elegir "Todos"', async () => {
        const user = userEvent.setup();
        render(<SeccionProyectos />);

        // filtramos primero y después volvemos a TODOS
        await user.click(screen.getByRole('button', { name: 'Backend' }));
        expect(screen.getAllByRole('article')).toHaveLength(1);

        await user.click(screen.getByRole('button', { name: 'Todos' }));
        expect(screen.getAllByRole('article')).toHaveLength(2);
    });

    it('marca el filtro activo con aria-pressed', async () => {
        const user = userEvent.setup();
        render(<SeccionProyectos />);

        // aria-pressed es el estado accesible de un boton de alternar
        // true cuando el filtro está activo verifica que cambie al usarlo
        const botonBackend = screen.getByRole('button', { name: 'Backend' });
        expect(botonBackend).toHaveAttribute('aria-pressed', 'false');

        await user.click(botonBackend);
        expect(screen.getByRole('button', { name: 'Backend' })).toHaveAttribute(
            'aria-pressed',
            'true'
        );
    });

    it('el análisis destacado sigue al primer proyecto filtrado', async () => {
        const user = userEvent.setup();
        render(<SeccionProyectos />);

        // al filtrar por Desktop proyectosFiltrados[0] pasa a ser TrauMed
        // y el bloque destacado debe actualizarse a el
        await user.click(screen.getByRole('button', { name: 'Desktop' }));

        expect(
            screen.getByRole('heading', { name: /TrauMed: arquitectura implementada/ })
        ).toBeInTheDocument();
    });
});

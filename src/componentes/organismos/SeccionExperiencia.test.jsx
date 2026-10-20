import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SeccionExperiencia from './SeccionExperiencia';

// estos tests verifican exactamente eso con los datos reales del perfil.
describe('Organismo SeccionExperiencia', () => {

    it('renderiza el encabezado de la sección', () => {
        render(<SeccionExperiencia />);

        expect(
            screen.getByRole('heading', { level: 1, name: 'Historial de Experiencia' })
        ).toBeInTheDocument();
    });

    it('expone el timeline como región accesible', () => {
        render(<SeccionExperiencia />);

        // un <section> con aria-label tiene rol region los lectores de
        // pantalla lo anuncian como zona navegable verificarlo cuida la accesibilidad
        expect(
            screen.getByRole('region', { name: 'Historial de experiencia' })
        ).toBeInTheDocument();
    });

    it('muestra la primera experiencia con su cargo, empresa y período', () => {
        render(<SeccionExperiencia />);

        // El h2 de cada ítem combina cargo · empresa.
        expect(
            screen.getByText('Desarrollador FullStack · Proyectos académicos y personales')
        ).toBeInTheDocument();
    });

    it('muestra la segunda experiencia con su cargo y empresa', () => {
        render(<SeccionExperiencia />);

        expect(
            screen.getByText('Automatización, seguridad y calidad · Práctica técnica continua')
        ).toBeInTheDocument();
    });

    it('muestra las fechas de inicio y término de cada experiencia', () => {
        render(<SeccionExperiencia />);

        // Ambas experiencias comparten el mismo periodo, así q usamos
        // getAllByText q devuelve un array en vez de getByText q exige 1 sola
        const periodos = screen.getAllByText('2024 — Actualidad');
        expect(periodos).toHaveLength(2);
    });

    it('muestra los logros de la primera experiencia', () => {
        render(<SeccionExperiencia />);

        expect(
            screen.getByText(
                'Implementación de APIs REST con Spring Boot 3, JPA, Hibernate y DTOs.'
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(/interfaces responsivas con React, Vite y JavaScript ES6\+/)
        ).toBeInTheDocument();
    });

    it('muestra las etiquetas de tecnología de ambas experiencias', () => {
        render(<SeccionExperiencia />);

        // etiquetaTecnologia renderiza un Tag de AntD con el texto exacto,
        // así que getByText funciona aunque la palabra aparezca dentro de
        // oraciones mas largas en otras partes la coincidencia es exacta
        expect(screen.getByText('Spring Boot 3')).toBeInTheDocument();
        expect(screen.getByText('Scrum')).toBeInTheDocument();
        expect(screen.getByText('GitHub Actions')).toBeInTheDocument();
        expect(screen.getByText('Snyk')).toBeInTheDocument();
    });

    it('muestra el llamado al objetivo profesional', () => {
        render(<SeccionExperiencia />);

        expect(screen.getByText('Objetivo profesional')).toBeInTheDocument();
        expect(screen.getByText(/Contribuir en equipos/)).toBeInTheDocument();
    });
});

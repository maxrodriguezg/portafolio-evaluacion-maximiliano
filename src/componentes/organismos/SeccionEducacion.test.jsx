import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SeccionEducacion from './SeccionEducacion';

describe('Organismo SeccionEducacion', () => {

    it('renderiza el encabezado de la sección', () => {
        render(<SeccionEducacion />);

        expect(
            screen.getByRole('heading', { level: 1, name: 'Formación Académica' })
        ).toBeInTheDocument();
    });

    it('muestra la institución y el título obtenido', () => {
        render(<SeccionEducacion />);

        // El h2 de la tarjeta muestra el titulo de la formacion
        expect(
            screen.getByRole('heading', { level: 2, name: 'Analista Programador' })
        ).toBeInTheDocument();

        // El parrafo combina institución · descripcion
        expect(screen.getByText(/Duoc UC · Formación orientada/)).toBeInTheDocument();
    });

    it('muestra el estado o año de la formación', () => {
        render(<SeccionEducacion />);

        // En curso cumple el rol del año - estado de obtencion
        expect(screen.getByText('En curso')).toBeInTheDocument();
    });

    it('muestra el logo de la institución', () => {
        render(<SeccionEducacion />);

        // getByAltText busca imagenes por su texto alternativo es la query
        // correcta para elementos visuales y también verifica accesibilidad
        // una imagen sin alt seria invisible para un lector de pantalla
        expect(screen.getByAltText('Duoc UC')).toBeInTheDocument();
    });

    it('muestra los tres módulos de formación con su número', () => {
        render(<SeccionEducacion />);

        expect(screen.getByText('Desarrollo de Software')).toBeInTheDocument();
        expect(screen.getByText('Datos & Modelamiento')).toBeInTheDocument();
        expect(screen.getByText('Calidad & Seguridad')).toBeInTheDocument();

        // Los modulos están numerados 01,02,02
        expect(screen.getByText('01')).toBeInTheDocument();
        expect(screen.getByText('02')).toBeInTheDocument();
        expect(screen.getByText('03')).toBeInTheDocument();
    });

    it('muestra las metodologías complementarias', () => {
        render(<SeccionEducacion />);

        expect(screen.getByText('Metodologías complementarias')).toBeInTheDocument();
        expect(screen.getByText('Scrum & Sprint Tracking')).toBeInTheDocument();
        expect(screen.getByText('Design Thinking')).toBeInTheDocument();
        expect(screen.getByText('GitHub Actions')).toBeInTheDocument();
        expect(screen.getByText('Virtualización')).toBeInTheDocument();
    });
});

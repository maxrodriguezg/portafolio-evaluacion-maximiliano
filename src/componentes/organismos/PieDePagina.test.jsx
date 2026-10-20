import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import PieDePagina from './PieDePagina';

// el footer debe tener año actual calculado mediante codigo
// useAnioActual hace new Date().getFullYear(), asi  calcula el año
// esperado de la misma forma y verificamos que aparezca renderizado
const anioActual = new Date().getFullYear();

describe('Organismo PieDePagina', () => {

    it('muestra el año actual calculado dinámicamente', () => {
        render(<PieDePagina />);

        // getByText con una expresión regular busca cualquier elemento cuyo
        // texto contenga el año es decir q si el footer dejara de usar el hook y
        // hardcodeara un año viejo, este test falla
        expect(screen.getByText(new RegExp(`${anioActual}`))).toBeInTheDocument();
    });

    it('muestra el aviso de derechos de autor', () => {
        render(<PieDePagina />);

        expect(screen.getByText(/Todos los derechos reservados/)).toBeInTheDocument();
    });

    it('incluye la información breve de contacto', () => {
        render(<PieDePagina />);

        // el correo se muestra como enlace mailto
        // información breve de contacto
        const enlaceCorreo = screen.getByRole('link', {
            name: /maxi\.rodriguezg@outlook\.com/i,
        });
        expect(enlaceCorreo).toHaveAttribute(
            'href',
            'mailto:maxi.rodriguezg@outlook.com'
        );
    });

    it('incluye enlaces a las redes sociales GitHub y LinkedIn', () => {
        render(<PieDePagina />);

        // getByRole('link', { name }) busca por el texto accesible del enlace
        // que es lo que un usuario identifica
        expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
            'href',
            'https://github.com/maxrodriguezg'
        );
        // expect.stringContaining verifica que el href CONTENGA ese texto
        expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute(
            'href',
            expect.stringContaining('linkedin.com/in/maximiliano-rodriguez')
        );
    });

    it('menciona las tecnologías de desarrollo', () => {
        render(<PieDePagina />);

        expect(screen.getByText(/React \+ Vite y Ant Design/)).toBeInTheDocument();
    });
});

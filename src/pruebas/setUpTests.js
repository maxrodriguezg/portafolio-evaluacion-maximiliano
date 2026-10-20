import '@testing-library/jest-dom';

// Archivo de configuración global de los tests (lo carga vitest antes de
// cada archivo de prueba, según vite.config.js -> setupFiles).

// matchMedia no existe en jsdom (el "navegador" simulado de los tests) y
// Ant Design lo usa para detectar breakpoints, así que lo simulamos.
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        dispatchEvent() {},
    };
};

// ResizeObserver tampoco existe en jsdom; Ant Design lo usa internamente
// para observar cambios de tamaño. globalThis es la forma estándar y
// válida en ESLint de referirse al objeto global (antes: 'global').
globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
};

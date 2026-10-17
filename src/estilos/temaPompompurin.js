export const paletaColoresPompompurin = {
    fondo: '#FFF9E9',
    panel: '#FFFFFF',
    panelSuave: '#FFFDF7',
    primario: '#FFE58A',
    primarioFuerte: '#FFD95E',
    secundario: '#A86F43',
    texto: '#493629',
    textoSuave: '#7C6D62',
    borde: '#EADFCA',
    exito: '#5D8D73',
    error: '#B85E4C',
};

export const temaPompompurin = {
    token: {
        colorPrimary: paletaColoresPompompurin.primario,
        colorInfo: paletaColoresPompompurin.secundario,
        colorLink: paletaColoresPompompurin.secundario,
        colorText: paletaColoresPompompurin.texto,
        colorTextSecondary: paletaColoresPompompurin.textoSuave,
        colorBorder: paletaColoresPompompurin.borde,
        colorBorderSecondary: '#F0E7D8',
        colorBgBase: paletaColoresPompompurin.fondo,
        colorBgContainer: paletaColoresPompompurin.panel,
        colorSuccess: paletaColoresPompompurin.exito,
        colorError: paletaColoresPompompurin.error,
        borderRadius: 12,
        fontFamily: "'Nunito Sans', 'Segoe UI', sans-serif",
        fontSize: 14,
        controlHeight: 40,
    },
    components: {
        Layout: {
            headerBg: 'rgba(255, 255, 255, 0.85)',
            bodyBg: paletaColoresPompompurin.fondo,
            siderBg: paletaColoresPompompurin.panelSuave,
            footerBg: paletaColoresPompompurin.panelSuave,
            headerHeight: 66,
            headerPadding: 0,
        },
        Menu: {
            itemBg: 'transparent',
            itemColor: '#6F6156',
            itemHoverBg: '#FFF5D4',
            itemHoverColor: paletaColoresPompompurin.texto,
            itemSelectedBg: paletaColoresPompompurin.primario,
            itemSelectedColor: paletaColoresPompompurin.texto,
            itemBorderRadius: 11,
            itemHeight: 44,
            itemMarginInline: 0,
            itemMarginBlock: 2,
        },
        Card: {
            colorBorderSecondary: paletaColoresPompompurin.borde,
            borderRadiusLG: 19,
            paddingLG: 24,
        },
        Button: {
            borderRadius: 10,
            controlHeight: 41,
            fontWeight: 800,
            primaryColor: paletaColoresPompompurin.texto,
            defaultBorderColor: paletaColoresPompompurin.texto,
        },
        Tag: {
            borderRadiusSM: 999,
            defaultBg: '#FFFAF0',
            defaultColor: '#67564A',
        },
        Input: {
            activeBorderColor: paletaColoresPompompurin.secundario,
            hoverBorderColor: paletaColoresPompompurin.secundario,
        },
    },
};

export default temaPompompurin;

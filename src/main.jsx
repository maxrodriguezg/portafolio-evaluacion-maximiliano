import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilos/variables.css';
import './estilos/base.css';
import './estilos/layout.css';
import './estilos/componentes.css';
import App from './App.jsx'
import './estilos/index.css';

import { ConfigProvider } from 'antd';
import temaPompompurin from "./estilos/temaPompompurin.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ConfigProvider theme={temaPompompurin}>
            <App />
        </ConfigProvider>
    </StrictMode>,
);

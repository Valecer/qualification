import React, {StrictMode} from 'react';
import App from './App';
import './index.scss'
import reportWebVitals from './test/reportWebVitals';
import {createRoot} from "react-dom/client";

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <StrictMode>
        <App/>
    </StrictMode>,
);
reportWebVitals();

import React, { StrictMode } from "react";
import * as ReactDOM from 'react-dom/client';
import App from './App'
// ReactDOM.render(<App />, document.getElementById('root'))

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
console.log("it is working");
root.render(
    <StrictMode>
    <App />
    </StrictMode>
);
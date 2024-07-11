import React from 'react'
import {createRoot, Root} from 'react-dom/client'
import App from './components/App'

const container  = document.getElementById("root") as HTMLElement;
const root:Root = createRoot(container);

root.render(<App/>);

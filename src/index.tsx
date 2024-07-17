import React from "react"
import {createRoot, Root} from "react-dom/client"
import App from "./App"
import "./styles/index.css"

const container: HTMLElement = document.getElementById("root")!;
const root: Root = createRoot(container);

root.render(<App/>);

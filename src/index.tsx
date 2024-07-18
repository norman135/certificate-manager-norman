import { createRoot, Root } from 'react-dom/client';
import App from './App';

const container: HTMLElement = document.getElementById('root')!;

if (container) {
	const root: Root = createRoot(container);

	root.render(<App />);
} else {
	console.log('Root element does not exist.');
}

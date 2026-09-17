import { ShaderSystem } from '@pixi/core';
import { install } from '@pixi/unsafe-eval';
import { Nitro } from '@nitrots/nitro-renderer';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.scss';

install({ ShaderSystem });
Nitro.bootstrap();
createRoot(document.getElementById('root')).render(<App />);

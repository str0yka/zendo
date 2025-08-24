import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import './index.scss';
import './reset.scss';
import './theme.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

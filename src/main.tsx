import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {TonConnectUIProvider} from "@tonconnect/ui-react";

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://djapy.github.io/app-tg-simple/tonconnect-manifest.json';

createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>,
)

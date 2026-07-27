import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContactModalProvider } from './hooks/use-contact-modal.tsx'

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ContactModalProvider>
            <App />
        </ContactModalProvider>
    </StrictMode>,
);

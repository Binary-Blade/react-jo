import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/styles/index.css';
import { Toaster } from '@/components/ui/toaster';
import { SonnerToast } from './components/ui/sonner.tsx';

/**
 * The entry point for the React application.
 *
 * @remarks
 * This file sets up the root of the React application, rendering the `App` component and other global components such as `Toaster` and `SonnerToast`.
 *
 * @example
 * ReactDOM.createRoot(document.getElementById('root')!).render(
 *   <React.StrictMode>
 *     <App />
 *     <Toaster />
 *     <SonnerToast />
 *   </React.StrictMode>
 * );
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster />
    <SonnerToast />
  </React.StrictMode>
);

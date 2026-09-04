import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Troca — Viajá más, gastá menos', description: 'Intercambio de casas y beneficios de viaje.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html>; }

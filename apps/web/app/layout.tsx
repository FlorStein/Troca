import './globals.css';
import './overrides.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Troca — Viajá más, gastá menos', description: 'Intercambio de casas y beneficios de viaje.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body><style>{`.hero:before{background-image:url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85')!important}`}</style>{children}</body></html>; }

import './globals.css';
import './overrides.css';
import {I18nProvider} from '@/components/i18n-provider';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Troca — Viajá más, gastá menos', description: 'Intercambio de casas y beneficios de viaje.' };
export default function RootLayout({children}:{children:React.ReactNode}) { const basePath=process.env.GITHUB_ACTIONS==='true'?'/Troca':'';return <html lang="es"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Outfit:wght@600;700&display=swap" rel="stylesheet"/></head><body><I18nProvider><style>{`.hero:before{background-image:url('${basePath}/troca-mendoza-hero-v2.png')!important}`}</style>{children}</I18nProvider></body></html>; }

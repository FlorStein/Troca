'use client';
import Link from 'next/link';
import {useLocale, useTranslations} from './i18n-provider';
import {Menu, X} from 'lucide-react';
import {useState} from 'react';

export function Header({app=false}:{app?:boolean}){
 const t=useTranslations('nav');const {locale,toggle}=useLocale();const [open,setOpen]=useState(false);
 const links=[['/properties',t('properties')],['/hotels',t('hotels')],['/exchanges',t('exchanges')],['/membership',t('membership')]];
 return <header className="header"><div className="wrap nav"><Link href="/" className="logo">Troca</Link><nav className="desktop-nav">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav><button className="locale-toggle" onClick={toggle} aria-label="Cambiar idioma">{locale==='es'?'PT':'ES'}</button>{app?<Link className="avatar desktop-action" href="/dashboard">AM</Link>:<Link className="btn desktop-action" href="/register">{t('start')}</Link>}<button className="menu-trigger" aria-label="Abrir navegación" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<div className="mobile-menu"><div className="wrap">{links.map(([href,label],index)=><Link key={href} href={href} onClick={()=>setOpen(false)}><span>0{index+1}</span>{label}</Link>)}<Link className="mobile-menu-cta" href={app?'/dashboard':'/register'} onClick={()=>setOpen(false)}>{app?'Ir a mi cuenta':t('start')}</Link></div></div>}</header>
}
export function Footer(){const t=useTranslations('footer');const {locale,toggle}=useLocale();return <footer className="footer"><div className="wrap foot"><div><div className="logo">Troca</div><p>Una comunidad para intercambiar casas y viajar más cerca.</p><button className="locale-toggle" onClick={toggle}>{locale==='es'?'Português':'Español'}</button></div><div><b>{t('explore')}</b><Link href="/properties">{t('explore')}</Link><Link href="/hotels">{locale==='es'?'Hoteles':'Hotéis'}</Link><Link href="/membership">{t('plans')}</Link></div><div><b>{t('community')}</b><Link href="/register">{locale==='es'?'Sumarme':'Participar'}</Link><a href="#">{t('help')}</a><a href="#">{t('contact')}</a></div></div><div className="wrap copy">© 2026 Troca · {locale==='es'?'Español':'Português'}</div></footer>}

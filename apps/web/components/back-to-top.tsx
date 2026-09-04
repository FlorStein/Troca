'use client';

import {ArrowUp} from 'lucide-react';
import {useEffect, useState} from 'react';
import {useLocale} from './i18n-provider';

export function BackToTop(){
  const [visible,setVisible]=useState(false);
  const {locale}=useLocale();
  useEffect(()=>{const update=()=>setVisible(window.scrollY>520);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);
  if(!visible)return null;
  return <button className="back-to-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label={locale==='es'?'Volver al inicio':'Voltar ao início'}><ArrowUp/><span>{locale==='es'?'Arriba':'Topo'}</span></button>;
}

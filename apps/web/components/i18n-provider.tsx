'use client';

import {NextIntlClientProvider, useTranslations} from 'next-intl';
import {createContext, useContext, useEffect, useState} from 'react';

const messages = {
  es: {nav:{properties:'Propiedades',hotels:'Hoteles',exchanges:'Intercambios',membership:'Membresía',start:'Empezar'},footer:{explore:'Explorar',community:'Comunidad',help:'Ayuda',contact:'Contacto',about:'Sobre Troca',stories:'Historias de viaje',plans:'Planes'}},
  pt: {nav:{properties:'Propriedades',hotels:'Hotéis',exchanges:'Trocas',membership:'Assinatura',start:'Começar'},footer:{explore:'Explorar',community:'Comunidade',help:'Ajuda',contact:'Contato',about:'Sobre a Troca',stories:'Histórias de viagem',plans:'Planos'}}
};
type Locale = keyof typeof messages;
const LocaleContext=createContext<{locale:Locale;toggle:()=>void}>({locale:'es',toggle:()=>{}});
export function I18nProvider({children}:{children:React.ReactNode}){
  const [locale,setLocale]=useState<Locale>('es');
  useEffect(()=>{const saved=localStorage.getItem('troca-locale') as Locale|null;if(saved==='pt'||saved==='es')setLocale(saved)},[]);
  useEffect(()=>{document.documentElement.lang=locale;localStorage.setItem('troca-locale',locale)},[locale]);
  return <LocaleContext.Provider value={{locale,toggle:()=>setLocale(x=>x==='es'?'pt':'es')}}><NextIntlClientProvider locale={locale} messages={messages[locale]}>{children}</NextIntlClientProvider></LocaleContext.Provider>;
}
export const useLocale=()=>useContext(LocaleContext);
export {useTranslations};

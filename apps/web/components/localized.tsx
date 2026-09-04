'use client';

import {useLocale} from './i18n-provider';

export function Localized({es,pt}:{es:string;pt:string}){
  const {locale}=useLocale();
  return <>{locale==='es'?es:pt}</>;
}

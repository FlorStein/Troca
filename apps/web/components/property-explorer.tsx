'use client';

import {useEffect, useMemo, useState} from 'react';
import {PropertyCard} from '@/components/ui';
import {properties} from '@/lib/data';

export function PropertyExplorer(){
  const [country,setCountry]=useState('all');
  const [type,setType]=useState('all');
  const [guests,setGuests]=useState('all');
  const [term,setTerm]=useState('');
  useEffect(()=>{const q=new URLSearchParams(window.location.search);setCountry(q.get('country')||'all');setType(q.get('type')||'all');setGuests(q.get('guests')||'all')},[]);
  const visible=useMemo(()=>properties.filter(p=>(country==='all'||p.country===country)&&(type==='all'||p.type===type)&&(guests==='all'||p.guests>=Number(guests))&&(`${p.name} ${p.city}`).toLowerCase().includes(term.toLowerCase())),[country,type,guests,term]);
  return <><div className="toolbar catalog-toolbar"><input value={term} onChange={e=>setTerm(e.target.value)} placeholder="Buscar ciudad o destino"/><select value={country} onChange={e=>setCountry(e.target.value)}><option value="all">Todos los países</option><option value="argentina">Argentina</option><option value="brasil">Brasil</option></select><select value={type} onChange={e=>setType(e.target.value)}><option value="all">Todos los viajes</option><option value="city">Ciudad</option><option value="nature">Naturaleza</option><option value="beach">Playa</option><option value="wine">Vinos y gastronomía</option></select><select value={guests} onChange={e=>setGuests(e.target.value)}><option value="all">Cualquier cantidad</option><option value="2">2+ huéspedes</option><option value="4">4+ huéspedes</option><option value="6">6+ huéspedes</option></select></div><p className="catalog-count">{visible.length} {visible.length===1?'propiedad disponible':'propiedades disponibles'}</p><div className="grid">{visible.map(p=><PropertyCard item={p} key={p.id}/>)}</div>{visible.length===0&&<div className="empty">No encontramos propiedades con esos filtros. Probá ampliar la búsqueda.</div>}</>;
}

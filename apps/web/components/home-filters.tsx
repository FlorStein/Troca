'use client';

import {useRouter} from 'next/navigation';
import {useState} from 'react';

export function HomeFilters(){
  const router=useRouter();
  const [country,setCountry]=useState('all');
  const [tripType,setTripType]=useState('city');
  const [guests,setGuests]=useState('2');
  const submit=()=>router.push(`/properties?country=${country}&type=${tripType}&guests=${guests}`);
  return <section className="filters"><div className="wrap filterwrap"><div className="filter-title"><h3>Encontrá tu próximo hogar</h3><p>Elegí cómo querés viajar.</p></div><label className="field"><small>País</small><select value={country} onChange={e=>setCountry(e.target.value)}><option value="all">Argentina y Brasil</option><option value="argentina">Argentina</option><option value="brasil">Brasil</option></select></label><label className="field"><small>Tipo de viaje</small><select value={tripType} onChange={e=>setTripType(e.target.value)}><option value="city">Escapada de ciudad</option><option value="nature">Naturaleza</option><option value="beach">Playa</option><option value="wine">Vinos y gastronomía</option></select></label><label className="field"><small>Huéspedes</small><select value={guests} onChange={e=>setGuests(e.target.value)}><option value="2">2 personas</option><option value="4">4 personas</option><option value="6">6 o más personas</option></select></label><button className="btn" type="button" onClick={submit}>Ver propiedades</button></div></section>;
}

import Link from 'next/link';
export {Header, Footer} from './shell';
import { MapPin, Star, Users, ArrowRight, Heart, Plane, Home, CalendarDays, BadgeCheck } from 'lucide-react';
import { properties, hotels, plans } from '@/lib/data';
export const Btn=({href,children,outline=false}:{href:string,children:React.ReactNode,outline?:boolean})=><Link className={`btn ${outline?'outline':''}`} href={href}>{children}</Link>;
export function PropertyCard({item=properties[0]}:{item?:typeof properties[number]}){return <article className="card"><div className="image"><img src={item.image} alt={item.name}/><Heart size={17}/></div><div className="cardbody"><h3>{item.name}</h3><p><MapPin size={14}/>{item.city}</p><div className="cardbottom"><span><Users size={14}/>{item.guests} huéspedes</span><b>{item.points} pts/noche</b></div></div></article>}
export function HotelCard({item=hotels[0]}:{item?:typeof hotels[number]}){return <article className="card"><div className="image"><img src={item.image} alt={item.name}/><span className="benefit">{item.benefit}</span></div><div className="cardbody"><h3>{item.name}</h3><p><MapPin size={14}/>{item.city}</p><div className="cardbottom"><span><Star size={14}/>{item.rating}</span><Link href={`/hotels/${item.id}`}>Ver beneficio <ArrowRight size={14}/></Link></div></div></article>}
export function SearchBar(){return <div className="search"><span><MapPin/>Destino<input placeholder="¿A dónde querés viajar?"/></span><span><CalendarDays/>Fechas flexibles</span><Btn href="/properties">Buscar <ArrowRight size={16}/></Btn></div>}
export function PlanCards(){return <div className="plans">{plans.map(p=><article key={p.id} className={`plan ${p.id==='viajero'?'featured':''}`}>{p.id==='viajero'&&<em>RECOMENDADO</em>}<h3>{p.name}</h3><strong>USD {p.price}<small>/ mes</small></strong><ul>{p.items.map(i=><li key={i}>✓ {i}</li>)}</ul><Btn href={`/register?plan=${p.id}`} outline={p.id!=='viajero'}>Elegir {p.name}</Btn></article>)}</div>}
export function PageHead({title,text,icon}:{title:string,text:string,icon?:React.ReactNode}){return <div className="pagehead">{icon}<div><h1>{title}</h1><p>{text}</p></div></div>}
export const Icons={Plane,Home,BadgeCheck};

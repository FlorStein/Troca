import {Header,Footer,PageHead,Icons} from '@/components/ui';import {PropertyExplorer} from '@/components/property-explorer';
export default function Properties(){return <><Header/><main className="wrap appmain"><PageHead title="Encontrá tu próximo hogar" text="Explorá propiedades verificadas de la comunidad." icon={<Icons.Home/>}/><PropertyExplorer/></main><Footer/></>}

export const properties=[
 {id:'mendoza-casa',name:'Casa entre viñedos',city:'Luján de Cuyo, Mendoza',country:'argentina',type:'wine',points:180,guests:4,rating:4.9,image:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85'},
 {id:'ilhabela',name:'Casa tropical con pileta',city:'Ilhabela, São Paulo',country:'brasil',type:'beach',points:220,guests:6,rating:4.8,image:'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=900&q=85'},
 {id:'palermo',name:'Departamento luminoso en Palermo',city:'Palermo, Buenos Aires',country:'argentina',type:'city',points:110,guests:2,rating:4.9,image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85'},
 {id:'bariloche-lake',name:'Cabaña frente al lago',city:'Bariloche, Río Negro',country:'argentina',type:'nature',points:240,guests:5,rating:4.9,image:'https://images.unsplash.com/photo-1643494555111-df0141d84a62?auto=format&fit=crop&w=900&q=85'},
 {id:'floripa-beach',name:'Casa a pasos del mar',city:'Campeche, Florianópolis',country:'brasil',type:'beach',points:200,guests:4,rating:4.8,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=85'},
 {id:'salta-patio',name:'Casa con patio norteño',city:'Salta Capital, Salta',country:'argentina',type:'nature',points:135,guests:3,rating:4.7,image:'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85'}
];
export const hotels=[
 {id:'casa-sur',name:'Casa Sur',city:'Palermo, Buenos Aires',benefit:'20% OFF',rating:4.8,image:'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85'},
 {id:'ganchos',name:'Ponta dos Ganchos',city:'Santa Catarina, Brasil',benefit:'Desayuno incluido',rating:4.9,image:'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=85'},
 {id:'balsas',name:'Las Balsas',city:'Villa La Angostura',benefit:'Upgrade de habitación',rating:4.7,image:'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85'}
 ,{id:'fasano-rio',name:'Fasano Rio',city:'Ipanema, Río de Janeiro',benefit:'15% OFF',rating:4.8,image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85'}
 ,{id:'cavas-wine',name:'Cavas Wine Lodge',city:'Luján de Cuyo, Mendoza',benefit:'Copa de bienvenida',rating:4.9,image:'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=85'}
 ,{id:'ponta-verde',name:'Ponta Verde Praia',city:'Maceió, Alagoas',benefit:'18% OFF',rating:4.7,image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85'}
];
export const destinations=[
 {id:'mendoza',name:'Mendoza',description:'Viñedos, montaña y sobremesas largas.',image:'https://images.unsplash.com/photo-1665254369274-4b459f3ce48c?auto=format&fit=crop&w=1200&q=85'},
 {id:'buenos-aires',name:'Buenos Aires',description:'Barrios para caminar y cultura viva.',image:'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=85'},
 {id:'florianopolis',name:'Florianópolis',description:'Playas, senderos y ritmo de isla.',image:'https://images.unsplash.com/photo-1515894347712-1d9bd6d8312f?auto=format&fit=crop&w=1200&q=85'},
 {id:'bariloche',name:'Bariloche',description:'Lagos y bosque patagónico.',image:'https://images.unsplash.com/photo-1643494555111-df0141d84a62?auto=format&fit=crop&w=1200&q=85'},
 {id:'rio',name:'Río de Janeiro',description:'Mar, ciudad y naturaleza.',image:'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=85'}
];
export const flightRoutes=[
 ['Buenos Aires','Bariloche','AEP','BRC','2 h 20 min','Hasta 15% OFF'],
 ['São Paulo','Florianópolis','GRU','FLN','1 h 15 min','Equipaje incluido'],
 ['Buenos Aires','Río de Janeiro','EZE','GIG','3 h · Directo','Hasta 12% OFF'],
 ['Buenos Aires','Mendoza','AEP','MDZ','1 h 55 min','Hasta 10% OFF'],
 ['São Paulo','Salvador','GRU','SSA','2 h 25 min','Hasta 12% OFF'],
 ['Córdoba','Florianópolis','COR','FLN','2 h 10 min','Beneficio Premium']
] as const;
export const plans=[
 {id:'base',name:'Base',monthlyPrice:6,annualPrice:39,description:'Para viajar sin publicar una casa.',items:['Hoteles aliados','Beneficios de estadía','Comunidad Troca']},
 {id:'viajero',name:'Viajero',monthlyPrice:12,annualPrice:79,description:'Para intercambiar tu casa y viajar con puntos.',items:['Todo lo de Base','Intercambio de casas','3 puntos de bienvenida','Soporte prioritario']},
 {id:'premium',name:'Premium',monthlyPrice:20,annualPrice:null,description:'Para sumar beneficios exclusivos de viaje.',items:['Todo lo de Viajero','Descuentos en vuelos','Hoteles premium','Atención prioritaria']}
];

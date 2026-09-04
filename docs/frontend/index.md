# Frontend — Troca

## Stack
- Framework: Next.js (React)
- i18n: next-intl (es/pt desde el día uno)
- Deploy: Vercel

## Rutas principales
```
/                   → Landing pública
/login              → Auth
/register           → Registro + selección de plan
/dashboard          → Home del miembro
/hotels             → Marketplace de hoteles
/hotels/[id]        → Detalle de hotel
/properties         → Buscador de casas
/properties/[id]    → Detalle de propiedad
/my-property        → Gestión de mi propiedad
/exchanges          → Mis intercambios
/membership         → Gestión de membresía
/profile/[id]       → Perfil público de miembro
```

## Reglas
- Mobile-first siempre
- Todo string de UI pasa por i18n — nunca texto hardcodeado
- Nunca mostrar precios hardcodeados — vienen de API

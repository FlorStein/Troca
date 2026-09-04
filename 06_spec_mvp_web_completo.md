# Spec — Web MVP Troca (Flujo Completo)
*Documento para Codex — Flujo completo del MVP en español y portugués*

---

## Contexto

Plataforma de membresía latinoamericana que combina intercambio de casas con marketplace de beneficios en hotelería. Foco ARG-Brasil. Dos tipos de usuario: con casa y sin casa. Ver `docs/business/index.md` para reglas de negocio completas.

---

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Supabase (Auth + DB + Storage)
- Stripe (pagos)
- next-intl (i18n es/pt)
- Lucide React (iconos)
- Deploy: Vercel

---

## Reglas generales

- Mobile-first — diseñar desde 375px hacia arriba
- Todo string de UI pasa por next-intl — nunca texto hardcodeado
- Nunca hardcodear precios — vienen de la DB
- Auth delegada a Supabase
- Imágenes de propiedades y hoteles: Supabase Storage
- Usuario siempre logueado dentro de la app — redirect a `/login` si no hay sesión

---

## Mapa de rutas

```
/ (público)
/login
/register
/register/plan          ← selección de plan post-registro
/dashboard
/hotels                 ← marketplace de hoteles
/hotels/[id]
/properties             ← buscador de casas
/properties/[id]
/my-property            ← gestión de mi propiedad
/my-property/new        ← alta de propiedad
/exchanges              ← mis intercambios
/exchanges/[id]         ← detalle de intercambio
/membership             ← gestión de membresía
/profile/[id]           ← perfil público de miembro
/admin                  ← panel admin (solo interno)
/admin/hotels/new       ← alta de hotel (admin)
```

---

## Páginas públicas

### `/` — Landing page

**Hero**
- Headline principal: "Viajá más, gastá menos"
- Subtítulo: propuesta de valor en 2 líneas — intercambio de casas + beneficios en hoteles
- 2 CTAs: "Empezar gratis" → `/register` / "Ver hoteles" → `/hotels`
- Imagen de fondo o ilustración: destinos latinoamericanos reales

**Cómo funciona**
- 3 pasos secuenciales (es una secuencia real, usar numeración):
  1. Publicá tu casa y acumulá puntos
  2. Usá tus puntos para alojarte en casas de otros miembros
  3. Accedé a hoteles partner con beneficios exclusivos
- Cada paso con ícono y descripción corta

**El argumento de amortización**
- Sección destacada con número concreto:
  "Una noche en Bariloche con Troca: solo el desayuno. Tu membresía anual: USD 39. Ya la amortizaste."
- Diseño que haga visible el ahorro real — precio tachado vs precio Troca

**Hoteles destacados**
- Grid de 3 cards de hoteles partner
- Cada card: foto, nombre, ciudad, beneficio en badge, calificación
- CTA: "Ver todos los hoteles" → `/hotels`

**Propiedades destacadas**
- Grid de 3 cards de propiedades
- Cada card: foto, ciudad, puntos/noche, capacidad
- CTA: "Explorar propiedades" → `/properties`

**Planes**
- Tabla comparativa de los 3 planes
- Plan Viajero destacado visualmente como recomendado
- CTA por plan → `/register?plan=base|viajero|premium`
- Aclaración: "30 días gratis para empezar"

**Testimonios** (ficticios para MVP)
- 3 testimonios de miembros con foto, nombre, ciudad y experiencia concreta

**Footer**
- Logo + tagline
- Links: Hoteles / Propiedades / Planes / Sobre Troca / Contacto
- Selector de idioma (ES / PT)
- Copyright

---

## Auth

### `/login`
- Email + contraseña
- Login con Google
- Link a `/register`
- Redirect post-login → `/dashboard`

### `/register`
- Nombre, email, contraseña
- Checkbox: "Tengo una propiedad para publicar" (define tipo de usuario)
- Login con Google
- Link a `/login`
- Post-registro → `/register/plan`

### `/register/plan`
- Selección de plan: Base / Viajero / Premium
- Descripción clara de qué incluye cada uno
- Precio mensual y anual con ahorro destacado del anual
- CTA por plan → checkout Stripe
- Post-pago → `/dashboard`
- Link: "Continuar con prueba gratis" (30 días sin tarjeta)

---

## App (requiere sesión)

### `/dashboard`

**Header personalizado**
- "Hola, [nombre]" + plan activo como badge
- Puntos disponibles destacados (solo Plan Viajero y Premium)

**Accesos rápidos**
- Ver hoteles disponibles
- Buscar casas
- Mi propiedad (si tiene)
- Mis intercambios

**Mi propiedad** (si tiene casa publicada)
- Card con foto, estado (activa/inactiva), puntos generados este mes
- CTA: "Editar propiedad"

**Hoteles recomendados**
- 3 cards de hoteles disponibles según temporada actual

**Actividad reciente**
- Últimos intercambios o beneficios usados

**Banner upgrade** (si es plan Base)
- Recordatorio de qué se pierde sin Plan Viajero + CTA upgrade

---

### `/hotels` — Marketplace de hoteles

**Filtros**
- Destino (buscador de ciudad)
- País (ARG / Brasil / Todos)
- Tipo de beneficio (alojamiento gratis / descuento / desayuno incluido / upgrade)
- Disponibilidad (selector de mes)
- Categoría (boutique / resort / apart-hotel / hostel)

**Listado**
- Grid responsive: 3 col desktop / 2 col tablet / 1 col mobile
- Card por hotel: foto, nombre, ciudad, beneficio en badge destacado, precio rack tachado, calificación, botón "Ver beneficio"
- Ordenamiento: relevancia / calificación / reciente
- Paginación o infinite scroll

**Estado vacío**
- Si no hay resultados con ese filtro: mensaje claro + sugerencia de ampliar búsqueda

---

### `/hotels/[id]` — Detalle de hotel

- Foto hero grande
- Nombre, ciudad, categoría, calificación con número de reviews
- **Banner de beneficio Troca:** fondo color accent, beneficio concreto en texto grande
- Precio rack tachado vs lo que paga el miembro
- Descripción del hotel
- Disponibilidad: meses como badges
- Amenities: iconos
- Mapa de ubicación (iframe Google Maps)
- Reviews de miembros (últimas 5): avatar, nombre, calificación, texto
- **CTA principal:** "Reservar con mi membresía"
  - Si tiene membresía activa → modal de confirmación + datos de contacto del hotel
  - Si no tiene membresía → modal de upgrade con CTA a `/register/plan`

---

### `/properties` — Buscador de casas

**Filtros**
- Destino (buscador de ciudad)
- País
- Fechas de estadía (date picker)
- Capacidad (personas)
- Puntos por noche (rango)
- Amenities (checkboxes: wifi, pileta, cochera, mascotas, etc.)

**Listado**
- Grid: 3 col desktop / 2 tablet / 1 mobile
- Card: foto principal, título, ciudad, puntos/noche, capacidad, calificación
- Badge de verificación si el propietario está verificado

---

### `/properties/[id]` — Detalle de propiedad

- Galería de fotos navegable (mínimo 3 fotos)
- Título, ciudad, descripción
- Puntos por noche destacados
- Capacidad, habitaciones, baños
- Amenities con iconos
- Calendario de disponibilidad (read-only para el visitante)
- **Propietario:** avatar, nombre, miembro desde, calificación, cantidad de intercambios
- Reviews de huéspedes anteriores
- **CTA:** "Solicitar intercambio"
  - Si tiene puntos suficientes → formulario de solicitud con fechas y mensaje
  - Si no tiene puntos → explicación de cómo ganar puntos
  - Si no tiene membresía → CTA a upgrade

---

### `/my-property/new` — Alta de propiedad

**Formulario en pasos:**

1. **Ubicación**
   - País, ciudad, dirección (no pública — solo ciudad visible)

2. **Descripción**
   - Título, descripción, tipo de propiedad
   - Capacidad: personas, habitaciones, baños

3. **Fotos**
   - Upload mínimo 3 fotos (Supabase Storage)
   - Drag & drop + preview

4. **Amenities**
   - Checkboxes: wifi, pileta, cochera, parrilla, mascotas permitidas, jardín, aire acondicionado, calefacción, lavarropas

5. **Disponibilidad**
   - Calendario para marcar fechas disponibles
   - Regla de puntos calculada automáticamente según destino

6. **Revisión y publicar**
   - Preview de cómo se verá la propiedad
   - CTA: "Publicar propiedad"

---

### `/my-property` — Gestión de propiedad

- Vista de la propiedad publicada (como la ve otro miembro)
- Estado: activa / inactiva (toggle)
- Puntos generados este mes / total histórico
- Disponibilidad: editar fechas
- Solicitudes recibidas: listado con estado (pendiente / aceptada / rechazada)
- CTA: "Editar propiedad" / "Ver como visitante"

---

### `/exchanges` — Mis intercambios

**Tabs:**
- Solicitudes enviadas
- Solicitudes recibidas
- Intercambios confirmados
- Historial

**Card de intercambio:**
- Foto de la propiedad
- Fechas, ciudad, estado (badge)
- Puntos involucrados
- CTA según estado: Ver detalle / Aceptar / Rechazar / Calificar

---

### `/exchanges/[id]` — Detalle de intercambio

- Datos completos del intercambio (fechas, propiedad, miembro)
- Timeline de estados: Solicitado → Aceptado → En curso → Completado
- Mensajería interna entre los dos miembros
- Post-intercambio: formulario de review (activo solo cuando ambas partes lo completan)
- Protocolo de fotos: upload pre y post intercambio

---

### `/membership` — Gestión de membresía

- Plan actual con fecha de renovación
- Uso del período de prueba (si aplica)
- Puntos disponibles y vencimiento
- Historial de pagos
- Comparativa de planes con beneficios del plan superior destacados
- CTA: "Hacer upgrade" / "Gestionar suscripción" → Stripe portal
- Sección: "¿Cuánto ahorraste con Troca?" — cálculo basado en intercambios y hoteles usados

---

### `/profile/[id]` — Perfil público

- Foto, nombre, ciudad, miembro desde
- Plan activo (badge)
- Calificación general y cantidad de intercambios
- Propiedad publicada (si tiene) con link
- Reviews recibidas de otros miembros

---

## Panel admin (interno)

### `/admin`
- Métricas: miembros activos, hoteles publicados, intercambios este mes, revenue
- Accesos rápidos: agregar hotel, ver solicitudes pendientes

### `/admin/hotels/new`
- Formulario para dar de alta hoteles partner (mismo flujo que propiedades pero con campos de sponsor: fee, tipo de plan, contacto comercial)

---

## Componentes compartidos

| Componente | Descripción |
|---|---|
| `Navbar` | Logo, links, avatar usuario, puntos, selector idioma |
| `Footer` | Links, selector idioma, copyright |
| `HotelCard` | Foto, nombre, ciudad, beneficio badge, calificación |
| `PropertyCard` | Foto, título, ciudad, puntos/noche, capacidad |
| `PlanBadge` | Badge de plan con color por tier |
| `PointsBadge` | Puntos disponibles con ícono |
| `StarRating` | Estrellas + número |
| `Modal` | Genérico — confirmaciones, upgrades, reviews |
| `UpgradePrompt` | Banner/modal para usuarios sin membresía o plan inferior |
| `PhotoGallery` | Galería navegable de fotos |
| `AvailabilityCalendar` | Calendario de disponibilidad |
| `ReviewCard` | Avatar, nombre, calificación, texto |
| `EmptyState` | Estado vacío con mensaje e ícono por contexto |

---

## i18n — Internacionalización

- Librería: next-intl
- Locales: `es` (español) y `pt` (portugués)
- Selector de idioma en navbar y footer
- Archivos: `/messages/es.json` y `/messages/pt.json`
- URL structure: `/es/hotels` y `/pt/hotels` o cookie de preferencia
- Fechas, números y monedas formateadas según locale

---

## Notificaciones y emails

- Bienvenida al registrarse
- Confirmación de pago de membresía
- Nueva solicitud de intercambio recibida
- Intercambio aceptado / rechazado
- Recordatorio de review post-intercambio
- Puntos próximos a vencer (30 días antes)
- Librería sugerida: Resend

---

## Estados de usuario y acceso por plan

| Sección | Sin sesión | Plan Base | Plan Viajero | Plan Premium |
|---|---|---|---|---|
| Landing | ✅ | ✅ | ✅ | ✅ |
| Ver hoteles | ✅ | ✅ | ✅ | ✅ |
| Reservar hotel | ❌ | ✅ | ✅ | ✅ |
| Ver propiedades | ✅ | ✅ | ✅ | ✅ |
| Solicitar intercambio | ❌ | ❌ | ✅ | ✅ |
| Publicar propiedad | ❌ | ❌ | ✅ | ✅ |
| Hoteles premium / lujo | ❌ | ❌ | ❌ | ✅ |

---

## Criterio de éxito del MVP

- 10+ hoteles publicados con beneficios reales
- 50+ usuarios con membresía activa
- 3+ intercambios coordinados entre miembros
- Flujo de pago Stripe funcionando en ARS y BRL
- Web funcional en mobile y desktop en es y pt

---
*Última actualización: septiembre 2026*

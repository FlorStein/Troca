# Spec — Prototipo Web Navegable Troca
*Para Codex — Web estática sin backend, solo simulación navegable*

---

## Objetivo

Construir un prototipo web navegable con datos ficticios para grabar el video demo de Troca. No hay backend ni autenticación real — todo es simulación hardcodeada. Debe verse y comportarse como el producto real.

---

## Stack

- **Framework:** Next.js (App Router)
- **Estilos:** Tailwind CSS
- **Iconos:** Lucide React
- **Imágenes:** Unsplash (URLs directas, sin API key)
- **Navegación:** Next.js Link — sin recarga de página
- **Sin backend:** todos los datos en archivos `/data/*.ts`
- **Sin auth:** simular usuario logueado por defecto

---

## Identidad visual

> ⚠️ Completar antes de pasarle a Codex:

```
PALETA DE COLORES:
  Primary:     #[COMPLETAR]
  Secondary:   #[COMPLETAR]
  Background:  #[COMPLETAR]
  Text:        #[COMPLETAR]
  Accent:      #[COMPLETAR]

TIPOGRAFÍA:
  Títulos:     [COMPLETAR] — Google Fonts o local
  Cuerpo:      [COMPLETAR]
  Peso títulos: [COMPLETAR]
  Peso cuerpo:  [COMPLETAR]

LOGO:
  Archivo:     /public/logo.[svg|png]
  Variante oscura: /public/logo-dark.[svg|png] (si aplica)
```

---

## Datos ficticios a crear en `/data/`

### `hotels.ts` — 6 hoteles ficticios
Cada hotel debe tener:
- id, nombre, ciudad, país
- categoría (boutique / resort / apart-hotel)
- descripción corta
- beneficio Troca (ej. "Alojamiento + desayuno incluido", "50% off rack rate")
- precio rack (valor normal sin Troca)
- foto (URL Unsplash)
- calificación (1-5) y cantidad de reviews
- disponibilidad: array de meses disponibles

Destinos sugeridos: Bariloche, Mendoza, Florianópolis, Buenos Aires, San Pablo, Montevideo

### `properties.ts` — 6 propiedades ficticias
Cada propiedad debe tener:
- id, título, ciudad, país
- descripción corta
- capacidad (personas), habitaciones, baños
- puntos por noche (según categoría de demanda)
- fotos (array de URLs Unsplash)
- amenities (array: wifi, pileta, cochera, etc.)
- calificación y cantidad de reviews
- propietario: nombre y foto de avatar

### `user.ts` — usuario simulado logueado
- nombre, foto de avatar
- plan activo: "Viajero"
- puntos disponibles: 8
- propiedad publicada: referencia a properties[0]
- intercambios realizados: 2

---

## Pantallas a construir

### 1. Landing page `/`
**Secciones:**
- Hero: headline principal + subtítulo + 2 CTAs ("Ver hoteles" / "Crear cuenta")
- Cómo funciona: 3 pasos icónicos (Publicá tu casa → Acumulá puntos → Viajá)
- Hoteles destacados: grid de 3 cards de hotels.ts
- Propuesta de valor: "Una noche en hotel = membresía amortizada" con número concreto
- Planes: tabla comparativa Base vs Viajero vs Premium
- Footer con links y logo

### 2. Marketplace de hoteles `/hotels`
- Header con buscador y filtros (ciudad, beneficio, categoría) — filtros visuales, no funcionales
- Grid de 6 cards de hotels.ts
- Cada card: foto, nombre, ciudad, beneficio destacado en badge, calificación, botón "Ver beneficio"

### 3. Detalle de hotel `/hotels/[id]`
- Foto grande hero
- Nombre, ciudad, categoría
- Beneficio Troca destacado en banner (color accent)
- Precio rack tachado vs beneficio Troca
- Descripción
- Calificación con número de reviews
- Disponibilidad (meses como badges)
- Botón CTA: "Reservar con mi membresía"
- Modal de confirmación simulada al hacer click

### 4. Buscador de propiedades `/properties`
- Buscador y filtros visuales (destino, puntos/noche, capacidad)
- Grid de 6 cards de properties.ts
- Cada card: foto, título, ciudad, puntos/noche, capacidad, calificación

### 5. Detalle de propiedad `/properties/[id]`
- Galería de fotos (al menos 3, navegable)
- Título, ciudad, descripción
- Puntos por noche destacados
- Capacidad, habitaciones, baños
- Amenities como iconos
- Propietario: avatar + nombre + calificación
- Botón CTA: "Solicitar intercambio"
- Modal de confirmación simulada al hacer click

### 6. Dashboard del miembro `/dashboard`
- Saludo con nombre del usuario simulado
- Resumen: puntos disponibles, plan activo, intercambios realizados
- Mi propiedad: card con estado "Publicada"
- Accesos rápidos: Ver hoteles / Buscar casas / Mis intercambios
- Actividad reciente: 2-3 items ficticios

### 7. Planes y membresía `/membership`
- Tabla comparativa de los 3 planes
- Plan activo del usuario resaltado
- Argumento de amortización: cálculo concreto de ahorro
- Botón upgrade a Premium (simulado)

---

## Componentes compartidos

### Navbar
- Logo Troca (izquierda)
- Links: Hoteles / Propiedades / Cómo funciona
- Avatar del usuario simulado + puntos disponibles (derecha)
- Mobile: hamburger menu

### Footer
- Logo + tagline
- Links: Sobre Troca / Hoteles / Propiedades / Planes / Contacto
- Copyright

### Componentes reutilizables
- `HotelCard` — card de hotel con foto, badge de beneficio, calificación
- `PropertyCard` — card de propiedad con foto, puntos, capacidad
- `PlanBadge` — badge de plan (Base / Viajero / Premium)
- `StarRating` — estrellas con número
- `PointsBadge` — display de puntos con ícono
- `Modal` — modal genérico para confirmaciones simuladas

---

## Comportamiento de navegación

- Todas las páginas son navegables sin recarga
- Los botones CTA abren modales de confirmación simulada (no redirigen a auth)
- Filtros en listados son visuales — no filtran datos realmente
- El usuario siempre aparece logueado (no hay login real)
- En mobile el navbar colapsa en hamburger

---

## Estructura de carpetas

```
troca-prototipo/
├── app/
│   ├── page.tsx              ← Landing
│   ├── hotels/
│   │   ├── page.tsx          ← Listado hoteles
│   │   └── [id]/page.tsx     ← Detalle hotel
│   ├── properties/
│   │   ├── page.tsx          ← Listado propiedades
│   │   └── [id]/page.tsx     ← Detalle propiedad
│   ├── dashboard/
│   │   └── page.tsx          ← Dashboard miembro
│   └── membership/
│       └── page.tsx          ← Planes
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HotelCard.tsx
│   ├── PropertyCard.tsx
│   ├── PlanBadge.tsx
│   ├── StarRating.tsx
│   ├── PointsBadge.tsx
│   └── Modal.tsx
├── data/
│   ├── hotels.ts
│   ├── properties.ts
│   └── user.ts
└── public/
    ├── logo.svg              ← COMPLETAR
    └── logo-dark.svg         ← COMPLETAR (si aplica)
```

---

## Instrucciones para Codex

1. Leer este spec completo antes de escribir código
2. Completar la sección de identidad visual con los valores que provea Flor antes de arrancar
3. Construir pantalla por pantalla en el orden listado (Landing → Hotels → Properties → Dashboard → Membership)
4. Todos los textos en español
5. Mobile-first — cada pantalla debe verse bien en 375px de ancho
6. No implementar auth, backend ni APIs — todo hardcodeado en `/data/`
7. Al terminar cada pantalla, confirmar antes de avanzar a la siguiente

---
*Última actualización: septiembre 2026*

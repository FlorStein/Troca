# Troca — Wiki del proyecto

Índice central de documentación. Antes de trabajar en cualquier área, leer el archivo correspondiente.

## Cómo usar esta wiki

1. Identificá el área en la que vas a trabajar
2. Leé el archivo de esa sección antes de escribir código o tomar decisiones
3. Si tomás una decisión nueva, actualizá el archivo correspondiente
4. El PLAN.md en la raíz es el backlog activo — ahí se registra el avance

---

## 📁 Secciones

### 🏢 Business
`docs/business/index.md`
Modelo de negocio, planes de membresía, sistema de puntos, revenue de sponsors, estrategia de lanzamiento, competidores. Leer antes de implementar cualquier lógica de negocio.

### 🔧 Backend
`docs/backend/index.md`
Arquitectura FastAPI, estructura de endpoints, modelos de datos, reglas de negocio en el servidor, integración Supabase, integración Stripe. Leer antes de tocar `/backend/`.

### 🌐 Frontend
`docs/frontend/index.md`
Arquitectura Next.js, rutas, componentes compartidos, manejo de estado, i18n, convenciones. Leer antes de tocar `/apps/web/`.

### 📱 Mobile
`docs/mobile/index.md`
Arquitectura Expo, navegación, componentes nativos, diferencias con web. Leer antes de tocar `/apps/mobile/`.

### 🎨 UX/UI
`docs/uxui/index.md`
Design system, paleta de colores, tipografía, componentes base, principios de diseño de Troca, mobile-first. Leer antes de diseñar o construir UI.

### 🤖 Agents
`docs/agents/index.md`
Arquitectura del servicio de agentes IA, herramientas disponibles, flujos automatizados, modelos usados. Leer antes de tocar `/backend/agents/`.

### ⚙️ Infra
`docs/infra/index.md`
Deploy, variables de entorno, CI/CD, Supabase config, Railway, Vercel. Leer antes de tocar configuración o infraestructura.

---

## 📄 Archivos raíz

| Archivo | Propósito |
|---|---|
| `AGENTS.md` | Instrucciones permanentes para Claude Code |
| `PLAN.md` | Backlog del MVP — fases y tareas activas |
| `docs/index.md` | Este archivo — mapa de la wiki |

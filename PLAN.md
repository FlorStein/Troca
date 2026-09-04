# PLAN.md — MVP Troca

Plan de implementación del MVP. Se actualiza a medida que avanza el desarrollo.

## Objetivo del MVP

Validar el modelo de negocio con usuarios reales. Prioridad: hotelería primero para resolver masa crítica. El intercambio de casas es secundario en esta etapa.

## Fases

### Fase 1 — Infraestructura base
- [ ] Inicializar monorepo (turborepo o nx)
- [ ] Configurar Supabase: auth, DB, storage
- [ ] Configurar Next.js con i18n (es/pt)
- [ ] Configurar FastAPI con estructura base
- [ ] Deploy básico: Vercel + Railway
- [ ] CI/CD mínimo con GitHub Actions

### Fase 2 — Auth y perfiles
- [ ] Registro con email y Google
- [ ] Selección de tipo de usuario: con casa / sin casa
- [ ] Perfil público con foto y descripción
- [ ] Verificación de email

### Fase 3 — Marketplace de hoteles (prioridad MVP)
- [ ] Panel de alta para hoteles (admin)
- [ ] Listado de hoteles con filtros (destino, tipo de beneficio)
- [ ] Página de detalle de hotel
- [ ] Sistema de calificaciones de hoteles
- [ ] Reserva/contacto con hotel (formulario o link externo por ahora)

### Fase 4 — Membresías y pagos
- [ ] Integración Stripe con planes Base y Viajero
- [ ] Período de prueba 30 días
- [ ] Portal de gestión de membresía (upgrade, cancelación)
- [ ] Lógica de acceso por plan (gates)

### Fase 5 — Publicación de propiedades
- [ ] Alta de propiedad con fotos (Supabase storage)
- [ ] Calendario de disponibilidad
- [ ] Buscador básico por destino
- [ ] Página de detalle de propiedad

### Fase 6 — Sistema de puntos e intercambios
- [ ] Lógica de puntos (generación y consumo)
- [ ] Solicitud de intercambio entre miembros
- [ ] Mensajería interna básica
- [ ] Protocolo fotos pre/post intercambio
- [ ] Reviews mutuas ciegas

### Fase 7 — Polish y lanzamiento
- [ ] Onboarding para nuevos usuarios
- [ ] Notificaciones email (Resend o similar)
- [ ] Landing page pública con propuesta de valor
- [ ] SEO básico
- [ ] Testing end-to-end de flujos críticos

## Orden de prioridad estricto

1. Hoteles funcionando → valor inmediato aunque no haya casas
2. Pagos → sin esto no hay negocio
3. Propiedades → para activar el intercambio
4. Puntos → el diferencial del modelo

## Criterio de éxito del MVP

- Al menos 10 hoteles publicados con beneficios reales
- Al menos 50 usuarios registrados con membresía activa
- Al menos 3 intercambios coordinados entre miembros
- Feedback suficiente para decidir siguiente iteración

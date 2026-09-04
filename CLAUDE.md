# CLAUDE.md — Troca

Instrucciones permanentes para Claude Code. Leer al inicio de cada sesión.

## Qué es Troca

Plataforma de membresía LATAM que combina intercambio de casas entre particulares con un marketplace de beneficios en hotelería. Foco inicial Argentina y Brasil.

## Stack — Monorepo

```
troca/
├── apps/
│   ├── web/        # Next.js (React)
│   └── mobile/     # Expo (React Native)
├── backend/
│   ├── api/        # FastAPI (Python)
│   └── agents/     # Servicio de agentes IA (Python)
├── supabase/       # Schemas y migraciones
└── CLAUDE.md
```

- DB + Auth + Storage: Supabase (PostgreSQL)
- Pagos: Stripe (ARS/BRL/USD)
- Deploy: Vercel (frontend) + Railway (backend)
- Python elegido por ecosistema IA (LangChain, CrewAI, etc.)

## Reglas de desarrollo

- Idioma del código: inglés
- Idioma de commits: español
- i18n obligatorio desde el inicio — todo string de UI pasa por el sistema de traducción
- Mobile-first en diseño de UI
- Nunca hardcodear precios — vienen de configuración
- Tests obligatorios para lógica de puntos y pagos

## Comandos frecuentes

> A completar al inicializar el repositorio

## Decisiones de negocio ya tomadas (no reabrir)

**Membresías:**
| Plan | Mensual | Anual |
|---|---|---|
| Base (sin casa) | USD 6 | USD 39 |
| Viajero (con casa) | USD 12 | USD 79 |
| Premium | USD 20 | A definir |

**Sistema de puntos:**
- 1 punto = 1 noche en destino media demanda
- Alta demanda: 2 pts/noche — Media: 1 pt/noche — Baja: 0.5 pts/noche
- Ajuste temporada: +50% alta, -25% baja
- Vencimiento anual — no transferibles ni canjeables
- Saldo bienvenida: 3 puntos al activar Plan Viajero
- Penalización cancelación tardía (<15 días): -2 puntos

**Confianza y seguridad:**
- Fotos obligatorias pre/post intercambio
- Depósito virtual retenido durante intercambio
- Verificación de identidad obligatoria para Plan Viajero
- Reviews mutuas ciegas hasta que ambas partes califican

**Sponsors/hoteles:**
- Fee mensual fijo: USD 50-150/mes según categoría
- Sponsored placement disponible como upgrade
- Sin comisión por reserva

## Lo que NO implementar aún

- Capa de vuelos (post-MVP)
- Programa de embajadores (post-MVP)
- Plan Premium completo (post-MVP)
- Proyección financiera detallada

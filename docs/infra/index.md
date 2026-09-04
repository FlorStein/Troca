# Infra — Troca

## Servicios
- Supabase: DB (PostgreSQL) + Auth + Storage
- Vercel: deploy frontend Next.js
- Railway: deploy backend FastAPI
- Stripe: pagos (ARS/BRL/USD)
- GitHub Actions: CI/CD

## Variables de entorno necesarias
```
# Supabase
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# App
NEXT_PUBLIC_API_URL=
```

## CI/CD (a configurar)
- Tests automáticos en cada PR
- Deploy preview en Vercel por rama
- Deploy a producción solo desde main

## Notas
- Nunca commitear .env — usar .env.example como referencia
- Supabase migrations versionadas en /supabase/migrations/

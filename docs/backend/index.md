# Backend — Troca

## Stack
- Framework: FastAPI (Python)
- DB + Auth + Storage: Supabase (PostgreSQL)
- Pagos: Stripe
- Deploy: Railway

## Estructura
```
backend/
├── api/
│   ├── main.py
│   ├── routers/
│   │   ├── auth.py
│   │   ├── users.py
│   │   ├── properties.py
│   │   ├── hotels.py
│   │   ├── memberships.py
│   │   ├── points.py
│   │   └── exchanges.py
│   ├── models/
│   ├── schemas/
│   ├── services/
│   └── config.py
└── agents/
    └── (ver docs/agents/index.md)
```

## Reglas
- Todo en inglés
- Nunca hardcodear precios — vienen de config/DB
- Tests obligatorios para lógica de puntos y pagos
- Auth delegada a Supabase — no reinventar

## Endpoints principales (a desarrollar)
- POST /auth/* — manejado por Supabase
- GET/POST /properties — publicación y búsqueda de casas
- GET/POST /hotels — marketplace de hoteles
- POST /memberships/subscribe — alta de membresía vía Stripe
- GET/POST /points — consulta y transacciones de puntos
- POST /exchanges — solicitud de intercambio

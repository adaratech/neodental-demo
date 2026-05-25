# neodental-demo

Prototipo navigabile di una PWA odontoiatrica per la gestione del patient journey, pensata come demo per un centro odontoiatrico conservativo.

## Cosa fa

Una webapp mobile (PWA) che accompagna il paziente attraverso le 8 fasi del percorso di cura, dalla pre-prima visita al follow-up annuale. Mostra il differenziale del centro (approccio conservativo, RIO 1/RIO 2 come campo pulito, full endorale) prima ancora che il paziente entri in studio — sposta la conversione dal momento della visita al momento della lettura.

**Feature flagship**:
- Gestione famiglia inversa (un genitore titolare → più percorsi figli)
- Sotto-journey "cartoon" per bambini con telefono proprio
- Piano igiene annuale come agenda timeline + prenotazione WhatsApp
- Agente virtuale "Sofia" su knowledge base del centro
- Notifiche push web per ogni transizione di fase
- Brand identity inequivocabilmente odontoiatrica (no celeste SSN generico)

## Stack

- Next.js 16 App Router · React 19 · Turbopack
- TypeScript strict · Tailwind v4 (CSS variables)
- Font: Plus Jakarta Sans / Inter / Nunito (kids)
- Deploy: Vercel

## Sviluppo

```bash
npm install
npm run dev
# http://localhost:3000
```

## Route principali

| Path | Schermata |
|---|---|
| `/` | Splash / landing |
| `/onboarding` | 3 slide filosofia del centro |
| `/home` | Dashboard journey adulto |
| `/journey/fase/[id]` | Dettaglio fase (8 fasi dinamiche) |
| `/famiglia` | Gestione multi-paziente |
| `/agenda` | Piano igiene annuale |
| `/chat` | Sofia — agente virtuale |
| `/kids/[id]` | Tema cartoon per bambini |

## Stato

**v0.1 — demo prototype**. Tutti i dati sono mock in `lib/mockData.ts`. Nessuna autenticazione, nessuna integrazione con gestionale clinico, nessun push reale. Per la roadmap di produzione (Fase B & C) vedere il concept design separato.

# The White Lotus 💮

A modern cabin reservation web app for customers built with Next.js App Router, focused on clean UI, server-first architecture, and a smooth booking experience.


## Tech Stack

### Framework
- **Next.js (App Router)**  
  Server Components for data fetching and layouts, Client Components only where interactivity is needed (auth, forms, navigation).

### Styling
- **Tailwind CSS**  
  Utility-first styling with a custom design system built on CSS variables (`--surface-*`, `--primary-*`, `--accent-*`) for consistent theming.
- Layouts rely on **CSS Grid + Flexbox**, avoiding fixed heights to keep pages responsive and scroll-safe.

### Authentication
- **NextAuth.js**  
  Handles sign-in, sessions, and protected routes (account, reservations).

### Backend & Database
- **Supabase**
  - PostgreSQL database for cabins, bookings, and users
  - Server-side data fetching via Server Components
  - Secure mutations through server actions

---

## Key Features

### Reservations
- Browse luxury cabins
- Create, edit, and manage reservations
- Capacity-aware guest selection

### Account Area
- Personalized welcome page
- Reservation history and updates
- Session-based access control

### Layout Architecture
- **Root layout** handles global structure (header, context-providers, background)
- Nested layouts manage account-specific UI (sidebar + content)
- Clear server/client boundaries to keep bundles small and fast

---

## Design Approach

- Calm, minimal UI inspired by boutique hospitality
- No unnecessary scrolling caused by layout padding or fixed heights
- Header and navigation remain consistent across pages
- Content stays centered with controlled max-widths, not excessive side padding

---

## Getting Started

```bash
npm install
npm run dev

```
Check out the live version [here](https://the-white-lotus-site.vercel.app/)

# Illuminate Life Gala - Project Structure

## Overview
Professional Next.js 16 application with App Router, TypeScript, and component-based architecture.

## Directory Structure

```
illuminate-life/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata & fonts
│   ├── page.tsx             # Home page (main entry)
│   └── globals.css          # Global styles
│
├── components/              # React components
│   ├── Navigation.tsx       # Fixed navigation with scroll effect
│   ├── CustomCursor.tsx     # Custom cursor & ring animation
│   ├── Hero.tsx             # Hero section with animations
│   ├── ParticleCanvas.tsx   # Canvas particle animation
│   ├── Countdown.tsx        # Event countdown timer
│   ├── About.tsx            # Mission section
│   ├── Programs.tsx         # Three programs showcase
│   ├── Experience.tsx       # Timeline of the evening
│   ├── Tickets.tsx          # Ticket tiers
│   ├── TicketModal.tsx      # Reservation modal
│   ├── Sponsors.tsx         # Sponsorship tiers
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer with links
│   └── RevealOnScroll.tsx   # Scroll reveal animations
│
├── types/                   # TypeScript type definitions
│   └── index.ts            # Shared interfaces
│
├── public/                  # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    ├── eslint.config.mjs
    └── postcss.config.mjs
```

## Component Architecture

### Client Components ('use client')
- Navigation - Scroll state management
- CustomCursor - Mouse tracking
- ParticleCanvas - Canvas animations
- Countdown - Real-time timer
- Tickets - Modal trigger
- TicketModal - Form state
- Contact - Form submission
- RevealOnScroll - Intersection Observer

### Server Components (default)
- Hero - Static content
- About - Static content
- Programs - Static data
- Experience - Timeline data
- Sponsors - Tier data
- Footer - Static links

## Key Features

1. **Performance Optimized**
   - Server components by default
   - Client components only where needed
   - Minimal JavaScript bundle

2. **Type Safety**
   - Full TypeScript coverage
   - Shared type definitions
   - Type-safe props

3. **Animations**
   - CSS keyframe animations
   - Intersection Observer for reveals
   - Canvas particle effects
   - Custom cursor tracking

4. **Responsive Design**
   - Mobile-first approach
   - Breakpoints at 768px and 1080px
   - Adaptive layouts

5. **Accessibility**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation support

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Styling Approach

- Pure CSS (no Tailwind for this design)
- CSS custom properties for theming
- BEM-like naming convention
- Scoped component styles in globals.css

## Data Flow

- Static data defined in components
- Client-side state for interactive features
- Event-driven modal system
- Intersection Observer for scroll animations

## Browser Support

- Modern browsers (ES6+)
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

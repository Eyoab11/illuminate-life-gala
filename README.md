# Illuminate Life Gala 2026

A premium, elegantly designed single-page website for the Third Annual Illuminate Life Gala — a philanthropic event supporting mental health, substance recovery, and surgical access programs.

## Features

- **Elegant Design**: Luxury gala aesthetic with gold accents and sophisticated typography
- **Interactive Elements**: Custom cursor, particle animations, scroll reveals
- **Real-time Countdown**: Live countdown to the event date
- **Responsive**: Fully responsive design for all devices
- **Performance Optimized**: Server components, minimal JavaScript
- **Type Safe**: Full TypeScript implementation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Pure CSS with custom properties
- **Fonts**: Google Fonts (Cormorant Garamond, Tenor Sans, Cinzel)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # All styles
├── components/
│   ├── Navigation.tsx      # Fixed nav with scroll effect
│   ├── Hero.tsx            # Hero section
│   ├── Countdown.tsx       # Event countdown
│   ├── About.tsx           # Mission section
│   ├── Programs.tsx        # Three programs
│   ├── Experience.tsx      # Evening timeline
│   ├── Tickets.tsx         # Ticket tiers
│   ├── Sponsors.tsx        # Sponsorship opportunities
│   ├── Contact.tsx         # Contact form
│   └── ...                 # Other components
└── types/
    └── index.ts            # TypeScript definitions
```

## Key Sections

1. **Hero** - Animated hero with particle effects
2. **Countdown** - Real-time countdown to June 12, 2026
3. **About** - Mission and impact statistics
4. **Programs** - Mental Health, Substance Recovery, Surgical Access
5. **Experience** - Timeline of the evening
6. **Tickets** - Three ticket tiers with modal reservation
7. **Sponsors** - Sponsorship opportunities
8. **Contact** - Contact form and event details

## Component Architecture

- **Server Components**: Static content (Hero, About, Programs, etc.)
- **Client Components**: Interactive features (Countdown, Modal, Cursor, etc.)
- **Optimized**: Minimal client-side JavaScript for best performance

## Customization

### Colors
Edit CSS custom properties in `app/globals.css`:
```css
:root {
  --gold: #C9A84C;
  --deep: #08080D;
  --text: #EDE7D8;
  /* ... */
}
```

### Event Date
Update countdown target in `components/Countdown.tsx`:
```typescript
const diff = new Date('2026-06-12T18:00:00').getTime() - new Date().getTime();
```

### Content
Edit component files directly - all content is defined in the components.

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to Vercel, Netlify, or any Node.js hosting platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2026 Illuminate Life Gala. All Rights Reserved.

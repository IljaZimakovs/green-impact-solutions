# Green Impact Solutions - Landing Page

## Overview
A premium, enterprise-ready landing page for Green Impact Solutions, a product engineering company focused on building connected devices, scalable software platforms, and AI-powered applications based in Rosamond, California.

## Project Structure

```
src/
├── assets/images/         # Generated images (hero)
├── components/ui/         # Shadcn UI components
├── pages/
│   └── landing.tsx        # Main landing page with all sections
├── App.tsx                # App router
└── index.css              # Global styles and theme
shared/
└── schema.ts              # Data models and validation
public/
└── favicon.png            # Favicon
index.html                 # HTML entry point
```

## Features

### Landing Page Sections
1. **Header/Nav** - Fixed navigation with logo, anchor links and CTA button
2. **Hero** - Main headline, CTAs, hero image, trusted engineering strip
3. **Services** - 4 service cards with professional images (Embedded, IoT, Mobile, AI)
4. **Industries** - 5 industry tiles with images and challenges/solutions
5. **Process** - 5-step development process
6. **Case Studies** - 3 confidential client case studies
7. **Team** - 4 team members with photos (Avatar component), bios, and social links
8. **About** - Company information and quick facts
9. **Contact** - Form with validation (PostgreSQL storage)
10. **Footer** - Links and company info

### Technical Features
- React + TypeScript + TailwindCSS
- Client-side only contact form (no backend required)
- Framer Motion for smooth animations
- Zod validation for forms
- SEO metadata (Open Graph, Twitter Cards)
- Responsive design (mobile-first)
- Accessibility (semantic HTML, aria labels)

## Contact Form
The contact form is client-side only. Form submissions are logged to the console. For production use, integrate with an email service (e.g., EmailJS, Formspree) or a backend API.

## Design System
- **Accent Color**: Green (HSL 152 65% 28%) - reflects company brand "Green Impact Solutions"
- **Font**: Inter
- **Style**: Clean, minimal, premium enterprise aesthetic with professional imagery
- **Animations**: Subtle, refined interactions:
  - Staggered fade-in on scroll for sections
  - Subtle lift (y: -4) and shadow transitions on card hover
  - Scale (1.1) on process step icons
  - Hero section has gentle floating animation
- **Images**: Professional images with warm/green tones (not blue) for services, industries, and team sections

## Generated Assets
Located in `src/assets/images/`:
- `logo.png` - Company logo
- `hero-engineering.png` - Hero section background
- `service-*.png` - Service section images (embedded, iot, mobile, ai)
- `industry-*.png` - Industry section images (cleantech, agriculture, healthcare, smartbuildings, automotive)
- `team-*.png` - Team member portraits (michael, sarah, david, emily)

## Running the Project
The application runs with `npm run dev` using Vite's development server. The default port is 5173 (or as configured by Vite).

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

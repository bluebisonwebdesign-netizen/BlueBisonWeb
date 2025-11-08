# Blue Bison Web Design - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from leading web design agency portfolios and professional service showcases like Awwwards-winning agencies, Webflow Showcase, and modern portfolio sites. This approach emphasizes visual impact, credibility, and showcasing expertise through polished design execution.

## Core Design Principles
1. **Visual Confidence**: Professional, polished aesthetic that demonstrates design expertise
2. **Portfolio-First**: Client work takes center stage with prominent, attractive presentation
3. **Trust & Accessibility**: Clear contact pathways and professional credibility markers
4. **Blue Bison Identity**: Strong brand presence through strategic use of bison imagery and blue theming

## Typography System
- **Display Font**: Bold, modern sans-serif (e.g., Inter Bold, Manrope Bold) for headlines
- **Heading Hierarchy**: 
  - H1: 3.5rem (desktop) / 2.5rem (mobile), bold weight
  - H2: 2.5rem (desktop) / 2rem (mobile), semibold
  - H3: 1.75rem, medium weight
- **Body**: Clean sans-serif (Inter, system-ui) at 1rem/1.125rem with comfortable line-height (1.6-1.7)
- **Accent**: Slightly heavier weight for CTAs and key metrics

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Component gaps: space-y-8 to space-y-12
- Card padding: p-6 to p-8
- Container: max-w-7xl with px-4

## Page Sections & Structure

### 1. Header (Sticky)
- Blue Bison logo/brand name (left)
- Navigation: About, Services, Portfolio, Contact (center/right)
- Phone number (830)290-5856 as prominent CTA button (right)
- Clean, minimal design with subtle shadow on scroll

### 2. Hero Section
- **Large Hero Image**: Professional bison imagery or abstract blue geometric pattern (full-width, 85vh)
- Overlay with semi-transparent gradient for text readability
- Centered content: 
  - Compelling headline: "Powerful Web Design for Texas Businesses"
  - Supporting subheadline about services
  - Dual CTA: "View Our Work" + "Get Started"
- Buttons with blurred backgrounds (backdrop-blur-sm, bg-white/20)

### 3. About Section
- Two-column layout (60/40 split desktop, stack mobile)
- Left: Compelling story about Blue Bison, expertise, commitment to Texas businesses
- Right: Supporting visual or key stats (years in business, clients served, satisfaction rate)
- Professional tone with approachable voice

### 4. Services Grid
- Four-column grid (lg:grid-cols-4 md:grid-cols-2)
- Each service card includes:
  - Icon from Heroicons (CodeBracket, MagnifyingGlass, Sparkles, PresentationChart)
  - Service name
  - Brief description (2-3 sentences)
- Hover effects: subtle lift and shadow
- Equal height cards with consistent padding

### 5. Portfolio Showcase (Featured Section)
- Section headline: "Websites We've Built" with pride positioning
- Three-column grid (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
- Each portfolio card:
  - Screenshot/preview image of client website
  - Client business name overlay
  - Clickable entire card (cursor-pointer)
  - Hover: scale effect (scale-105) with shadow increase
  - External link indicator icon
- Links to: Rush Wheel and Tire, Edwin's Repair Shop, Black Bexar AS, PlumbDaddy Texas, Tattoo Maze, Ready 2 Haul

### 6. Contact Section
- Two-column layout (desktop), stack mobile
- Left column (form):
  - Name, Email, Phone, Message fields
  - Submit button with loading state
  - Form action configured for bluebisonwebdesign@gmail.com
- Right column:
  - Contact information block
  - Phone: (830)290-5856 with tel: link
  - Email: bluebisonwebdesign@gmail.com with mailto: link
  - Optional: Business hours, location if applicable
  - Trust indicators: "Response within 24 hours"

### 7. Footer
- Three-column layout (desktop)
- Column 1: Blue Bison branding and tagline
- Column 2: Quick links (About, Services, Portfolio)
- Column 3: Contact info (phone, email)
- Bottom bar: Copyright notice
- Social media icons if applicable (placeholder comments)

## Component Library

### Cards
- Rounded corners: rounded-xl
- Subtle shadows: shadow-md with shadow-lg on hover
- White backgrounds with border or subtle bg-gray-50
- Consistent padding: p-6 to p-8

### Buttons
- Primary: Bold, clear hierarchy for main CTAs
- Secondary: Outline or ghost style for secondary actions
- Sizes: Large for hero CTAs, medium for forms
- Built-in hover/active states (no custom overrides needed)

### Images
- Hero: Large background image with gradient overlay
- Portfolio: Client website screenshots in consistent aspect ratio (16:9 or 4:3)
- Lazy loading for performance
- Alt text for accessibility

## Animations
**Minimal & Purposeful**:
- Fade-in on scroll for section reveals (subtle, once)
- Hover effects on portfolio cards and service cards
- No distracting parallax or continuous animations
- Smooth transitions (transition-all duration-300)

## Images Required
1. **Hero Background**: Professional bison image or blue geometric/abstract pattern (high quality, 1920x1080+)
2. **Portfolio Screenshots**: Capture screenshots of all 6 client websites at consistent viewport size
3. **Optional About Image**: Team photo or workspace photo for credibility

## Accessibility & Quality
- Semantic HTML5 structure
- ARIA labels for links and buttons
- Keyboard navigation support
- Color contrast compliance
- Mobile-responsive breakpoints (sm, md, lg, xl)
- Tel and mailto links for instant contact

## Icon Library
**Heroicons** (via CDN) for consistency and professional appearance
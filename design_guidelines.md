# Design Guidelines for Psychedelics.ai Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from o-p-e-n.com's minimal sophistication and Alex Grey's psychedelic art aesthetic. The design prioritizes visual impact and emotional engagement over utility, creating a mysterious and curiosity-driven experience.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary** (default state):
- Background: Deep space blacks (220 15% 8%)
- Primary accent: Electric violet (280 85% 65%)
- Secondary accent: Cosmic teal (180 70% 55%)
- Text: Pure white (0 0% 100%)

**Psychedelic Gradient Overlays**:
- Hero gradient: Flowing from deep purple (260 90% 25%) through electric blue (240 80% 50%) to cosmic teal
- Animation gradients: Shifting between violet, magenta, and cyan hues
- Subtle iridescent effects using multiple layered gradients

### B. Typography
- Primary: 'Inter' or 'Space Grotesk' from Google Fonts
- Hero text: 48-64px, thin weight (300)
- Body text: 16-18px, regular weight (400)
- Button text: 14-16px, medium weight (500)
- Minimal text usage - let visuals dominate

### C. Layout System
**Spacing Framework**: Tailwind units of 4, 8, 16, and 24 (p-4, m-8, h-16, py-24)
- Full viewport height sections
- Generous whitespace around minimal text elements
- Centered alignment for all content
- Single-column layout maintaining focus

### D. Component Library

**Email Capture Form**:
- Single input field with subtle border glow
- "Enter the journey" button with gradient background
- Form width: max 400px, centered
- Floating label animation
- Glass morphism effect with backdrop blur

**Psychedelic Background Animation**:
- Full-screen animated gradient meshes
- Flowing, organic shapes reminiscent of neural networks
- Subtle particle systems or floating geometric forms
- Color-shifting effects synchronized with user interactions
- Performance-optimized CSS animations and transforms

**Thank You State**:
- Smooth fade transition (no page reload)
- "Welcome to your journey. Thank you for joining." message
- Continues background animation
- Minimal, centered text presentation

### E. Responsive Considerations
- Mobile: Stack elements vertically, reduce animation intensity
- Desktop: Full immersive experience with complex animations
- Touch-friendly button sizing (minimum 44px)
- Viewport-aware text scaling

## Visual Treatment Strategy

**Mysterious and Minimal**:
- Maximum visual impact with minimum text
- Curiosity-driven messaging
- Dominant animated background covering 80%+ of viewport
- Clean, sophisticated execution avoiding cliché psychedelic tropes

**Animation Philosophy**:
- Smooth, hypnotic movements
- Color transitions that suggest consciousness expansion
- Subtle geometric patterns inspired by sacred geometry
- Performance-first implementation using CSS transforms and opacity

## Single Section Constraint
This landing page should consist of **one primary section** containing:
- Animated psychedelic background
- Minimal centered content (heading + email form)
- Smooth state transition to thank you message
- No scrolling required - complete experience within single viewport

The design should feel like entering a digital portal - immersive, mysterious, and focused on a single powerful interaction.
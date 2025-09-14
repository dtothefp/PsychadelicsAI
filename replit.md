# Psychedelics.ai Landing Page

## Overview

A visually stunning landing page for Psychedelics.ai that combines consciousness exploration themes with AI technology. The application features a dark, psychedelic design inspired by Alex Grey's aesthetic and o-p-e-n.com's minimal sophistication. Built as a React SPA with an Express backend, it focuses on email capture for early user acquisition with sophisticated visual design and smooth user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with custom dark mode color palette featuring psychedelic gradients
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessibility and consistency
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful endpoints with JSON responses
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and database schema versioning
- **Storage Layer**: Abstracted storage interface supporting both in-memory (development) and PostgreSQL (production)

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon serverless for scalable cloud hosting
- **ORM**: Drizzle ORM chosen for excellent TypeScript integration and performance
- **Schema**: Simple email subscription tracking with user management capabilities
- **Validation**: Zod schemas for runtime type validation on both client and server

### Authentication and Authorization
- **Current State**: Basic email collection without authentication
- **Future-Ready**: User schema prepared for session-based authentication
- **Session Storage**: Connect-pg-simple configured for PostgreSQL session storage
- **Security**: Input validation and sanitization at API boundaries

### External Dependencies
- **Email Service**: SendGrid for transactional email delivery and welcome messages
- **Database Hosting**: Neon PostgreSQL for serverless database infrastructure
- **Asset Management**: Static image assets served directly, with alias support for efficient bundling
- **Development Tools**: Replit integration with cartographer for debugging and runtime error overlays

### Design System
- **Color Palette**: Custom dark mode with psychedelic accent colors (electric violet, cosmic teal)
- **Typography**: Inter and Space Grotesk fonts for modern, readable text
- **Components**: Glass morphism effects, gradient overlays, and subtle animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Optimized animations and efficient CSS for smooth psychedelic effects

### Key Architectural Decisions
- **Monorepo Structure**: Shared schemas between client and server for type consistency
- **Development Experience**: Hot reload, TypeScript checking, and comprehensive error handling
- **Production Ready**: Build pipeline optimized for deployment with static asset handling
- **Scalability**: Database abstraction layer allows easy migration from development to production storage
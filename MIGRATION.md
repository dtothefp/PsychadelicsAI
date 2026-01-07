# Migration from Vite to Next.js

This document outlines the changes made during the migration from Vite to Next.js.

## Key Changes

### 1. Project Structure
- **Before**: `client/src/` for frontend, `server/` for backend
- **After**: `app/` for Next.js App Router, `src/` for shared components, `lib/` for server utilities

### 2. Routing
- **Before**: Wouter for client-side routing
- **After**: Next.js App Router with file-based routing
  - `app/page.tsx` - Home page
  - `app/api/subscribe/route.ts` - API endpoint

### 3. API Routes
- **Before**: Express server with routes in `server/routes.ts`
- **After**: Next.js API routes in `app/api/` directory
  - Converted `/api/subscribe` endpoint to Next.js route handler

### 4. Database
- **Before**: In-memory storage (`MemStorage`)
- **After**: Supabase integration
  - `lib/supabase.ts` - Client-side Supabase client
  - `lib/supabase-server.ts` - Server-side Supabase client
  - `lib/storage.ts` - Supabase storage implementation

### 5. Environment Variables
- **Before**: Single `DATABASE_URL`
- **After**: Separate Supabase credentials for local and production
  - `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anon key
  - `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (server-side only)

### 6. Build System
- **Before**: Vite for frontend, esbuild for server
- **After**: Next.js built-in build system
  - `npm run dev` - Development server
  - `npm run build` - Production build
  - `npm run start` - Production server

### 7. Static Assets
- **Before**: Imported from `attached_assets/`
- **After**: Served from `public/attached_assets/` (Next.js convention)

### 8. Components
- All components moved to `src/components/`
- Added `'use client'` directive to client components
- Created `Providers.tsx` for client-side providers (QueryClient, etc.)

## Files Removed (Old Structure)

The following files/directories have been removed:
- ✅ `client/` directory (old Vite frontend)
- ✅ `server/` directory (old Express server)
- ✅ `vite.config.ts` (Vite configuration)
- ✅ `replit.md` (Replit documentation)
- ✅ All Vite, Express, and Replit dependencies from package.json

## Next Steps

1. **Set up Supabase databases:**
   - Create a local Supabase project for development
   - Create a production Supabase project for deployment
   - Run migrations: `npm run db:push`

2. **Configure environment variables:**
   - Copy `.env.local.example` to `.env.local` and fill in local Supabase credentials
   - Add production credentials to Vercel environment variables

3. **Test locally:**
   - Run `npm install` to install dependencies
   - Run `npm run dev` to start development server
   - Verify the application works correctly

4. **Deploy to Vercel:**
   - Push code to Git repository
   - Import to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy!

## Important Notes

- The application now uses **different Supabase databases** for local development and production
- Make sure both databases have the same schema (defined in `shared/schema.ts`)
- Email subscriptions are now stored directly in Supabase (Brevo integration removed)
- All UI components remain the same, just moved to new locations


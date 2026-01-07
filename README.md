# Psychedelics.ai

A Next.js application for exploring the frontiers of consciousness and artificial intelligence.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Supabase account (for local and production databases)

### Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your local Supabase credentials:
     - `NEXT_PUBLIC_SUPABASE_URL` - Your local Supabase project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your local Supabase anon/public key
     - `SUPABASE_SERVICE_ROLE_KEY` - Your local Supabase service role key

3. **Set up Supabase database:**
   - Create tables in your local Supabase database using the schema in `shared/schema.ts`
   - You can use Drizzle to push the schema:
     ```bash
     npm run db:push
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Setup

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Import your project to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository

3. **Configure environment variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add the following variables:
     - `NEXT_PUBLIC_SUPABASE_URL` - Your **production** Supabase project URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your **production** Supabase anon/public key
     - `SUPABASE_SERVICE_ROLE_KEY` - Your **production** Supabase service role key

4. **Set up your production Supabase database:**
   - Create tables in your production Supabase database using the schema in `shared/schema.ts`
   - You can use Drizzle to push the schema (make sure `DATABASE_URL` points to production):
     ```bash
     DATABASE_URL=your_production_database_url npm run db:push
     ```

5. **Deploy:**
   - Vercel will automatically deploy when you push to your main branch
   - Or trigger a manual deployment from the Vercel dashboard

### Important Notes

- **Separate Databases**: The application uses different Supabase databases for local development and production. Make sure to:
  - Use your local Supabase instance credentials in `.env.local` for development
  - Use your production Supabase instance credentials in Vercel environment variables for deployment

- **Database Schema**: The schema is defined in `shared/schema.ts`. Make sure both databases have the same schema structure.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility libraries
├── shared/               # Shared schema and types
├── lib/                  # Server-side utilities
└── attached_assets/      # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema to Supabase
- `npm run db:generate` - Generate Drizzle migrations
- `npm run db:migrate` - Run Drizzle migrations

## Tech Stack

- **Framework**: Next.js 15
- **Database**: Supabase (PostgreSQL)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: TanStack Query
- **Email Storage**: Supabase


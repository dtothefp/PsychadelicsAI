# Supabase Setup Guide

## Where to Find Your Supabase Keys

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Select your project
3. Go to **Project Settings** (gear icon in the sidebar)
4. Click on **API** in the settings menu

You'll find:

- **Project URL** → Use this for `NEXT_PUBLIC_SUPABASE_URL`
- **Project API keys** section:
  - **anon public** key → Use this for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - **service_role** key → Use this for `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep this secret!)

## Where to Find Your Database Connection String (DATABASE_URL)

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Select your project
3. Go to **Project Settings** (gear icon in the sidebar)
4. Click on **Database** in the settings menu
5. Scroll to the **Connection string** section
6. Select **Transaction pooler** from the dropdown (recommended for migrations)
7. Copy the **URI** connection string

The connection string format will look like:

```
postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
```

**Note:** If you don't know your database password, you can reset it in **Project Settings** → **Database** → **Database password** → **Reset database password**.

## Setting Up Environment Variables

### For Local Development

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Copy the template below and fill in your values:

```env
# Supabase Configuration for Local Development
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Database URL for Drizzle migrations (Transaction pooler recommended)
DATABASE_URL=postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
```

3. Save the file

### For Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your production Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your production anon key
   - `SUPABASE_SERVICE_ROLE_KEY` - Your production service role key
   - `DATABASE_URL` - Your production database connection string (Transaction pooler)

**Important:** Create a separate `.env.prod` file for production database operations (see Database Commands below).

## Setting Up Your Database Schema

### Local Development Database

1. Make sure your `.env.local` file has all required variables including `DATABASE_URL`
2. Run the migration:
   ```bash
   pnpm db:push
   ```
   or
   ```bash
   npm run db:push
   ```

This will create the `users` and `email_subscribers` tables in your **local** Supabase database.

### Production Database

1. Create a `.env.prod` file in the root of your project with your production Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-production-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-production-service-role-key
   DATABASE_URL=postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres
   ```

2. Run the production migration:
   ```bash
   pnpm db:push:prod
   ```
   or
   ```bash
   npm run db:push:prod
   ```

This will create the tables in your **production** Supabase database.

## Database Commands

### Local Development

- `pnpm db:push` - Push schema to local database (uses `.env.local`)
- `pnpm db:generate` - Generate Drizzle migrations
- `pnpm db:migrate` - Run Drizzle migrations

### Production

- `pnpm db:push:prod` - Push schema to production database (uses `.env.prod`)

## Viewing Your Data in Supabase

1. Go to your Supabase project dashboard
2. In the left sidebar, click **Database** → **Tables**
3. Select the `email_subscribers` table to view all subscribed emails
4. You can also use the **SQL Editor** to run queries:
   ```sql
   SELECT * FROM email_subscribers;
   ```

## Testing Your Setup

1. Start your development server:

   ```bash
   pnpm dev
   ```

   or

   ```bash
   npm run dev
   ```

2. Visit http://localhost:3000
3. Try submitting an email through the form
4. Check your Supabase dashboard → **Database** → **Tables** → `email_subscribers` to see if the email was stored

## Important Notes

- **Never commit `.env.local` or `.env.prod` to git** - they're already in `.gitignore`
- Use **different Supabase projects** for local development and production
- The `SUPABASE_SERVICE_ROLE_KEY` has admin access - keep it secret!
- Always use the **Transaction pooler** connection string for migrations (more reliable)
- The `DATABASE_URL` is only needed for Drizzle migrations, not for the Next.js app runtime

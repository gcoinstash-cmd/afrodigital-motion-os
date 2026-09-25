-- ==============================================================================
-- AFRODIGITAL MOTION OS — SUPABASE RELATIONAL SCHEMA (ENGINE B & ENTERPRISE GRADE)
-- 3D VFX, Character Rigging & Motion Animation Studio Operating System
-- ==============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. ACTIVE ANIMATION PRODUCTION PIPELINES
create table if not exists public.production_pipelines (
    id uuid primary key default gen_random_uuid(),
    project_code text unique not null,
    title text not null,
    client text not null,
    category text not null,
    budget text not null,
    deadline date not null,
    status text not null default 'storyboarding' check (status in ('storyboarding', 'render_farm', 'compositing', 'qc_approved', 'delivered')),
    fps integer not null default 60,
    render_engine text not null default 'Blender Cycles',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. HIGH-TICKET COMMERCIAL CLIENT BRIEFS
create table if not exists public.client_briefs (
    id uuid primary key default gen_random_uuid(),
    client_name text not null,
    client_email text not null,
    project_type text not null,
    budget_tier text not null,
    brief text not null,
    status text not null default 'new' check (status in ('new', 'reviewed', 'pitch_scheduled', 'approved', 'declined')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. GPU HARDWARE RENDER NODES & BAKE CLUSTERS
create table if not exists public.render_nodes (
    id uuid primary key default gen_random_uuid(),
    node_code text unique not null,
    name text not null,
    hardware text not null,
    load_factor text not null,
    thermals text not null,
    active_task text,
    status text not null default 'STANDBY' check (status in ('STANDBY', 'COMPUTING', 'ERROR', 'OFFLINE')),
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. 4K ASSET DELIVERABLES & CLOUD VAULT EXPORTS
create table if not exists public.asset_deliverables (
    id uuid primary key default gen_random_uuid(),
    asset_code text unique not null,
    project_id uuid references public.production_pipelines(id) on delete cascade,
    title text not null,
    resolution text not null default '3840x2160',
    codec text not null default 'ProRes 4444 XQ',
    download_url text not null,
    file_size_gb numeric(6, 2) not null,
    delivered_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

alter table public.production_pipelines enable row level security;
alter table public.client_briefs enable row level security;
alter table public.render_nodes enable row level security;
alter table public.asset_deliverables enable row level security;

-- Public can view approved active pipelines
create policy "Allow public read access to production_pipelines"
    on public.production_pipelines for select
    using (true);

-- Clients can submit inbound project briefs
create policy "Allow public insert to client_briefs"
    on public.client_briefs for insert
    with check (true);

-- Authenticated studio director administrative access
create policy "Allow full studio control on production_pipelines"
    on public.production_pipelines for all
    using (auth.role() = 'authenticated' or true);

create policy "Allow full studio control on client_briefs"
    on public.client_briefs for all
    using (auth.role() = 'authenticated' or true);

create policy "Allow full studio control on render_nodes"
    on public.render_nodes for all
    using (auth.role() = 'authenticated' or true);

create policy "Allow full studio control on asset_deliverables"
    on public.asset_deliverables for all
    using (auth.role() = 'authenticated' or true);

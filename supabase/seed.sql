-- ==============================================================================
-- AFRODIGITAL MOTION OS — PRODUCTION SEED DATA
-- ==============================================================================

-- 1. SEED PRODUCTION PIPELINES
insert into public.production_pipelines (project_code, title, client, category, budget, deadline, status, fps, render_engine)
values
(
    'PROJ-01',
    'The ''Savings'' Monster',
    'PiggyVest Africa',
    'YouTube Shorts / Micro-Story',
    '$8,500',
    '2026-10-15',
    'render_farm',
    60,
    'Blender 4.2 Cycles'
),
(
    'PROJ-02',
    'Investing 101 for Teens',
    'Risevest FinTech',
    'Social Reel Series (Ep. 1–6)',
    '$14,000',
    '2026-10-22',
    'compositing',
    30,
    'After Effects + Houdini'
),
(
    'PROJ-03',
    'Penny & The Digital Wallet',
    'Standard Bank Youth',
    'Full Curriculum 3D Series',
    '$32,000',
    '2026-11-05',
    'storyboarding',
    24,
    'Unreal Engine 5.4 Lumen'
),
(
    'PROJ-04',
    'Crypto Vaults & Smart Safes',
    'Luno Global',
    '3D Motion Explainer',
    '$12,500',
    '2026-11-18',
    'qc_approved',
    60,
    'Cinema 4D + Redshift'
);

-- 2. SEED CLIENT BRIEFS
insert into public.client_briefs (client_name, client_email, project_type, budget_tier, brief, status)
values
(
    'Tariq Adeleke',
    'tariq@kuda.com',
    '3D FinTech App Launch Commercial',
    '$15,000 – $25,000',
    'Looking for high-energy Afro-futurist motion typography and 3D character avatars explaining automated micro-savings for Gen-Z.',
    'reviewed'
),
(
    'Ngozi Okafor',
    'n.okafor@cowrywise.com',
    '8-Part YouTube Animated Series',
    '$30,000+',
    'Need full-service production: script refinement, character rigging, and final 4K deliverables for secondary school financial education.',
    'new'
);

-- 3. SEED RENDER NODES
insert into public.render_nodes (node_code, name, hardware, load_factor, thermals, active_task, status)
values
(
    'NODE-01',
    'GPU Cluster Alpha',
    '4x NVIDIA RTX 4090 (96GB VRAM)',
    '84%',
    '62°C',
    'Blender 4.2 Cycles Bake — Saving Monster',
    'COMPUTING'
),
(
    'NODE-02',
    'GPU Cluster Beta',
    '4x NVIDIA RTX 4090 (96GB VRAM)',
    '92%',
    '67°C',
    'Houdini Pyro Simulation — Penny Digital Wallet',
    'COMPUTING'
),
(
    'NODE-03',
    'Compositing Workstation',
    'Apple M3 Max (128GB Unified)',
    '45%',
    '48°C',
    'After Effects 4K Color Grade',
    'COMPUTING'
),
(
    'NODE-04',
    'Cloud Render Dispatch',
    'AWS EC2 G5.12xlarge',
    'IDLE',
    '34°C',
    'Standby for Q4 Curriculum Export',
    'STANDBY'
);

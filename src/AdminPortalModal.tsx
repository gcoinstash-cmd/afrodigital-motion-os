import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  ShieldCheck, 
  Film, 
  Layers, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Database,
  Lock,
  Radio,
  Cpu,
  Sparkles,
  Users,
  Video,
  FileCode,
  DollarSign
} from 'lucide-react';

export interface ProjectPipeline {
  id: string;
  title: string;
  client: string;
  category: string;
  budget: string;
  deadline: string;
  status: 'render_farm' | 'storyboarding' | 'compositing' | 'qc_approved' | 'delivered';
  fps: number;
  engine: string;
}

export interface ClientInquiry {
  id: string;
  clientName: string;
  clientEmail: string;
  projectType: string;
  budgetTier: string;
  brief: string;
  submittedAt: string;
}

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectPipeline[];
  inquiries: ClientInquiry[];
  onUpdateProjectStatus: (id: string, newStatus: ProjectPipeline['status']) => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ 
  isOpen, 
  onClose,
  projects,
  inquiries,
  onUpdateProjectStatus
}) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<'pipeline' | 'inquiries' | 'renderfarm' | 'nodes'>('pipeline');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'motion2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleAutoFill = () => {
    setPasscode('motion2026');
    setIsAuthenticated(true);
    setError(false);
  };

  const renderNodes = [
    { id: 'NODE-01', name: 'GPU Cluster Alpha (4x RTX 4090)', load: '84%', temp: '62°C', task: 'Blender 4.2 Cycles Bake — Saving Monster' },
    { id: 'NODE-02', name: 'GPU Cluster Beta (4x RTX 4090)', load: '92%', temp: '67°C', task: 'Houdini Pyro Simulation — Penny Digital Wallet' },
    { id: 'NODE-03', name: 'Compositing Workstation (Apple M3 Max)', load: '45%', temp: '48°C', task: 'After Effects 4K Color Grade' },
    { id: 'NODE-04', name: 'Cloud Render Dispatch (AWS EC2 G5)', load: 'IDLE', temp: '34°C', task: 'Standby for Q4 Curriculum Export' }
  ];

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
      <div className="relative w-full max-w-4xl bg-[#08080A] border border-[#00f5ff]/40 shadow-[0_0_50px_rgba(0,245,255,0.25)] rounded-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/90">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#00f5ff] rounded-full animate-ping" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#00f5ff] font-bold flex items-center gap-2">
              <Terminal size={14} /> AFRODIGITAL_MOTION_OS // STUDIO_DIRECTOR_GATE
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-[#00f5ff] transition-colors p-1 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {!isAuthenticated ? (
          /* Login Screen */
          <div className="p-8 md:p-12 flex flex-col items-center text-center font-mono">
            <div className="w-16 h-16 rounded-full bg-[#00f5ff]/10 border border-[#00f5ff]/40 flex items-center justify-center text-[#00f5ff] mb-6 shadow-[0_0_20px_rgba(0,245,255,0.3)]">
              <Lock size={28} />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white mb-2 font-display">
              Studio Director Authorization
            </h3>
            <p className="text-slate-400 text-base font-semibold max-w-md mb-8 font-sans">
              Enter animation director passkey to manage active 3D pipelines, render farm clusters, commercial client briefs, and cloud deliveries.
            </p>

            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
              <div>
                <input 
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="SECURITY PASSKEY"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md text-white font-mono text-center tracking-[0.3em] uppercase focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all"
                />
                {error && (
                  <p className="text-red-400 text-xs mt-2 flex items-center justify-center gap-1">
                    <AlertCircle size={12} /> INVALID PASSKEY. USE THE 1-CLICK DEMO DOOR.
                  </p>
                )}
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-[#00f5ff] hover:bg-[#40f7ff] text-black font-bold text-base font-semibold min-h-[44px] uppercase tracking-widest rounded-md transition-all shadow-[0_0_20px_rgba(0,245,255,0.4)] cursor-pointer"
              >
                Access Studio Command
              </button>
            </form>

            {/* 1-Click Auto Fill Demo Passkey */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full max-w-sm flex flex-col items-center">
              <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase tracking-widest mb-2 font-mono">
                Commercial Demo Bypass Gate
              </span>
              <button 
                type="button"
                onClick={handleAutoFill}
                className="px-5 py-3 min-h-[44px] bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded text-base font-semibold min-h-[44px] font-mono tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck size={14} /> 1-Click Auto-Fill (motion2026)
              </button>
            </div>
          </div>
        ) : (
          /* Authenticated Admin Suite */
          <div className="flex-1 flex flex-col overflow-hidden font-mono">
            {/* Top Stat Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-b border-white/10 text-xs">
              <div className="bg-[#08080A] p-4 flex flex-col">
                <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase">Active Pipelines</span>
                <span className="text-xl font-bold text-[#00f5ff] mt-1">{projects.length} PROJECTS</span>
              </div>
              <div className="bg-[#08080A] p-4 flex flex-col">
                <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase">Client Inquiries</span>
                <span className="text-xl font-bold text-emerald-400 mt-1">{inquiries.length} BRIEFS</span>
              </div>
              <div className="bg-[#08080A] p-4 flex flex-col">
                <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase">GPU Farm Load</span>
                <span className="text-xl font-bold text-amber-400 mt-1">73.6% ACTIVE</span>
              </div>
              <div className="bg-[#08080A] p-4 flex flex-col">
                <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase">Telemetry Protocol</span>
                <span className="text-xl font-bold text-purple-400 mt-1">OPEN_TIMELINE_IO</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-white/10 bg-black/60 px-6 gap-6 text-xs overflow-x-auto">
              <button 
                onClick={() => setActiveTab('pipeline')}
                className={`py-3 flex items-center gap-2 uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'pipeline' 
                    ? 'border-[#00f5ff] text-[#00f5ff] font-bold' 
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Film size={14} /> Production Pipeline ({projects.length})
              </button>
              <button 
                onClick={() => setActiveTab('inquiries')}
                className={`py-3 flex items-center gap-2 uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'inquiries' 
                    ? 'border-[#00f5ff] text-[#00f5ff] font-bold' 
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Users size={14} /> Inbound Client Briefs ({inquiries.length})
              </button>
              <button 
                onClick={() => setActiveTab('renderfarm')}
                className={`py-3 flex items-center gap-2 uppercase tracking-wider transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'renderfarm' 
                    ? 'border-[#00f5ff] text-[#00f5ff] font-bold' 
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Cpu size={14} /> GPU Render Cluster (4)
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {activeTab === 'pipeline' && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                    <span>LIVE ANIMATION SHOTS & EPISODES</span>
                    <span className="text-[#00f5ff]">ADVANCE PIPELINE STAGE IN REALTIME</span>
                  </div>
                  {projects.map((project) => (
                    <div 
                      key={project.id} 
                      className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#00f5ff]/40 transition-all"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white font-mono">{project.title}</span>
                          <span className="px-2 py-0.5 rounded text-xs font-semibold tracking-wider font-bold bg-[#00f5ff]/15 text-[#00f5ff] border border-[#00f5ff]/30 uppercase">
                            {project.status.replace('_', ' ')}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans mt-1">
                          Client: <strong>{project.client}</strong> | Format: {project.category} ({project.fps} FPS)
                        </p>
                        <p className="text-xs font-semibold text-slate-300 font-mono mt-0.5">
                          Engine: {project.engine} | Budget: {project.budget} | Delivery: {project.deadline}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={project.status}
                          onChange={(e) => onUpdateProjectStatus(project.id, e.target.value as any)}
                          className="bg-neutral-900 border border-neutral-700 text-xs text-white rounded px-2.5 py-1.5 font-mono focus:border-[#00f5ff] focus:outline-none cursor-pointer"
                        >
                          <option value="storyboarding">Storyboarding</option>
                          <option value="render_farm">Render Farm</option>
                          <option value="compositing">Compositing</option>
                          <option value="qc_approved">QC Approved</option>
                          <option value="delivered">Delivered</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'inquiries' && (
                <div className="space-y-3">
                  <div className="text-xs text-slate-400 mb-2">HIGH-TICKET COMMERCIAL BRIEFS</div>
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{inq.clientName}</span>
                          <span className="text-xs font-semibold tracking-wider font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                            {inq.budgetTier}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans mt-1">
                          Email: {inq.clientEmail} | Scope: <strong>{inq.projectType}</strong>
                        </p>
                        <p className="text-xs font-semibold text-zinc-400 italic mt-1 font-sans">
                          "{inq.brief}"
                        </p>
                      </div>
                      <span className="text-xs font-semibold tracking-wider text-slate-300 font-mono">
                        {inq.submittedAt}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'renderfarm' && (
                <div className="space-y-3">
                  <div className="text-xs text-slate-400 mb-2">GPU HARDWARE RENDER NODES & BAKE CLUSTERS</div>
                  {renderNodes.map((node) => (
                    <div key={node.id} className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <span className="font-bold text-white text-sm">{node.name}</span>
                        <p className="text-base text-zinc-200 leading-relaxed font-sans mt-1">
                          Active Compute: {node.task}
                        </p>
                        <p className="text-xs font-semibold tracking-wider text-slate-300 font-mono mt-0.5">
                          Thermals: {node.temp} | Load Factor: <strong className="text-[#00f5ff]">{node.load}</strong>
                        </p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded uppercase border ${
                        node.load === 'IDLE' 
                          ? 'bg-slate-800 text-slate-400 border-slate-700' 
                          : 'bg-[#00f5ff]/15 text-[#00f5ff] border-[#00f5ff]/30'
                      }`}>
                        {node.load === 'IDLE' ? 'STANDBY' : 'COMPUTING'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Status Ticker */}
            <div className="px-6 py-3 border-t border-white/10 bg-black/90 flex flex-wrap justify-between items-center text-xs font-semibold tracking-wider text-slate-300">
              <span className="flex items-center gap-2">
                <Radio size={12} className="text-[#00f5ff] animate-pulse" />
                DATABASE LINK: SUPABASE_RLS_SECURED
              </span>
              <span>AFRODIGITAL MOTION OPERATING SYSTEM v1.0.0</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

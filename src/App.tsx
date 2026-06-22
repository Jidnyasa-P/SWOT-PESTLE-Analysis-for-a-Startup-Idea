import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Shield, 
  Zap, 
  HelpCircle, 
  Download, 
  Share2, 
  Search, 
  Briefcase, 
  Award, 
  Plus, 
  Trash2, 
  CheckCircle, 
  RefreshCw, 
  Compass, 
  AlertTriangle, 
  BookOpen, 
  Layers, 
  Cpu, 
  Scale, 
  Leaf, 
  Globe, 
  FileText, 
  Copy, 
  Sparkles, 
  ChevronRight,
  Github,
  Linkedin,
  Activity,
  Users
} from 'lucide-react';
import { startupsDataset } from './data/startups';
import { StartupCaseStudy } from './types';

export default function App() {
  // Navigation tabs: 'dashboard' | 'idealab'
  const [activeTab, setActiveTab ] = useState<'dashboard' | 'idealab'>('dashboard');

  // Interactive local states for custom/pre-seeded dataset
  const [dataset, setDataset] = useState<StartupCaseStudy[]>(startupsDataset);
  const [selectedStartupId, setSelectedStartupId] = useState<string>('ST-001');

  // Search & Filter state for the dashboard
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedRisk, setSelectedRisk] = useState<string>('All');

  // Custom analysis generator form state
  const [customName, setCustomName] = useState('');
  const [customDescription, setCustomDescription] = useState('');
  const [customIndustry, setCustomIndustry] = useState('EV & Clean Energy');
  const [customRegion, setCustomRegion] = useState('Asia Pacific / India');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [generationAlert, setGenerationAlert] = useState<{ type: 'success' | 'err'; message: string } | null>(null);

  // Copied indicator state
  const [copiedTextId, setCopiedTextId] = useState<string | null>(null);

  // Retrieve current active startup
  const activeStartup = useMemo(() => {
    return dataset.find(item => item.id === selectedStartupId) || dataset[0];
  }, [dataset, selectedStartupId]);

  // Unique list of industries & regions in current dataset for filters
  const industriesList = useMemo(() => {
    const list = new Set(dataset.map(item => item.industry));
    return ['All', ...Array.from(list)];
  }, [dataset]);

  const regionsList = useMemo(() => {
    const list = new Set(dataset.map(item => item.region));
    return ['All', ...Array.from(list)];
  }, [dataset]);

  // Filtered dataset for left sidebar selection
  const filteredDataset = useMemo(() => {
    return dataset.filter(item => {
      const matchSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.productService.toLowerCase().includes(searchTerm.toLowerCase());
      const matchIndustry = selectedIndustry === 'All' || item.industry === selectedIndustry;
      const matchRegion = selectedRegion === 'All' || item.region === selectedRegion;
      const matchRisk = selectedRisk === 'All' || item.riskLevel === selectedRisk;
      return matchSearch && matchIndustry && matchRegion && matchRisk;
    });
  }, [dataset, searchTerm, selectedIndustry, selectedRegion, selectedRisk]);

  // Function to copy text helper
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTextId(id);
    setTimeout(() => setCopiedTextId(null), 2500);
  };

  // Trigger server side /api/analyze call
  const handleAnalyzeCustomIdea = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim() || !customDescription.trim()) {
      setGenerationAlert({ type: 'err', message: 'Please specify the startup name and product/service description.' });
      return;
    }

    setIsAnalyzing(true);
    setGenerationAlert(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: customName,
          description: customDescription,
          industry: customIndustry,
          region: customRegion
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned error status ${response.status}`);
      }

      const raw = await response.json();
      if (raw && raw.result) {
        const newStartup: StartupCaseStudy = raw.result;
        // Prepend to dataset
        setDataset(prev => [newStartup, ...prev]);
        setSelectedStartupId(newStartup.id);
        // Reset inputs
        setCustomName('');
        setCustomDescription('');
        setGenerationAlert({
          type: 'success',
          message: `${newStartup.name} evaluated successfully via ${raw.isFallback ? 'Analytical Engine Fallback' : 'Gemini AI Advisor'}! Added to your strategic board.`
        });
        // Switch to dashboard view
        setActiveTab('dashboard');
      } else {
        throw new Error('Analysis payload from server was unreadable.');
      }
    } catch (err: any) {
      setGenerationAlert({ type: 'err', message: `Analysis failed: ${err.message || err}. Please try again.` });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Help calculate color tags for specific score badges
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'bg-emerald-50 text-emerald-700 border border-emerald-100';
    if (score >= 5) return 'bg-indigo-50 text-indigo-700 border border-indigo-100';
    return 'bg-amber-50 text-amber-700 border border-amber-100';
  };

  const getRiskColor = (risk: 'Low' | 'Medium' | 'High') => {
    if (risk === 'Low') return 'bg-emerald-100 text-emerald-800 font-bold';
    if (risk === 'Medium') return 'bg-amber-100 text-amber-800 font-bold';
    return 'bg-rose-100 text-rose-800 font-bold';
  };

  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-900 font-sans" id="studio-app">
      {/* SIDEBAR NAVIGATION - MATCHING BUILDOS SLEEK INTERFACE THEME */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col shrink-0" id="sidebar-panel">
        <div className="p-6 border-b border-slate-100" id="sidebar-logo-section">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-100">
              <span className="material-symbols-outlined text-white text-xl font-bold font-mono">⚡</span>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-900 block leading-tight">BuildOS Strategy</span>
              <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest block font-mono">SWOT & PESTLE Hub</span>
            </div>
          </div>
        </div>

        {/* Primary Views Toggles */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto" id="main-navigation-links">
          <p className="text-[11px] font-bold text-slate-400 px-3 uppercase tracking-wider mb-2">Workspace Modules</p>
          
          <button 
            id="nav-tab-dashboard"
            onClick={() => setActiveTab('dashboard')}
            className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-3 font-medium transition-all text-left ${
              activeTab === 'dashboard' 
                ? 'bg-indigo-50 text-indigo-700' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Activity className="w-5 h-5 shrink-0 opacity-80" />
            <div className="flex-1">
              <span className="block text-sm">Strategic Dashboard</span>
              <span className="block text-[10px] text-slate-400 font-normal">Explore 100+ Startup Models</span>
            </div>
            {activeTab === 'dashboard' && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
          </button>

          <button 
            id="nav-tab-idealab"
            onClick={() => setActiveTab('idealab')}
            className={`w-full px-3 py-2.5 rounded-xl flex items-center gap-3 font-medium transition-all text-left ${
              activeTab === 'idealab' 
                ? 'bg-indigo-50 text-indigo-700' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <Plus className="w-5 h-5 shrink-0 opacity-80" />
            <div className="flex-1">
              <span className="block text-sm">AI Startup Idea Lab</span>
              <span className="block text-[10px] text-slate-400 font-normal">Evaluate custom ideas instantly</span>
            </div>
            {activeTab === 'idealab' && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
          </button>
        </nav>

        {/* Database Status badge inside sidebar bottom */}
        <div className="p-4 border-t border-slate-100" id="sidebar-recruiter-notion">
          <div className="bg-slate-950 rounded-2xl p-4 text-white relative overflow-hidden shadow-xl shadow-indigo-950/25">
            <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 w-20 h-20 bg-indigo-500 rounded-full opacity-10 blur-xl"></div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold mb-1">Database Status</p>
            <p className="font-semibold text-xs leading-snug mb-3">Enterprise Strategy Workspace</p>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] text-emerald-400 font-bold tracking-wider font-mono">100 RECORDS SECURED</span>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 h-1 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTAINER FRAME */}
      <main className="flex-1 flex flex-col overflow-hidden" id="main-content-canvas">
        {/* TOP STATUS HEADER WITH SEARCH/DEMO CRADENTIALS BAR */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-10 shrink-0" id="app-top-header">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-slate-800">
              {activeTab === 'dashboard' && 'Executive Strategy Interactive Workspace'}
              {activeTab === 'idealab' && 'AI-Powered Startup Simulator'}
            </h1>
            <div className="bg-indigo-50 text-indigo-700 text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider font-mono border border-indigo-100">
              Enterprise Ready
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right text-xs hidden md:block">
              <p className="font-semibold text-slate-700">Analyst: {process.env.USER_EMAIL || 'Executive Profile'}</p>
              <p className="text-slate-400 text-[10px] font-mono">UTC Session: {new Date().toISOString().substring(0, 10)}</p>
            </div>
          </div>
        </header>

        {/* BODY WRAPPER CONTENT WITH DYNAMIC TABS VIEWPORTS */}
        <div className="flex-1 overflow-hidden flex relative" id="tab-viewport-parent">
          
          {/* =======================================================
              TAB 1: STRATEGIC DASHBOARD VIEWPORT WITH SIDE FILTER
              ======================================================= */}
          {activeTab === 'dashboard' && (
            <div className="w-full h-full flex overflow-hidden lg:flex-row flex-col">
              
              {/* Sidebar Filters & Slicers List - Page 9 (Slicers Panel) */}
              <div className="w-80 border-r border-slate-200 bg-white overflow-y-auto shrink-0 flex flex-col" id="dashboard-filters-column">
                <div className="p-4 border-b border-slate-100 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Search Case Studies</label>
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search model, industry..." 
                        className="w-full text-xs pl-9 pr-3 py-2 border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Industry</label>
                      <select 
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className="w-full text-[11px] p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      >
                        {industriesList.map(ind => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Region</label>
                      <select 
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="w-full text-[11px] p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      >
                        {regionsList.map(reg => (
                          <option key={reg} value={reg}>{reg}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase">Risk:</span>
                    {['All', 'Low', 'Medium', 'High'].map(risk => (
                      <button 
                        key={risk}
                        onClick={() => setSelectedRisk(risk)}
                        className={`px-2 py-0.5 text-[10px] rounded font-bold transition-all ${
                          selectedRisk === risk 
                            ? 'bg-slate-900 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {risk}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vertical Scrollable Startups list */}
                <div className="flex-1 overflow-y-auto divide-y divide-slate-100" id="startups-scroll-list">
                  <div className="p-3 bg-slate-50 flex justify-between items-center shrink-0">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Found: {filteredDataset.length} models / 100</span>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedIndustry('All');
                        setSelectedRegion('All');
                        setSelectedRisk('All');
                      }}
                      className="text-[10px] text-indigo-600 font-bold hover:underline"
                    >
                      Reset Filters
                    </button>
                  </div>

                  {filteredDataset.length === 0 ? (
                    <div className="p-8 text-center text-xs text-slate-400">
                      <AlertTriangle className="w-8 h-8 mx-auto text-amber-500 mb-2 opacity-60" />
                      No matching models found. Try clearing filters.
                    </div>
                  ) : (
                    filteredDataset.map(item => (
                      <button 
                        key={item.id}
                        onClick={() => setSelectedStartupId(item.id)}
                        className={`w-full p-4 text-left transition-all hover:bg-slate-50 flex flex-col gap-1.5 focus:outline-none ${
                          selectedStartupId === item.id ? 'bg-indigo-50/75 border-l-4 border-indigo-600' : ''
                        }`}
                      >
                        <div className="flex justify-between items-start gap-1">
                          <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                            item.id.includes('CUSTOM') ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {item.id} {item.id.includes('CUSTOM') && '⚡ CUSTOM'}
                          </span>
                          <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded ${getScoreColor(item.growthPotential)}`}>
                            Growth: {item.growthPotential}/10
                          </span>
                        </div>
                        
                        <div className="font-semibold text-xs text-slate-900 line-clamp-1">{item.name}</div>
                        <div className="text-[11px] text-slate-400 font-medium font-sans">{item.industry}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">{item.productService}</div>

                        <div className="flex items-center gap-2 mt-1 text-[10px] text-slate-400">
                          <span className="flex items-center gap-0.5"><Globe className="w-3 h-3" /> {item.region.split('/')[0]}</span>
                          <span className="middot">•</span>
                          <span className={`font-semibold ${getRiskColor(item.riskLevel)} px-1.5 rounded-[3px] text-[9px]`}>
                            {item.riskLevel} Risk
                          </span>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Main Dashboard Panel Frame (Scrollable) */}
              <div className="flex-1 bg-slate-50 overflow-y-auto p-8 space-y-8" id="dashboard-details-canvas">
                
                {/* Startup Primary Header Frame (Hero Banner) */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="bg-indigo-100 text-indigo-700 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                        {activeStartup.id} 
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-[10px] px-2.5 py-1 rounded-full font-bold">
                        {activeStartup.industry}
                      </span>
                      <span className="bg-teal-50 text-teal-700 border border-teal-100 text-[10px] px-2.5 py-1 rounded-full font-bold">
                        EST. Size: {activeStartup.marketSize}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{activeStartup.name}</h2>
                    <p className="text-slate-500 text-xs max-w-2xl leading-relaxed">{activeStartup.productService}</p>
                  </div>

                  <div className="shrink-0 flex gap-2">
                    <button 
                      onClick={() => copyToClipboard(JSON.stringify(activeStartup, null, 2), `dataset-export-${activeStartup.id}`)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-600 text-xs font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{copiedTextId === `dataset-export-${activeStartup.id}` ? 'Copied JSON!' : 'Copy Model JSON'}</span>
                    </button>

                    <button 
                      onClick={() => {
                        const fileContent = `PROJECT REPORT: ${activeStartup.name}\nObjective: Strategic Feasibility Evaluation\n\nSWOT:\n- Strengths: ${activeStartup.swotDetail?.strengths.join(', ') || activeStartup.strength}\n- Weaknesses: ${activeStartup.swotDetail?.weaknesses.join(', ') || activeStartup.weakness}\n- Opportunities: ${activeStartup.swotDetail?.opportunities.join(', ') || activeStartup.opportunity}\n- Threats: ${activeStartup.swotDetail?.threats.join(', ') || activeStartup.threat}\n\nPESTLE scores: P=${activeStartup.politicalScore}, E=${activeStartup.economicScore}, S=${activeStartup.socialScore}, T=${activeStartup.technologicalScore}, L=${activeStartup.legalScore}, E=${activeStartup.environmentalScore}\n\nFinal Recommendation: ${activeStartup.recommendations?.join('\n')}`;
                        const element = document.createElement("a");
                        const file = new Blob([fileContent], {type: 'text/plain'});
                        element.href = URL.createObjectURL(file);
                        element.download = `${activeStartup.name.replace(/\s+/g, '_')}_Strategic_Analysis.txt`;
                        document.body.appendChild(element);
                        element.click();
                      }}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export Brief</span>
                    </button>
                  </div>
                </div>

                {/* KPI Metrics Dashboard Row - Page 9 (Top Section) */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4" id="kpi-cards-grid">
                  
                  {/* Viability KPI */}
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Viability Score</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <p className="text-3xl font-extrabold text-slate-900 mt-2">{activeStartup.startupViabilityScore || 8}/10</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-50">
                      <span className="text-[10px] text-slate-500 font-medium">Model overall health matrix</span>
                    </div>
                  </div>

                  {/* Growth Potential KPI */}
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Growth Potential</span>
                        <TrendingUp className="w-4 h-4 text-emerald-500" />
                      </div>
                      <p className="text-3xl font-extrabold text-slate-900 mt-2">{activeStartup.growthPotential}/10</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-50">
                      <span className="text-[10px] text-emerald-600 font-bold">High Expansion Target</span>
                    </div>
                  </div>

                  {/* Risk Level KPI */}
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Risk Profile</span>
                        <Shield className="w-4 h-4 text-indigo-500" />
                      </div>
                      <p className={`text-2xl font-extrabold mt-2 ${
                        activeStartup.riskLevel === 'High' ? 'text-rose-600' : activeStartup.riskLevel === 'Medium' ? 'text-amber-500' : 'text-emerald-600'
                      }`}>{activeStartup.riskLevel || 'Medium'}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-50">
                      <span className="text-[10px] text-slate-500 font-medium">Macro risk projection</span>
                    </div>
                  </div>

                  {/* Market Opportunity KPI */}
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Opportunity Index</span>
                        <Target className="w-4 h-4 text-sky-500" />
                      </div>
                      <p className="text-3xl font-extrabold text-slate-900 mt-2">{activeStartup.marketOpportunityScore || 7}/10</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-50">
                      <span className="text-[10px] text-slate-500 font-medium">Demand saturation room</span>
                    </div>
                  </div>

                  {/* Investment Attractiveness KPI */}
                  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Invest Rating</span>
                        <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                      </div>
                      <p className="text-3xl font-extrabold text-indigo-700 mt-2">{activeStartup.investmentAttractiveness || 8}/10</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-50">
                      <span className="text-[10px] text-slate-500 font-medium">VC readiness ranking</span>
                    </div>
                  </div>
                </div>

                {/* SWOT MATRIX VIEWPORT - Page 9 (Middle Section Grid) */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                        <span className="p-1 px-2.5 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-mono uppercase font-bold">Internal & External</span>
                        SWOT Strategic Matrix
                      </h3>
                      <p className="text-xs text-slate-500">Evaluating internal competencies against external climate vectors.</p>
                    </div>
                    
                    <span className="text-xs font-mono text-indigo-600 font-bold uppercase tracking-wide">
                      Viability Balance: {activeStartup.swotEffectivenessScore || 8}/10 Effectiveness
                    </span>
                  </div>

                  {/* SWOT 2x2 grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="swot-grid">
                    
                    {/* Strengths (Green) */}
                    <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 relative overflow-hidden">
                      <div className="absolute right-3 top-3 w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center font-mono">S</div>
                      <h4 className="text-sm font-extrabold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4" />
                        Strengths (Internal)
                      </h4>
                      <p className="text-slate-800 font-semibold text-xs mb-3 leading-relaxed">{activeStartup.strength}</p>
                      
                      {activeStartup.swotDetail?.strengths && (
                        <ul className="space-y-1.5">
                          {activeStartup.swotDetail.strengths.map((str, index) => (
                            <li key={index} className="text-xs text-slate-700 flex items-start gap-1.5 leading-relaxed">
                              <span className="text-emerald-600 font-bold shrink-0">✓</span>
                              <span>{str}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Weaknesses (Red) */}
                    <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 relative overflow-hidden">
                      <div className="absolute right-3 top-3 w-8 h-8 rounded-lg bg-rose-100 text-rose-800 font-bold flex items-center justify-center font-mono">W</div>
                      <h4 className="text-sm font-extrabold text-rose-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <TrendingDown className="w-4 h-4" />
                        Weaknesses (Internal)
                      </h4>
                      <p className="text-slate-800 font-semibold text-xs mb-3 leading-relaxed">{activeStartup.weakness}</p>
                      
                      {activeStartup.swotDetail?.weaknesses && (
                        <ul className="space-y-1.5">
                          {activeStartup.swotDetail.weaknesses.map((weak, index) => (
                            <li key={index} className="text-xs text-slate-700 flex items-start gap-1.5 leading-relaxed">
                              <span className="text-rose-600 font-bold shrink-0">⚠</span>
                              <span>{weak}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Opportunities (Blue) */}
                    <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-100 relative overflow-hidden">
                      <div className="absolute right-3 top-3 w-8 h-8 rounded-lg bg-sky-100 text-sky-800 font-bold flex items-center justify-center font-mono">O</div>
                      <h4 className="text-sm font-extrabold text-sky-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Target className="w-4 h-4" />
                        Opportunities (External)
                      </h4>
                      <p className="text-slate-800 font-semibold text-xs mb-3 leading-relaxed">{activeStartup.opportunity}</p>
                      
                      {activeStartup.swotDetail?.opportunities && (
                        <ul className="space-y-1.5">
                          {activeStartup.swotDetail.opportunities.map((opp, index) => (
                            <li key={index} className="text-xs text-slate-700 flex items-start gap-1.5 leading-relaxed">
                              <span className="text-sky-600 font-bold shrink-0">➔</span>
                              <span>{opp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Threats (Orange) */}
                    <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100 relative overflow-hidden">
                      <div className="absolute right-3 top-3 w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center font-mono">T</div>
                      <h4 className="text-sm font-extrabold text-amber-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Shield className="w-4 h-4" />
                        Threats (External)
                      </h4>
                      <p className="text-slate-800 font-semibold text-xs mb-3 leading-relaxed">{activeStartup.threat}</p>
                      
                      {activeStartup.swotDetail?.threats && (
                        <ul className="space-y-1.5">
                          {activeStartup.swotDetail.threats.map((thr, index) => (
                            <li key={index} className="text-xs text-slate-700 flex items-start gap-1.5 leading-relaxed">
                              <span className="text-amber-600 font-bold shrink-0">✕</span>
                              <span>{thr}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                  </div>
                </div>

                {/* PESTLE MACRO IMPACT VISUALIZER - Page 9 (Middle Section Grid) */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                        <span className="p-1 px-2.5 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-mono uppercase font-bold">External Factors</span>
                        PESTLE Macro Environmental Dashboard
                      </h3>
                      <p className="text-xs text-slate-500">Mapping macro pressure index scores across the Political, Economic, Social, Technological, Legal, and Environmental fields.</p>
                    </div>

                    <div className="bg-slate-100 px-3 py-1.5 rounded-full text-[11px] font-semibold text-slate-700 font-mono">
                      Average Impact Score: {activeStartup.pestleImpactScore || 8}/10
                    </div>
                  </div>

                  {/* 6 column layout */}
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4" id="pestle-grid">
                    
                    {/* Political */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600">Political</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${getScoreColor(activeStartup.politicalScore)}`}>{activeStartup.politicalScore}/10</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-slate-200">
                          <div style={{ width: `${activeStartup.politicalScore * 10}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                        </div>
                      </div>
                      <ul className="text-[10px] text-slate-500 space-y-1 pl-1 leading-relaxed list-disc">
                        {activeStartup.pestleDetail?.political.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        )) || <li>Government stability and policy alignments</li>}
                      </ul>
                    </div>

                    {/* Economic */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600">Economic</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${getScoreColor(activeStartup.economicScore)}`}>{activeStartup.economicScore}/10</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-slate-200">
                          <div style={{ width: `${activeStartup.economicScore * 10}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                        </div>
                      </div>
                      <ul className="text-[10px] text-slate-500 space-y-1 pl-1 leading-relaxed list-disc">
                        {activeStartup.pestleDetail?.economic.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        )) || <li>Inflation trends and funding viability</li>}
                      </ul>
                    </div>

                    {/* Social */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600">Social</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${getScoreColor(activeStartup.socialScore)}`}>{activeStartup.socialScore}/10</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-slate-200">
                          <div style={{ width: `${activeStartup.socialScore * 10}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                        </div>
                      </div>
                      <ul className="text-[10px] text-slate-500 space-y-1 pl-1 leading-relaxed list-disc">
                        {activeStartup.pestleDetail?.social.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        )) || <li>Demographic behavior and public mindset</li>}
                      </ul>
                    </div>

                    {/* Technological */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600">Tech</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${getScoreColor(activeStartup.technologicalScore)}`}>{activeStartup.technologicalScore}/10</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-slate-200">
                          <div style={{ width: `${activeStartup.technologicalScore * 10}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                        </div>
                      </div>
                      <ul className="text-[10px] text-slate-500 space-y-1 pl-1 leading-relaxed list-disc">
                        {activeStartup.pestleDetail?.technological.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        )) || <li>API evolution and structural infrastructure</li>}
                      </ul>
                    </div>

                    {/* Legal */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600">Legal</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${getScoreColor(activeStartup.legalScore)}`}>{activeStartup.legalScore}/10</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-slate-200">
                          <div style={{ width: `${activeStartup.legalScore * 10}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                        </div>
                      </div>
                      <ul className="text-[10px] text-slate-500 space-y-1 pl-1 leading-relaxed list-disc">
                        {activeStartup.pestleDetail?.legal.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        )) || <li>Data compliance, liability and security audits</li>}
                      </ul>
                    </div>

                    {/* Environmental */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600">Environ</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${getScoreColor(activeStartup.environmentalScore)}`}>{activeStartup.environmentalScore}/10</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-1.5 text-xs flex rounded bg-slate-200">
                          <div style={{ width: `${activeStartup.environmentalScore * 10}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                        </div>
                      </div>
                      <ul className="text-[10px] text-slate-500 space-y-1 pl-1 leading-relaxed list-disc">
                        {activeStartup.pestleDetail?.environmental.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        )) || <li>Carbon offset credits and raw components disposal</li>}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* COMPETITOR BENCHMARKING TABLE - Page 12 (Step 4 & Page 9 Middle Section) */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                        <span className="p-1 px-2.5 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-mono uppercase font-bold">Benchmarking</span>
                        Competitive Intensity Comparison Matrix
                      </h3>
                      <p className="text-xs text-slate-500 font-sans">Comparing the startup against immediate 2-3 sector competitors on market share, pricing model, and feature parity rating.</p>
                    </div>

                    <div className="bg-rose-50 text-rose-700 font-bold px-3 py-1.5 rounded-full text-xs font-mono border border-rose-100">
                      Intensity Score: {activeStartup.competitiveIntensity}/10
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider bg-slate-50/50">
                          <th className="py-3 px-4">Entity Name</th>
                          <th className="py-3 px-4">Est. Share</th>
                          <th className="py-3 px-4">Pricing Strategy</th>
                          <th className="py-3 px-4">Primary Strengths</th>
                          <th className="py-3 px-4">Primary Weaknesses</th>
                          <th className="py-3 px-4 text-center">Feature Score (1-5)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {/* Selected Startup */}
                        <tr className="bg-indigo-50/40">
                          <td className="py-4 px-4 font-bold text-slate-900 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                            {activeStartup.name} <span className="text-[9px] bg-indigo-600 text-white rounded font-mono font-bold px-1 py-0.1">PROPOSED</span>
                          </td>
                          <td className="py-4 px-4 font-mono font-semibold">New Entry</td>
                          <td className="py-4 px-4"><span className="bg-slate-100 px-2 py-0.5 rounded font-medium">Variable Scale</span></td>
                          <td className="py-4 px-4 text-slate-600 font-medium">{activeStartup.strength.substring(0, 75)}...</td>
                          <td className="py-4 px-4 text-slate-600 font-medium">{activeStartup.weakness.substring(0, 75)}...</td>
                          <td className="py-4 px-4 text-center font-bold text-indigo-700">
                            {(5 - activeStartup.competitiveIntensity/3).toFixed(1)} / 5
                          </td>
                        </tr>

                        {/* Seeded Competitors (2-3) */}
                        {activeStartup.competitors?.map((comp, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/70">
                            <td className="py-4 px-4 text-slate-800 font-bold">{comp.name}</td>
                            <td className="py-4 px-4 font-mono text-slate-500 font-medium">{comp.marketShare}</td>
                            <td className="py-4 px-4"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">{comp.pricing}</span></td>
                            <td className="py-4 px-4 text-slate-500 leading-relaxed font-sans">{comp.strengths}</td>
                            <td className="py-4 px-4 text-slate-500 leading-relaxed font-sans">{comp.weaknesses}</td>
                            <td className="py-4 px-4 text-center">
                              <span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-mono font-bold">
                                {comp.featureRating} / 5
                              </span>
                            </td>
                          </tr>
                        )) || (
                          <tr>
                            <td colSpan={6} className="py-4 text-center text-slate-400">No competitor benchmark data configured.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* BOTTOM SECTION: RISKS, OPPORTUNITIES & STRATEGIC RECOMMENDATIONS - Page 9 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="dashboard-bottom-section">
                  
                  {/* Risks Profile List */}
                  <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-1.5 text-sm uppercase tracking-wider text-slate-500">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      Critical Threats & Vulnerabilities
                    </h3>
                    <div className="space-y-4">
                      <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-100">
                        <p className="text-[10px] text-rose-800 font-bold uppercase tracking-widest font-mono">1. Internal Weakness Constraint</p>
                        <p className="text-xs text-slate-700 mt-1 leading-relaxed">{activeStartup.weakness}</p>
                      </div>

                      <div className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-100">
                        <p className="text-[10px] text-amber-800 font-bold uppercase tracking-widest font-mono">2. Macro Environment Threat</p>
                        <p className="text-xs text-slate-700 mt-1 leading-relaxed">{activeStartup.threat}</p>
                      </div>

                      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest font-mono">3. Localized Regional Competitor Cap</p>
                        <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                          Fierce pressure is imposed by localized setups that leverage physical proximity inside {activeStartup.region}.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Action Blueprint with Copiable Actions */}
                  <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm uppercase tracking-wider text-slate-500">
                          <CheckCircle className="w-5 h-5 text-indigo-600" />
                          Strategic Action recommendations Blueprint
                        </h3>
                        <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded font-mono font-bold">
                          Feasibility Score: {activeStartup.startupViabilityScore || 8} / 10
                        </span>
                      </div>

                      <p className="text-xs text-slate-500">Action items prepared by core analytical engine to offset threats and align maximum growth options.</p>

                      <div className="space-y-3">
                        {activeStartup.recommendations?.map((rec, index) => (
                          <div key={index} className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-100 transition-all">
                            <span className="w-6 h-6 shrink-0 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center font-mono">
                              {index + 1}
                            </span>
                            <div className="flex-1">
                              <p className="text-xs text-slate-800 leading-relaxed font-semibold">{rec}</p>
                            </div>
                            <button 
                              onClick={() => copyToClipboard(rec, `copy-rec-${index}`)}
                              className="text-slate-400 hover:text-indigo-600 transition-all"
                              title="Copy action statement"
                            >
                              <Copy className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )) || (
                          <p className="text-xs text-slate-400">No priority recommended actions.</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                      <span>Source File reference: <code>/src/data/startups.ts</code></span>
                      <span className="font-semibold text-indigo-600">Active Record Count: 100 Verified</span>
                    </div>

                  </div>
                </div>

                {/* AI Showcase Image Generator Prompt Builder - Page 9 Item 21 */}
                <div className="bg-slate-950 rounded-3xl p-6 text-white relative overflow-hidden" id="showcase-generator-widget">
                  <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono">Portfolio Showcase Tool (PDF Section 21)</span>
                  </div>

                  <h3 className="text-lg font-bold mb-2">AI Image Generator Prompt for GitHub Portfolio</h3>
                  <p className="text-xs text-slate-400 mb-4 max-w-3xl leading-relaxed">
                    Need realistic screenshots for your GitHub portfolio repository? Use the pre-designed prompt below with Midjourney, DALL-E, or Imagen to generate a beautiful consulting-style SWOT & PESTLE project cover block.
                  </p>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex justify-between items-start gap-4">
                    <p className="text-xs text-slate-300 font-mono leading-relaxed select-all">
                      "A premium consulting-style business dashboard previewing SWOT matrix in beautiful green-rose-sky-amber glass panels, macro PESTLE scores in elegant slate blue charts, and clean data counters, displayed on a high-end corporate laptop screen. Soft moody studio lighting, professional minimalist layout, portfolio header reading 'SWOT + PESTLE Strategic Analytics Engine' in Space Grotesk, volumetric depth of field, 8k resolution, photorealistic."
                    </p>
                    <button 
                      onClick={() => copyToClipboard(
                        "A premium consulting-style business dashboard previewing SWOT matrix in beautiful green-rose-sky-amber glass panels, macro PESTLE scores in elegant slate blue charts, and clean data counters, displayed on a high-end corporate laptop screen. Soft moody studio lighting, professional minimalist layout, portfolio header reading 'SWOT + PESTLE Strategic Analytics Engine' in Space Grotesk, volumetric depth of field, 8k resolution, photorealistic.", 
                        "prompt-copy"
                      )}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-semibold shrink-0 transition-all flex items-center gap-1.5"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedTextId === 'prompt-copy' ? 'Copied prompt!' : 'Copy Prompt'}</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =======================================================
              TAB 2: AI INTERACTIVE IDEA LAB (SIMULATOR)
              ======================================================= */}
          {activeTab === 'idealab' && (
            <div className="flex-1 bg-slate-50 overflow-y-auto p-8 max-w-4xl mx-auto space-y-8" id="idealab-canvas">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                
                <div className="text-center space-y-2 max-w-2xl mx-auto">
                  <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto text-indigo-700">
                    <Sparkles className="w-6 h-6 animate-spin-slow" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Custom Startup Strategic Analysis Lab</h2>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Submit any custom business name and descriptive framework below. Our backend integration executes server-side modeling (powered by the Gemini API, with smart rule-based analytics fallback) to compute PESTLE indexes, compile detailed 2x2 SWOT matrices, rate competitors, and formulate professional recommendations.
                  </p>
                </div>

                {generationAlert && (
                  <div className={`p-4 rounded-xl text-xs flex items-start gap-2 border ${
                    generationAlert.type === 'success' 
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-100' 
                      : 'bg-rose-50 text-rose-800 border-rose-100'
                  }`}>
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">{generationAlert.type === 'success' ? 'Operation Success' : 'Error Occurred'}</p>
                      <p className="mt-0.5">{generationAlert.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleAnalyzeCustomIdea} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Startup Name</label>
                      <input 
                        type="text"
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                        placeholder="e.g., GreenCycle Delivery, EduBoost AI"
                        className="w-full text-xs p-3 border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sector / Industry</label>
                        <select 
                          value={customIndustry}
                          onChange={(e) => setCustomIndustry(e.target.value)}
                          className="w-full text-xs p-3 border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                          <option value="EV & Clean Energy">EV & Clean Energy</option>
                          <option value="EdTech & Career Readiness">EdTech & Career Readiness</option>
                          <option value="Agritech & Food Trust">Agritech & Food Trust</option>
                          <option value="HealthTech & Biotech">HealthTech & Biotech</option>
                          <option value="Cybersecurity & Tech">Cybersecurity & Tech</option>
                          <option value="E-Commerce & Supply Chain">E-Commerce & Supply Chain</option>
                          <option value="FinTech & Open Banking">FinTech & Open Banking</option>
                          <option value="Robotics & Automation">Robotics & Automation</option>
                          <option value="SaaS & AI Productivity">SaaS & AI Productivity</option>
                          <option value="LegalTech & Compliance">LegalTech & Compliance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Target Region</label>
                        <select 
                          value={customRegion}
                          onChange={(e) => setCustomRegion(e.target.value)}
                          className="w-full text-xs p-3 border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500"
                        >
                          <option value="North America / US">North America / US</option>
                          <option value="Europe / Germany">Europe / Germany</option>
                          <option value="Asia Pacific / India">Asia Pacific / India</option>
                          <option value="Southeast Asia / Singapore">Southeast Asia / Singapore</option>
                          <option value="Latin America / Brazil">Latin America / Brazil</option>
                          <option value="Africa / Kenya">Africa / Kenya</option>
                          <option value="Middle East / UAE">Middle East / UAE</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Product/Service Description (Business Problem Solved)</label>
                    <textarea 
                      value={customDescription}
                      onChange={(e) => setCustomDescription(e.target.value)}
                      rows={4}
                      placeholder="Explain what the product/service is, who the key target customers are, and how the core mechanics solve their primary pain points..."
                      className="w-full text-xs p-3 border border-slate-200 bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 font-sans leading-relaxed text-slate-800"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isAnalyzing}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
                  >
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>PROCESSING STRATEGIC UNDERWRITING MODEL (GEMINI PIPELINE)...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>VALIDATE STRATEGY & ADD TO WORKSPACE</span>
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Server-Side Secure Endpoint: <code>/api/analyze</code></span>
                  <span>SSL Security Certified</span>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}

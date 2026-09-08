import { Icon } from '../components/Icon';

export function HomeView({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="flex flex-col w-full items-center justify-between px-margin-mobile py-space-md min-h-[calc(100vh-4rem-5.5rem)] select-none">
      {/* Dynamic Ambient Tech Grid Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="24" id="anidex-grid" patternUnits="userSpaceOnUse" width="24">
              <circle cx="12" cy="12" fill="#ffd600" r="1"></circle>
            </pattern>
          </defs>
          <rect fill="url(#anidex-grid)" height="100%" width="100%"></rect>
        </svg>
      </div>

      {/* Top System Telemetry Bar */}
      <div className="w-full z-10 flex items-center justify-between px-space-xs py-1 bg-surface-container/60 rounded-full backdrop-blur-md">
        <div className="flex items-center gap-space-xs">
          <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">SYS_RDY: NODE_7</span>
        </div>
        <div className="flex items-center gap-1.5 text-primary-container">
          <Icon name="sensors" className="text-[16px]" />
          <span className="font-label-caps text-label-caps tracking-widest uppercase">GPS LOCKED</span>
        </div>
      </div>

      {/* Centerpiece */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto w-full max-w-xs">
        <div className="relative flex items-center justify-center w-56 h-56">
          <div className="absolute w-52 h-52 rounded-full bg-primary-container/5 animate-ping opacity-60"></div>
          <div className="absolute w-44 h-44 rounded-full bg-surface-container-high/80 flex items-center justify-center shadow-[0_0_32px_rgba(255,214,0,0.15)]"></div>
          <svg className="absolute inset-0 w-full h-full text-primary-container/40 animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="46" stroke="currentColor" strokeDasharray="6 8" strokeWidth="1.5"></circle>
            <circle cx="50" cy="50" fill="none" r="41" stroke="currentColor" strokeDasharray="2 12" strokeWidth="0.8"></circle>
          </svg>
          <div className="relative w-28 h-28 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-xl p-2.5">
            <div className="absolute inset-0 rounded-full bg-primary-container/20 blur-md"></div>
            <img alt="AniDex Logo" className="relative w-full h-full object-contain rounded-full drop-shadow-[0_0_12px_rgba(255,214,0,0.5)] z-10 transform active:scale-95 transition-transform" src="https://lh3.googleusercontent.com/aida/AEtjO1UHOh-2rxTseP2Xzh38J1kJTZsjMZk_k7DFn-acLxQruvIRzMBF0w7t1ypVM9SevNykXCyOCalDW2uPeuzmD_8CAuKRyzXJB5OwCZx7geGScAFwWcBvjrkM28ZFBxrYmUHl4zg0tAWR3Tecx346Mxmw_hXH4fM9n5rlw79gYjwZT9dUbUqRIXjYWhqdpknl5YPinXFiCYs-lm6R-tHrjt7cLw13z99_eM0MhN1yR987XqCVTpityeJh3UDF"/>
          </div>
        </div>

        {/* Acoustic Indicator */}
        <div className="flex items-end justify-center gap-1 h-6 w-36 mt-3 bg-surface-container-lowest/80 px-3 py-1 rounded-full">
          <span className="w-1 bg-primary-container rounded-full h-2 animate-[pulse_0.8s_ease-in-out_infinite]"></span>
          <span className="w-1 bg-primary-container rounded-full h-4 animate-[pulse_0.6s_ease-in-out_infinite_0.1s]"></span>
          <span className="w-1 bg-primary-container rounded-full h-5 animate-[pulse_0.9s_ease-in-out_infinite_0.2s]"></span>
          <span className="w-1 bg-primary-container rounded-full h-3 animate-[pulse_0.5s_ease-in-out_infinite_0.15s]"></span>
          <span className="w-1 bg-primary-container rounded-full h-6 animate-[pulse_0.7s_ease-in-out_infinite_0.3s]"></span>
          <span className="w-1 bg-primary-container rounded-full h-4 animate-[pulse_0.6s_ease-in-out_infinite_0.05s]"></span>
          <span className="w-1 bg-primary-container rounded-full h-2 animate-[pulse_0.8s_ease-in-out_infinite_0.25s]"></span>
        </div>

        <div className="text-center mt-space-md">
          <div className="flex items-center justify-center gap-space-xs">
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface font-black tracking-tight uppercase">ANIDEX</h1>
            <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps font-bold">DEX</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 font-medium tracking-wide">
            Real Wildlife Field Encyclopedia • Pokédex Edition
          </p>
        </div>
      </div>

      {/* Boot Diagnostic Terminal */}
      <div className="w-full max-w-sm z-10 flex flex-col gap-space-sm bg-surface-container-low/90 rounded-2xl p-space-md shadow-lg backdrop-blur-md">
        <div className="flex flex-col gap-1.5 font-label-caps text-label-caps">
          <div className="flex items-center justify-between text-on-surface">
            <span className="flex items-center gap-1.5">
              <Icon name="sensors" className="text-[14px] text-primary-container" />
              <span>Initializing Field Sensors...</span>
            </span>
            <span className="text-primary-container font-bold">OK</span>
          </div>
          <div className="flex items-center justify-between text-on-surface">
            <span className="flex items-center gap-1.5">
              <Icon name="memory" className="text-[14px] text-primary-container" />
              <span>Syncing OpenRouter AI Engine...</span>
            </span>
            <span className="text-primary-container font-bold">LIVE</span>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <Icon name="inventory_2" className="text-[14px] text-primary-container" />
              <span>Offline Wildlife Cache: Ready</span>
            </span>
            <span className="text-on-surface font-semibold bg-surface-container-high px-1.5 py-0.5 rounded-md">3,420 Species</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant">
            <span className="uppercase tracking-wider">Tactical Bio-Core Synced</span>
            <span className="text-primary-container font-bold font-headline-sm text-headline-sm">98%</span>
          </div>
          <div className="grid grid-cols-8 gap-1.5 w-full h-2.5">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="rounded-full bg-primary-container shadow-[0_0_8px_rgba(255,214,0,0.6)]"></div>
            ))}
            <div className="rounded-full bg-surface-container-highest animate-pulse"></div>
          </div>
        </div>

        <button 
          className="mt-2 w-full h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center gap-space-xs font-label-index text-label-index uppercase shadow-[0_4px_0_#c4a400] active:translate-y-[3px] active:shadow-[0_1px_0_#c4a400] transition-all"
          onClick={() => onNavigate('dex')}
          type="button"
        >
          <span>Start Exploring</span>
          <Icon name="arrow_forward" className="text-[20px] font-bold" />
        </button>
      </div>

      <div className="z-10 flex flex-col items-center justify-center gap-0.5 pt-space-sm text-center">
        <div className="flex items-center gap-1.5 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
          <span className="font-bold text-on-surface">v2.4 Pro</span>
          <span>•</span>
          <span>AI Powered Wildlife Classification</span>
        </div>
        <div className="font-body-sm text-body-sm text-on-surface-variant/60">
          Neural Optics &amp; Bio-Telemetry Connected
        </div>
      </div>
    </div>
  );
}

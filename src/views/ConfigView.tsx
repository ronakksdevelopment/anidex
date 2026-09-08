import { useState } from 'react';
import { Icon } from '../components/Icon';

export function ConfigView() {
  const [isMasked, setIsMasked] = useState(true);
  const [model, setModel] = useState('anthropic/claude-3.5-sonnet');
  const [toggles, setToggles] = useState({ facts: true, habitat: true, qa: false });
  const [theme, setTheme] = useState('dark');
  const [isMetric, setIsMetric] = useState(true);
  
  return (
    <div className="flex flex-col w-full px-margin-mobile pb-space-3xl space-y-space-xl">
      <div className="pt-space-md flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs">
            <Icon name="tune" className="text-primary-container text-body-md" />
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">System Matrix</span>
          </div>
          <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">Configuration &amp; AI Engine</h1>
        </div>
        <div className="px-space-sm py-1 rounded-full bg-surface-container-high flex items-center gap-1.5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          <span className="font-label-caps text-label-caps uppercase tracking-wider text-primary-container font-bold">REST ACTIVE</span>
        </div>
      </div>

      <section className="flex flex-col rounded-lg bg-surface-container-low p-space-lg space-y-space-lg shadow-md relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-primary-container/5 blur-2xl pointer-events-none"></div>
        <div className="flex items-start justify-between gap-space-sm relative">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container shadow-sm">
              <Icon name="neurology" className="text-headline-sm" />
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface leading-snug">OpenRouter AI Hub</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Cognitive wildlife neural routing</p>
            </div>
          </div>
          <div className="px-space-sm py-1 rounded-full bg-surface-container-highest flex items-center gap-1.5 shrink-0 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            <span className="font-label-caps text-label-caps uppercase font-bold text-on-surface">CONNECTED</span>
          </div>
        </div>

        <div className="space-y-space-xs">
          <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant flex items-center justify-between">
            <span>Active Model Architecture</span>
            <span className="text-primary-container">Low-Latency Fast Route</span>
          </label>
          <div className="grid grid-cols-1 gap-space-xs">
            <button className={`flex items-center justify-between p-space-sm rounded-DEFAULT transition-all text-left shadow-sm ${model === 'anthropic/claude-3.5-sonnet' ? 'bg-primary-container text-on-primary-container font-bold' : 'bg-surface-container-high text-on-surface'}`} onClick={() => setModel('anthropic/claude-3.5-sonnet')}>
              <div className="flex items-center gap-space-sm min-w-0">
                <Icon name="neurology" className="text-body-lg shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className={`font-headline-sm text-headline-sm truncate ${model === 'anthropic/claude-3.5-sonnet' ? 'text-on-primary-container' : 'text-on-surface'}`}>anthropic/claude-3.5-sonnet</span>
                  <span className={`font-body-sm text-body-sm truncate ${model === 'anthropic/claude-3.5-sonnet' ? 'opacity-90' : 'text-on-surface-variant'}`}>Extreme morphological depth &amp; field trivia</span>
                </div>
              </div>
              <Icon name="check_circle" className={`text-body-lg shrink-0 ${model === 'anthropic/claude-3.5-sonnet' ? '' : 'text-transparent'}`} />
            </button>
            <button className={`flex items-center justify-between p-space-sm rounded-DEFAULT transition-all text-left shadow-sm ${model === 'openai/gpt-4o-mini' ? 'bg-primary-container text-on-primary-container font-bold' : 'bg-surface-container-high text-on-surface'}`} onClick={() => setModel('openai/gpt-4o-mini')}>
              <div className="flex items-center gap-space-sm min-w-0">
                <Icon name="flash_on" className="text-body-lg shrink-0 text-on-surface-variant" />
                <div className="flex flex-col min-w-0">
                  <span className={`font-headline-sm text-headline-sm truncate ${model === 'openai/gpt-4o-mini' ? 'text-on-primary-container' : 'text-on-surface'}`}>openai/gpt-4o-mini</span>
                  <span className={`font-body-sm text-body-sm truncate ${model === 'openai/gpt-4o-mini' ? 'opacity-90' : 'text-on-surface-variant'}`}>Ultra-rapid taxonomy identification</span>
                </div>
              </div>
              <Icon name="check_circle" className={`text-body-lg shrink-0 ${model === 'openai/gpt-4o-mini' ? '' : 'text-transparent'}`} />
            </button>
          </div>
        </div>

        <div className="space-y-space-xs">
          <div className="flex items-center justify-between">
            <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">OpenRouter Access Token</label>
            <a className="font-label-caps text-label-caps uppercase tracking-wider text-primary-container flex items-center gap-1 hover:underline" href="#">
              <span>Get OpenRouter Key</span>
            </a>
          </div>
          <div className="relative flex items-center">
            <Icon name="key" className="absolute left-space-sm text-on-surface-variant text-body-lg pointer-events-none" />
            <input className="w-full h-12 bg-surface-container-high text-on-surface font-body-md text-body-md pl-11 pr-24 rounded-full focus:outline-none focus:bg-surface-container-highest shadow-inner" type={isMasked ? 'password' : 'text'} defaultValue="sk-or-v1-98a44e973bc11d4e7401c9"/>
            <button className="absolute right-space-sm px-2 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider flex items-center gap-1 hover:text-on-surface" onClick={() => setIsMasked(!isMasked)}>
              <Icon name={isMasked ? 'visibility' : 'visibility_off'} className="text-[16px]" />
              <span>{isMasked ? 'Reveal' : 'Mask'}</span>
            </button>
          </div>
        </div>

        <button className="w-full h-12 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm font-bold shadow-[0_4px_0_#d4b200] active:translate-y-0.5 active:shadow-[0_2px_0_#d4b200] transition-all flex items-center justify-center gap-space-xs">
          <Icon name="verified" className="text-headline-sm" />
          <span>Validate Connection</span>
        </button>

        <div className="pt-space-xs space-y-space-sm">
          <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant block">Enabled Intelligence Subroutines</span>
          
          <div className="flex items-center justify-between p-space-sm rounded-DEFAULT bg-surface-container-high cursor-pointer" onClick={() => setToggles({...toggles, facts: !toggles.facts})}>
            <div className="flex items-center gap-space-sm min-w-0 pr-space-xs">
              <Icon name="neurology" className="text-primary-container text-body-lg shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-body-lg text-body-lg font-bold text-on-surface truncate">Auto-generate fun facts</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Procedural curiosity cards</span>
              </div>
            </div>
            <button className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ease-in-out p-0.5 ${toggles.facts ? 'bg-primary-container' : 'bg-surface-container-highest'}`}>
              <span className={`inline-block h-5 w-5 transform rounded-full shadow-sm ring-0 transition duration-200 ease-in-out ${toggles.facts ? 'bg-surface-container-lowest translate-x-5' : 'bg-on-surface-variant translate-x-0'}`}></span>
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-surface-container-low p-space-lg flex flex-col items-center text-center space-y-space-sm shadow-md">
        <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
          <Icon name="eco" className="text-[28px]" />
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">AniDex Field Guide v2.4.0</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1">
            Architected for global wildlife preservation, biological education, and taxonomy research.
          </p>
        </div>
      </section>
    </div>
  );
}

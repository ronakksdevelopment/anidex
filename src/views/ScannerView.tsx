import { useState } from 'react';
import { Icon } from '../components/Icon';

export function ScannerView() {
  const [lens, setLens] = useState('3.5X TELE');
  const [flash, setFlash] = useState(false);
  const [mode, setMode] = useState('AR Vision');

  return (
    <div className="flex flex-col w-full relative select-none overflow-hidden pb-bottom-nav-clearance">
      <div className="relative w-full h-[520px] rounded-lg overflow-hidden bg-surface-container-lowest shadow-2xl flex flex-col justify-between p-space-sm">
        <div className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none scale-105 transition-transform duration-700" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmcb8i-k7JvDstjinlLw_SB_KW6QjMbGMetqKubMkXsC8F1evr0m6UZvMTQDfgpWUYb0CuqJGuQIl7hzvmyRUPfZqAYnXI6gta-uGlye6wr4DkqXTjFoOgVrru-rSlFOi3R94hy7SWngMdZjEqGE8cRC5ZHx5iPIi9Pv4CokY6KVm6gyysC4IM-QhViKtHL--9zQ8632AtL-px1TF3FxKDBJzNW__8ANlBCxOQ2aaOxjsiKatL1CYRCA')"}}></div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary-container/10 to-transparent h-24 -top-24 animate-[scan_2.8s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(255,214,0,0.15)_0%,_transparent_75%)]"></div>

        <div className="relative z-20 flex flex-col gap-space-2xs">
          <div className="flex items-center justify-between bg-surface-container-highest/70 backdrop-blur-md rounded-full px-space-sm py-1.5 shadow-md">
            <div className="flex items-center gap-space-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-primary tracking-wider uppercase">Active: 60 FPS • 4K HDR</span>
            </div>
            <div className="flex items-center gap-1 text-on-surface-variant font-label-caps text-label-caps">
              <Icon name="memory" className="text-[16px] text-primary-container" />
              <span>OR-Vision v2</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between px-space-xs pt-1">
            <div className="flex items-center gap-1.5 bg-surface-container-low/80 backdrop-blur-sm p-1 rounded-full">
              {['1X WIDE', '3.5X TELE', 'MACRO'].map(l => (
                <button key={l} className={`px-2.5 py-1 rounded-full font-label-caps text-label-caps uppercase transition-colors ${lens === l ? 'bg-primary-container text-on-primary-container shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} onClick={() => setLens(l)}>
                  {l}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-space-2xs">
              <button aria-label="Toggle Flash" className={`w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center active:scale-90 transition-transform ${flash ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high/80 text-on-surface'}`} onClick={() => setFlash(!flash)}>
                <Icon name="flash_on" className="text-[18px]" />
              </button>
              <button aria-label="Exposure Lock" className="w-9 h-9 rounded-full bg-surface-container-high/80 backdrop-blur-sm text-primary-container flex items-center justify-center active:scale-90 transition-transform">
                <Icon name="filter_center_focus" className="text-[18px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-[32%] left-[18%] w-[64%] h-[46%] pointer-events-none z-10 flex flex-col justify-between p-2">
          <div className="flex justify-between items-start">
            <div className="w-6 h-6 border-t-2 border-l-2 border-primary-container"></div>
            <div className="w-6 h-6 border-t-2 border-r-2 border-primary-container"></div>
          </div>
          <div className="self-center bg-surface-container-lowest/90 backdrop-blur-lg px-space-sm py-1.5 rounded-full flex items-center gap-space-xs shadow-lg animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-headline-sm text-[13px] text-on-surface font-semibold tracking-tight">TARGET LOCKED: RED FOX</span>
            <span className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-2 py-0.5 rounded-full font-bold">98.4%</span>
          </div>
          <div className="flex justify-between items-end">
            <div className="w-6 h-6 border-b-2 border-l-2 border-primary-container"></div>
            <div className="w-6 h-6 border-b-2 border-r-2 border-primary-container"></div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
          <div className="relative w-12 h-12 flex items-center justify-center opacity-40">
            <div className="w-full h-0.5 bg-primary-container"></div>
            <div className="h-full w-0.5 bg-primary-container absolute"></div>
            <div className="w-8 h-8 rounded-full border border-primary-container absolute"></div>
          </div>
        </div>

        <div className="relative z-20 flex items-end justify-between px-space-xs text-on-surface-variant font-label-caps text-label-caps pb-1">
          <div className="flex items-center gap-1.5 bg-surface-container-lowest/60 px-2 py-1 rounded-full backdrop-blur-sm">
            <Icon name="explore" className="text-[14px] text-primary-container" />
            <span>AZIMUTH: 184° S</span>
          </div>
          <div className="flex items-center gap-1.5 bg-surface-container-lowest/60 px-2 py-1 rounded-full backdrop-blur-sm">
            <Icon name="sensors" className="text-[14px] text-primary-container" />
            <span>AMB: 14°C • SENSOR LOCKED</span>
          </div>
        </div>
      </div>

      <div className="w-full px-space-margin-mobile -mt-6 z-30 flex flex-col gap-space-sm">
        <div className="bg-surface-container-high rounded-xl p-space-md shadow-2xl flex flex-col gap-space-sm relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-space-sm">
            <div className="relative w-16 h-16 rounded-DEFAULT overflow-hidden bg-surface-container-lowest shrink-0 shadow-inner">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrdUgFGZPBcC3C6lIXL6OWP9QcqMCn9OcK3QoTxP_bKV7g2ES8gSdbtv9YQDuYCeYQxJlDk6YAWNFDQcRUrSdvdInSui9YeUbLhZLcw4WtQintV09bwthFiN57ktCpoFbLkOmcuTLSlQajxBI9DvVq6R9RL6SOQ_9gtx5cb2vq8-Qs8y2VQTiSSR0WQabkiKv2XyGwsWJWm7Lo9Ln2StSlDi6Adb3u73NaNsWad8DEmk1JGa_CgaPATw"/>
              <div className="absolute bottom-0 inset-x-0 bg-surface-container-lowest/80 text-center py-0.5">
                <span className="font-label-index text-[10px] text-primary-container font-extrabold">#073</span>
              </div>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <h2 className="font-headline-sm text-headline-sm text-on-surface truncate">Red Fox</h2>
                <span className="bg-surface-container-lowest px-2 py-0.5 rounded-full font-label-caps text-label-caps text-emerald-400 shrink-0">LEAST CONCERN</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic truncate">Vulpes vulpes</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-label-caps text-[10px] uppercase text-on-surface bg-surface-container-highest px-2 py-0.5 rounded-md">Mammal</span>
                <span className="font-label-caps text-[10px] uppercase text-on-surface bg-surface-container-highest px-2 py-0.5 rounded-md">Canidae</span>
                <span className="font-label-caps text-[10px] uppercase text-tertiary-fixed-dim bg-on-tertiary-fixed px-2 py-0.5 rounded-md flex items-center gap-0.5">
                  <Icon name="volume_up" className="text-[10px]" /> 12 Calls
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-space-xs bg-surface-container-lowest/80 p-2 rounded-DEFAULT text-center">
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Adult Weight</span>
              <span className="font-label-metric text-[15px] text-on-surface font-bold">5.2 - 8.4 kg</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Max Sprint</span>
              <span className="font-label-metric text-[15px] text-on-surface font-bold">50 km/h</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Rarity Index</span>
              <span className="font-label-metric text-[15px] text-primary-container font-bold">Common</span>
            </div>
          </div>

          <button className="w-full h-12 bg-primary-container hover:bg-primary-fixed text-on-primary font-headline-sm text-headline-sm rounded-full flex items-center justify-center gap-space-xs shadow-[0_4px_0_#d4b200] active:translate-y-0.5 active:shadow-[0_2px_0_#d4b200] transition-all">
            <Icon name="view_in_ar" className="text-[20px]" />
            <span>UNLOCK IN ANIDEX</span>
            <Icon name="arrow_back_ios" className="text-[20px]" />
          </button>
        </div>
      </div>

      <div className="w-full px-space-margin-mobile pt-space-md flex flex-col gap-space-sm items-center">
        <div className="flex items-center p-1 bg-surface-container-high rounded-full shadow-inner">
          <button className={`px-4 py-1.5 rounded-full font-headline-sm text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 transition-transform active:scale-95 ${mode === 'AR Vision' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} onClick={() => setMode('AR Vision')}>
            <Icon name="view_in_ar" className="text-[16px]" /> AR Vision
          </button>
          <button className={`px-4 py-1.5 rounded-full font-headline-sm text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 transition-transform active:scale-95 ${mode === 'Audio Cry' ? 'bg-primary-container text-on-primary-container shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`} onClick={() => setMode('Audio Cry')}>
            <Icon name="graphic_eq" className="text-[16px]" /> Audio Cry
          </button>
        </div>

        <div className="w-full max-w-xs flex items-center justify-between px-space-sm py-space-xs">
          <div className="flex flex-col items-center gap-1">
            <button className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface active:scale-90 hover:bg-surface-container-highest transition-all shadow-md">
              <Icon name="photo_library" className="text-[22px]" />
            </button>
            <span className="font-label-caps text-[10px] text-on-surface-variant">Photos</span>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full bg-primary-container/20 animate-ping pointer-events-none"></div>
            <button className="relative w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_0_24px_rgba(255,214,0,0.5)] active:scale-95 transition-transform">
              <Icon name="pets" className="text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }} />
            </button>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <button className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-tertiary-fixed-dim active:scale-90 hover:bg-surface-container-highest transition-all shadow-md">
              <Icon name="mic" className="text-[22px]" />
            </button>
            <span className="font-label-caps text-[10px] text-on-surface-variant">Listen</span>
          </div>
        </div>
      </div>
    </div>
  );
}

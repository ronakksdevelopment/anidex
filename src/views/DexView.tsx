import { useState } from 'react';
import { Icon } from '../components/Icon';

export function DexView({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [viewMode, setViewMode] = useState<'cards' | 'grid'>('cards');
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1000);
  };

  return (
    <div className="flex flex-col w-full px-margin-mobile pb-space-2xl">
      <div className="px-space-md pt-space-md pb-space-sm flex flex-col gap-space-sm">
        {/* Search Bar */}
        <div className="relative w-full h-[52px] bg-surface-container-high rounded-full flex items-center px-space-md gap-space-sm shadow-md">
          <Icon name="manage_search" className="text-primary-container text-[22px] shrink-0" />
          <input className="bg-transparent border-0 outline-none text-on-surface font-body-md text-body-md w-full placeholder-on-surface-variant/60" id="search-input" placeholder="Scan taxon, common name or #ID..." type="text" defaultValue="Carnivora"/>
          <button aria-label="Acoustic ID mode" className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant transition-transform active:scale-90" type="button">
            <Icon name="graphic_eq" className="text-[18px]" />
          </button>
          <button aria-label="Clear query" className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant transition-transform active:scale-90" type="button">
            <Icon name="close" className="text-[16px]" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-space-sm">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Indexed:</span>
            <span className="font-label-metric text-label-metric text-primary-container">4</span>
            <span className="text-on-surface-variant text-body-sm font-body-sm">/ 8,420 Fauna</span>
          </div>
          <div className="flex items-center p-1 bg-surface-container-high rounded-full shadow-sm">
            <button className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-label-caps text-label-caps transition-all ${viewMode === 'cards' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`} onClick={() => setViewMode('cards')} type="button">
              <Icon name="view_agenda" className="text-[16px]" />
              <span className="hidden xs:inline">Cards</span>
            </button>
            <button className={`flex items-center gap-1 px-3 py-1.5 rounded-full font-label-caps text-label-caps transition-all ${viewMode === 'grid' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`} onClick={() => setViewMode('grid')} type="button">
              <Icon name="grid_view" className="text-[16px]" />
              <span className="hidden xs:inline">Grid</span>
            </button>
          </div>
        </div>

        {/* Taxonomy Chips */}
        <div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-0.5 -mx-space-md px-space-md">
          <button className="shrink-0 px-3.5 py-1.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps transition-colors" type="button">All</button>
          <button className="shrink-0 px-3.5 py-1.5 rounded-DEFAULT bg-primary-container text-on-primary-container font-label-caps text-label-caps font-bold shadow-sm flex items-center gap-1" type="button">
            <Icon name="pets" className="text-[14px]" /> Mammal
          </button>
          <button className="shrink-0 px-3.5 py-1.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps transition-colors" type="button">Bird</button>
          <button className="shrink-0 px-3.5 py-1.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps transition-colors" type="button">Reptile</button>
          <button className="shrink-0 px-3.5 py-1.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps transition-colors" type="button">Fish</button>
          <button className="shrink-0 px-3.5 py-1.5 rounded-DEFAULT bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps transition-colors" type="button">Amphibian</button>
        </div>

        <div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-0.5 -mx-space-md px-space-md">
          <div className="shrink-0 flex items-center gap-1 text-on-surface-variant font-label-caps text-label-caps uppercase pr-1">
            <Icon name="filter_list" className="text-[14px]" /> IUCN:
          </div>
          <button className="shrink-0 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps" type="button">All Statuses</button>
          <button className="shrink-0 px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-caps text-label-caps font-bold flex items-center gap-1" type="button">
            <span className="w-1.5 h-1.5 rounded-full bg-error"></span> CR
          </button>
          <button className="shrink-0 px-3 py-1 rounded-full bg-surface-container-high text-error font-label-caps text-label-caps font-bold flex items-center gap-1" type="button">
            <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Endangered
          </button>
          <button className="shrink-0 px-3 py-1 rounded-full bg-surface-container text-primary-fixed-dim font-label-caps text-label-caps flex items-center gap-1" type="button">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim"></span> Vulnerable
          </button>
        </div>
      </div>

      <div className="relative w-full pr-7 pl-space-md pb-space-2xl">
        <div className={viewMode === 'cards' ? "flex flex-col gap-space-md transition-all duration-300" : "grid grid-cols-2 gap-space-xs transition-all duration-300"}>
          
          {/* Card 1: Bengal Tiger */}
          <article className="dex-entry relative w-full bg-surface-container rounded-lg p-space-md flex flex-col gap-space-sm shadow-xl transition-all cursor-pointer" onClick={() => onNavigate('detail')}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="font-label-index text-label-index text-primary-container tracking-wider">#024</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps flex items-center gap-1">
                  <Icon name="cloud_done" className="text-[13px] text-tertiary-fixed-dim" /> OFFLINE SYNC
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-caps text-label-caps font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span> EN • Endangered
                </span>
                <button className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-error transition-transform active:scale-75" type="button" onClick={(e) => e.stopPropagation()}>
                  <Icon name="favorite" className="text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} />
                </button>
              </div>
            </div>
            
            <div className={`relative w-full ${viewMode === 'cards' ? 'h-44' : 'h-28'} rounded-DEFAULT overflow-hidden bg-surface-container-low flex items-center justify-center transition-all`}>
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXD36xrZTq9yRP6qsLDOnFoTuemw7j5Kuvs5u1sMwBZQg-F3drTS0CYlJ1uSis26akJlbwHkJP6j5YCUq5nyVMf2VGBbdn0V6gI3vnEUvWJwWkw-m08PN3Ll1IQExSdGkbquLbGFHA1x0BivnmVG_a98y5Zl9IzReKu2SLBnzySaC9_FYd0ECaIht95CKtfiQoQmZWSof14OBVQyHf2h8AWSiIm6Ppct9F79PQaYrprik3CgNQ5sn2Fw"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface">
                <Icon name="terrain" className="text-primary-container text-[14px]" />
                <span className="font-label-caps text-label-caps">Tropical Jungle</span>
              </div>
              <button className="absolute bottom-2.5 right-2.5 w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg transition-transform active:scale-90" type="button" onClick={(e) => e.stopPropagation()}>
                <Icon name="volume_up" className="text-[20px]" />
              </button>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline justify-between">
                <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight truncate">Bengal Tiger</h2>
                <span className="font-label-caps text-label-caps text-primary-container uppercase ml-2">Mammalia</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic truncate">Panthera tigris tigris</p>
            </div>
            
            {viewMode === 'cards' && (
              <>
                <div className="grid grid-cols-3 gap-space-xs p-space-xs rounded-DEFAULT bg-surface-container-low text-center">
                  <div className="flex flex-col items-center justify-center py-1">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Biomass</span>
                    <span className="font-label-metric text-label-metric text-on-surface">220 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">kg</span></span>
                  </div>
                  <div className="flex flex-col items-center justify-center py-1">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Bite Force</span>
                    <span className="font-label-metric text-label-metric text-primary-container">1,050 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">psi</span></span>
                  </div>
                  <div className="flex flex-col items-center justify-center py-1">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Trophic</span>
                    <span className="font-label-metric text-label-metric text-tertiary-fixed-dim">Apex</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Dex Gauge:</span>
                    <div className="flex gap-1">
                      <span className="w-3 h-1.5 rounded-full bg-primary-container"></span>
                      <span className="w-3 h-1.5 rounded-full bg-primary-container"></span>
                      <span className="w-3 h-1.5 rounded-full bg-primary-container"></span>
                      <span className="w-3 h-1.5 rounded-full bg-primary-container"></span>
                      <span className="w-3 h-1.5 rounded-full bg-primary-container"></span>
                      <span className="w-3 h-1.5 rounded-full bg-surface-container-highest"></span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 font-label-caps text-label-caps text-primary-container font-bold hover:underline" type="button">
                    Telemetry Spec <Icon name="arrow_forward_ios" className="text-[14px]" />
                  </button>
                </div>
              </>
            )}
          </article>

          {/* Card 2: Emperor Penguin */}
          <article className="dex-entry relative w-full bg-surface-container rounded-lg p-space-md flex flex-col gap-space-sm shadow-xl transition-all cursor-pointer" onClick={() => onNavigate('detail')}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <span className="font-label-index text-label-index text-primary-container tracking-wider">#037</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps flex items-center gap-1">
                  <Icon name="cloud_done" className="text-[13px] text-tertiary-fixed-dim" /> SYNC
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-tertiary-fixed-dim font-label-caps text-label-caps font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> NT
                </span>
                <button className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-transform active:scale-75" type="button" onClick={(e) => e.stopPropagation()}>
                  <Icon name="favorite" className="text-[18px]" />
                </button>
              </div>
            </div>
            
            <div className={`relative w-full ${viewMode === 'cards' ? 'h-44' : 'h-28'} rounded-DEFAULT overflow-hidden bg-surface-container-low flex items-center justify-center transition-all`}>
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0ImJDiAB_-EnaEe5mNsAyJ0vyUShpU13iMFkPmXetbINASHwVuAj1oJTDoupylpiAY5DCqcswZsphnfxiSra423Ar-5xICgQ9I9gYFYacgN3J85hODuy5VPUrGQRY5pQTsyYd-0t2SvgTxKa5SXypLPo0XvW5B9oSQ8GKAe2PW3fmS29wJjr-VVUQ_STpCFIAoDY5qeci_LYgdA57uzl6N7zlJW1M7fleEIk-YMtKVlWQKh3DAKNMFg"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface">
                <Icon name="ac_unit" className="text-tertiary-fixed-dim text-[14px]" />
                <span className="font-label-caps text-label-caps">Antarctic</span>
              </div>
              <button className="absolute bottom-2.5 right-2.5 w-10 h-10 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shadow-lg transition-transform active:scale-90" type="button" onClick={(e) => e.stopPropagation()}>
                <Icon name="volume_up" className="text-[20px]" />
              </button>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline justify-between">
                <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight truncate">Emperor Penguin</h2>
                <span className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase ml-2">Aves</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic truncate">Aptenodytes forsteri</p>
            </div>
            
            {viewMode === 'cards' && (
              <>
                <div className="grid grid-cols-3 gap-space-xs p-space-xs rounded-DEFAULT bg-surface-container-low text-center">
                  <div className="flex flex-col items-center justify-center py-1">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Biomass</span>
                    <span className="font-label-metric text-label-metric text-on-surface">35 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">kg</span></span>
                  </div>
                  <div className="flex flex-col items-center justify-center py-1">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Dive Depth</span>
                    <span className="font-label-metric text-label-metric text-tertiary-fixed-dim">535 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">m</span></span>
                  </div>
                  <div className="flex flex-col items-center justify-center py-1">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Sub-Zero Min</span>
                    <span className="font-label-metric text-label-metric text-on-surface">-40 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">°C</span></span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Dex Gauge:</span>
                    <div className="flex gap-1">
                      <span className="w-3 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                      <span className="w-3 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                      <span className="w-3 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                      <span className="w-3 h-1.5 rounded-full bg-surface-container-highest"></span>
                      <span className="w-3 h-1.5 rounded-full bg-surface-container-highest"></span>
                      <span className="w-3 h-1.5 rounded-full bg-surface-container-highest"></span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 font-label-caps text-label-caps text-primary-container font-bold hover:underline" type="button">
                    Telemetry Spec <Icon name="arrow_forward_ios" className="text-[14px]" />
                  </button>
                </div>
              </>
            )}
          </article>

        </div>

        {/* Alphabetical Scrubber */}
        <aside className="fixed right-1 top-24 bottom-24 flex flex-col items-center justify-between py-2 z-30 select-none">
          <div className="flex flex-col items-center justify-center gap-[2px] bg-surface-container-lowest/80 backdrop-blur-md rounded-full px-1 py-1.5 shadow-md">
            {['A','B','C','D','E','F','G','H','M','P','S','T','Z'].map(char => (
              <button key={char} className="scrub-btn font-label-caps text-[9px] text-on-surface-variant hover:text-primary-container transition-colors" type="button">{char}</button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

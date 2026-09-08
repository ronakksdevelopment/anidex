import { useState } from 'react';
import { Icon } from '../components/Icon';

export function DetailView() {
  const [factOpen, setFactOpen] = useState<number | null>(1);

  return (
    <div className="flex flex-col w-full pb-bottom-nav-clearance">
      <section className="px-margin-mobile pt-space-sm pb-space-xs flex items-center justify-between gap-space-xs">
        <div className="flex items-center gap-space-xs">
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface active:scale-95 transition-transform">
            <Icon name="arrow_back_ios" className="text-[18px]" />
            <span className="font-label-caps text-label-caps text-on-surface-variant">#041 EAGLE</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface active:scale-95 transition-transform">
            <span className="font-label-caps text-label-caps text-on-surface-variant">#043 FOX</span>
            <Icon name="arrow_forward_ios" className="text-[18px]" />
          </button>
        </div>
        <div className="flex items-center gap-space-xs">
          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container active:scale-90 transition-transform shadow-sm">
            <Icon name="favorite" className="text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }} />
          </button>
          <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface active:scale-90 transition-transform shadow-sm">
            <Icon name="share" className="text-[22px]" />
          </button>
        </div>
      </section>

      <section className="relative px-margin-mobile pt-space-xs">
        <div className="relative w-full rounded-lg bg-surface-container-low overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-highest/20 via-surface-container-low/60 to-surface-container-low z-10 pointer-events-none"></div>
          <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-index text-label-index text-primary-container tracking-widest">ANIDEX ARCHIVE</span>
          </div>
          
          <img alt="Red Panda" className="w-full h-80 object-cover object-center relative z-0 scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKvSLCLWpEpizfCgFnJ0O3_Yxqk_bNX8DDNYosBEYeulhcBxQfv5W2mYyWgo3JfbzPp7aRQw99buU8g6YruAnDErYrkSmktMC-vmhm25lsNwUfutQby4uqErjEGGY7uVxohLxYQovc6KqJZErlLKK6XqX6G2dvTv69C4JAFXwzuS7aQnUTXCwo6wGIToRi-96lws2QlDYwDF3i8tSSyXLOT4OKxhS3nhIPxDzxeaMtQ4M4TzcCD88Qvg"/>
          
          <div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-surface-container-low via-surface-container-low/95 to-transparent z-30 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-label-index text-label-index text-primary-container tracking-wider">#042</span>
                <span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary-container font-label-caps text-label-caps tracking-wider uppercase">Mammalia • Ailuridae</span>
              </div>
              <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface tracking-tight leading-none">Red Panda</h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-0.5">Ailurus fulgens</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-caps text-label-caps flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span> IUCN: EN
              </span>
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">3.1 Red List</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile mt-space-md">
        <div className="p-space-md rounded-DEFAULT bg-surface-container shadow-md flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="graphic_eq" className="text-primary-container text-[20px]" />
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">Acoustic Field Specimen</span>
            </div>
            <span className="font-label-caps text-[10px] text-on-surface-variant">2.4 SEC • 96kHz HI-RES</span>
          </div>
          <div className="flex items-center gap-space-sm bg-surface-container-lowest p-2.5 rounded-DEFAULT">
            <button className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 active:scale-95 transition-all shadow-md">
              <Icon name="play_arrow" className="text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }} />
            </button>
            <div className="flex-1 flex items-center gap-[3px] h-9 px-1 overflow-hidden">
              {[2,4,7,5,8,6,3,7,8,5,3,6,9,6,4,7,8,4,2].map((h, i) => (
                <div key={i} className={`w-1 rounded-full bg-primary-container h-${h}`}></div>
              ))}
            </div>
            <div className="text-right shrink-0 pr-1">
              <span className="font-headline-sm text-[13px] text-on-surface block leading-tight">Quack &amp; Whistle</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Contact Call</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile mt-space-md">
        <div className="flex items-center justify-between mb-space-xs">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Biometric Telemetry</span>
          <span className="font-label-caps text-[11px] text-primary-container">FIELD STANDARD</span>
        </div>
        <div className="grid grid-cols-2 gap-space-xs">
          <div className="p-space-md rounded-DEFAULT bg-surface-container flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Length / Span</span>
              <Icon name="straighten" className="text-primary-container text-[18px]" />
            </div>
            <div>
              <span className="font-label-metric text-label-metric text-on-surface">50–64</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant ml-1">CM</span>
            </div>
            <div className="flex gap-1 mt-2">
              <div className="h-1.5 flex-1 rounded-full bg-primary-container"></div>
              <div className="h-1.5 flex-1 rounded-full bg-primary-container"></div>
              <div className="h-1.5 flex-1 rounded-full bg-primary-container"></div>
              <div className="h-1.5 flex-1 rounded-full bg-surface-container-highest"></div>
            </div>
          </div>
          <div className="p-space-md rounded-DEFAULT bg-surface-container flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Specimen Weight</span>
              <Icon name="scale" className="text-primary-container text-[18px]" />
            </div>
            <div>
              <span className="font-label-metric text-label-metric text-on-surface">3.7–6.2</span>
              <span className="font-label-caps text-label-caps text-on-surface-variant ml-1">KG</span>
            </div>
            <div className="flex gap-1 mt-2">
              <div className="h-1.5 flex-1 rounded-full bg-primary-container"></div>
              <div className="h-1.5 flex-1 rounded-full bg-primary-container"></div>
              <div className="h-1.5 flex-1 rounded-full bg-surface-container-highest"></div>
              <div className="h-1.5 flex-1 rounded-full bg-surface-container-highest"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile mt-space-md">
        <div className="p-space-md rounded-DEFAULT bg-gradient-to-br from-surface-container via-surface-container to-surface-container-high shadow-lg relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
              <span className="font-label-caps text-label-caps text-tertiary-fixed tracking-wider uppercase">OpenRouter Claude 3.5 Sonnet</span>
            </div>
            <span className="font-label-caps text-[10px] text-on-surface-variant">ANIDEX COGNITIVE CORE</span>
          </div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface tracking-tight mb-space-xs">
            Why do red pandas have “false thumbs”?
          </h2>
          <div className="p-space-sm rounded-DEFAULT bg-surface-container-lowest text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
            <p className="text-on-surface">
              Red pandas possess a specialized enlarged wrist bone—the <span className="text-primary-container font-medium">radial sesamoid</span>—which acts as an opposable pseudo-thumb.
            </p>
            <div className="mt-2 pt-2 space-y-2">
              <p>
                Remarkably, this anatomical structure is a textbook example of <strong className="text-on-surface">convergent evolution</strong> with giant pandas, despite belonging to distinct carnivore branches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile mt-space-md">
        <div className="flex items-center justify-between mb-space-xs">
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Field Naturalist Dossier</span>
          <span className="font-label-caps text-[11px] text-on-surface-variant">3 ENTRIES</span>
        </div>
        <div className="space-y-2">
          {[
            { id: 1, title: 'Living Fossil Lineage', text: 'Red pandas are not bears or closely tied to raccoons. They are the single surviving members of the ancient family Ailuridae.' },
            { id: 2, title: 'Acrobatic Thermal Tail', text: 'Their magnificent 50-centimeter bushy tail provides a counter-balance while navigating razor-thin canopy branches.' },
            { id: 3, title: 'Foot-Pad Scent Signatures', text: 'Unlike most arboreal mammals, red pandas possess specialized glandular secretions between the pads of their paws.' }
          ].map(fact => (
            <div key={fact.id} className="rounded-DEFAULT bg-surface-container overflow-hidden">
              <button className="w-full px-space-md py-3 flex items-center justify-between text-left active:bg-surface-container-high transition-colors" onClick={() => setFactOpen(factOpen === fact.id ? null : fact.id)}>
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary-container/10 text-primary-container font-label-caps text-label-caps flex items-center justify-center">0{fact.id}</span>
                  <span className="font-headline-sm text-[15px] text-on-surface">{fact.title}</span>
                </div>
                <Icon name="expand_more" className={`text-on-surface-variant text-[20px] transition-transform duration-200 ${factOpen === fact.id ? 'rotate-180' : ''}`} />
              </button>
              {factOpen === fact.id && (
                <div className="px-space-md pb-3 text-on-surface-variant font-body-sm text-body-sm">
                  {fact.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="px-margin-mobile mt-space-lg mb-space-md">
        <div className="p-1 rounded-full bg-surface-container-high shadow-xl">
          <button className="w-full h-14 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-md">
            <Icon name="smart_toy" className="text-[24px]" />
            <span>Ask AniDex AI About Red Panda</span>
          </button>
        </div>
      </section>
    </div>
  );
}

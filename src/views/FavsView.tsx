import { useState } from 'react';
import { Icon } from '../components/Icon';

export function FavsView({ onNavigate }: { onNavigate: (view: string) => void }) {
  const [filter, setFilter] = useState('All Saved');
  const [previewEmpty, setPreviewEmpty] = useState(false);

  const filters = ['All Saved', 'Mammals (9)', 'Birds (5)', 'Reptiles (4)', 'Recently Added'];

  return (
    <div className="flex flex-col w-full px-margin-mobile pb-space-2xl">
      <div className="mt-space-sm bg-surface-container-high rounded-lg p-space-md shadow-md relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary-container/10 blur-2xl pointer-events-none"></div>
        <div className="flex items-center justify-between gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="p-2 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center">
              <Icon name="spa" className="text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }} />
            </span>
            <span className="font-label-caps text-label-caps text-primary-container tracking-wider uppercase">Field Sanctuary</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-highest">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Index Synced</span>
          </div>
        </div>
        <div className="mt-space-sm">
          <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">My Wildlife Sanctuary</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">18 Specimens Saved • 4 biomes represented</p>
        </div>
        <div className="mt-space-md p-space-sm rounded-DEFAULT bg-surface-container-lowest flex items-center justify-between gap-space-xs">
          <div className="flex items-center gap-space-xs min-w-0">
            <Icon name="cloud_done" className="text-[18px] text-primary-container shrink-0" />
            <span className="font-body-sm text-body-sm text-on-surface truncate">100% Offline Accessible • 42 MB local cache</span>
          </div>
          <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded-full shrink-0">Ready</span>
        </div>
      </div>

      <div className="mt-space-md flex items-center justify-between gap-space-xs">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Sanctuary Filter</span>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-primary-container font-label-caps text-label-caps uppercase tracking-wider transition-all active:scale-95" onClick={() => setPreviewEmpty(!previewEmpty)} type="button">
          <Icon name="visibility" className="text-[16px]" />
          <span>{previewEmpty ? 'View Saved Cards' : 'Preview Empty State'}</span>
        </button>
      </div>

      <div className="mt-space-xs flex items-center gap-space-xs overflow-x-auto no-scrollbar py-1">
        {filters.map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`shrink-0 px-3.5 py-2 rounded-full font-headline-sm text-label-caps uppercase transition-transform active:scale-95 ${filter === f ? 'bg-primary-container text-on-primary-container font-bold shadow-sm' : 'bg-surface-container-high text-on-surface'}`}>
            {f}
          </button>
        ))}
      </div>

      {previewEmpty ? (
        <div className="flex flex-col items-center justify-center p-space-lg mt-space-md bg-surface-container rounded-lg shadow-md text-center">
          <div className="relative w-40 h-40 flex items-center justify-center my-space-sm">
            <div className="absolute inset-0 rounded-full bg-primary-container/10 blur-xl"></div>
            <svg className="w-36 h-36 relative z-10 text-primary-container drop-shadow-[0_8px_16px_rgba(255,214,0,0.2)]" fill="none" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 20C38 20 22 36 22 58C22 79 38 96 60 96C82 96 98 80 98 58C98 42 88 28 76 22" stroke="#FFD600" strokeLinecap="round" strokeWidth="4"></path>
              <path d="M98 58C98 76 83 90 64 90C45 90 32 78 32 64C32 52 42 44 54 44C66 44 76 54 76 66" stroke="#FFE170" strokeLinecap="round" strokeWidth="4"></path>
              <path d="M72 68C72 73 67 78 61 78C56 78 52 74 52 70" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="3"></path>
              <path d="M38 34L30 16C36 17 44 21 47 26" fill="#FFD600"></path>
              <path d="M52 23C56 18 64 15 70 14L62 30" fill="#FFD600"></path>
              <path d="M36 50C38 53 42 53 44 50" stroke="#131313" strokeLinecap="round" strokeWidth="3"></path>
              <circle cx="30" cy="54" fill="#131313" r="3.5"></circle>
              <text fill="#FFE170" fontFamily="Outfit" fontSize="14" fontWeight="bold" opacity="0.9" x="82" y="32">Z</text>
              <text fill="#FFE170" fontFamily="Outfit" fontSize="11" fontWeight="bold" opacity="0.6" x="92" y="22">z</text>
              <text fill="#FFE170" fontFamily="Outfit" fontSize="8" fontWeight="bold" opacity="0.4" x="99" y="14">z</text>
            </svg>
          </div>
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-space-xs">Sanctuary Biome Empty</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mt-space-xs">
            No animals favorited yet in this biome. Tap the heart or star on any Dex page to build your field deck!
          </p>
          <button className="mt-space-lg w-full py-3.5 px-space-md rounded-full bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold shadow-lg transition-transform active:translate-y-0.5" onClick={() => onNavigate('dex')} type="button">
            Open Wildlife Dex
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-space-md mt-space-md">
          {/* Card 1: Red Panda */}
          <div className="bg-surface-container rounded-lg p-space-md shadow-md flex flex-col relative overflow-hidden transition-all duration-200 hover:shadow-xl cursor-pointer" onClick={() => onNavigate('detail')}>
            <div className="flex items-center justify-between gap-space-xs mb-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-index text-label-index text-primary-container">#042</span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps uppercase">Temperate Forest</span>
              </div>
              <button aria-label="Favorite Specimen" className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary-container transition-transform active:scale-90" onClick={(e) => e.stopPropagation()}>
                <Icon name="star" className="text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }} />
              </button>
            </div>
            <div className="relative w-full h-44 rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-sm">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3iP8D43O5deVoCie5igUzbQY-A2Cy8drPPpYYCwKA7kj691JIQ7rz4-qIwhaJSpPwoqgaV9adZAseSnMI3Uqxnfm4bWLh3HpUODgYX6Wwcn5vPo1NCkXQ6ZsAQoqwVEfGA5tpBx2FRo5AisWz85ToNf1UC1Z-_ubjGT1eAuF04GK2T8mU-4BPGULeTL8FQncSI7iDSYCcyTeT8JaPEfDumeX1l68tP3mpvXFg5LzGiWpQlujw4sTfGQ"/>
              <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-error"></span>
                <span className="font-label-caps text-label-caps text-error font-bold uppercase tracking-wider">Endangered (EN)</span>
              </div>
            </div>
            <div className="flex items-baseline justify-between gap-space-xs">
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Red Panda</h2>
              <span className="font-body-sm text-body-sm italic text-on-surface-variant">Ailurus fulgens</span>
            </div>
            <div className="mt-space-xs p-space-sm rounded-DEFAULT bg-surface-container-high flex items-start gap-space-xs">
              <Icon name="edit_note" className="text-[18px] text-primary-container shrink-0 mt-0.5" />
              <div className="flex flex-col min-w-0">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Field Note</span>
                <p className="font-body-md text-body-md text-on-surface mt-0.5 italic">“Seen foraging bamboo canopy at Wolong Nature Reserve at dawn.”</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-space-xl p-space-md rounded-lg bg-surface-container-high shadow-md flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-xs">
          <Icon name="file_download" className="text-[20px] text-primary-container" />
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Deck Management &amp; Dispatch</span>
        </div>
        <div className="grid grid-cols-2 gap-space-xs mt-space-2xs">
          <button className="flex items-center justify-center gap-2 p-3 rounded-DEFAULT bg-surface-container text-on-surface transition-colors hover:bg-surface-bright active:scale-98" type="button">
            <Icon name="description" className="text-[20px] text-primary-container" />
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-bold">Export</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-3 rounded-DEFAULT bg-primary-container text-on-primary-container font-bold transition-transform active:scale-98" type="button">
            <Icon name="share" className="text-[20px]" />
            <span className="font-label-caps text-label-caps uppercase tracking-wider font-bold">Share Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
}

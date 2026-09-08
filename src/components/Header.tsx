import { Icon } from './Icon';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export function Header({ title = 'AniDex', showBack = false, onBack }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.45)]">
      <div className="h-16 px-space-md flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm min-w-0">
          {showBack && (
            <button aria-label="Back" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface bg-surface-container-high/60 active:scale-95 transition-transform" onClick={onBack} type="button">
              <Icon name="arrow_back" className="text-[24px]" />
            </button>
          )}
          <img alt="AniDex Logo" className="h-8 w-auto object-contain shrink-0" src="https://lh3.googleusercontent.com/aida/AEtjO1UHOh-2rxTseP2Xzh38J1kJTZsjMZk_k7DFn-acLxQruvIRzMBF0w7t1ypVM9SevNykXCyOCalDW2uPeuzmD_8CAuKRyzXJB5OwCZx7geGScAFwWcBvjrkM28ZFBxrYmUHl4zg0tAWR3Tecx346Mxmw_hXH4fM9n5rlw79gYjwZT9dUbUqRIXjYWhqdpknl5YPinXFiCYs-lm6R-tHrjt7cLw13z99_eM0MhN1yR987XqCVTpityeJh3UDF"/>
          {title === 'AniDex' ? (
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate">AniDex</span>
                <span className="px-1.5 py-0.2 shrink-0 rounded-full bg-primary-container/20 text-primary-container font-label-caps text-label-caps font-bold uppercase tracking-wider">v2.4</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider truncate">Online • AI Ready</span>
              </div>
            </div>
          ) : (
             <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight truncate pl-1">{title}</span>
          )}
        </div>
        <div className="flex items-center gap-space-xs shrink-0">
          {title !== 'AniDex' && (
            <div className="hidden sm:flex items-center gap-1.5 mr-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">AI Ready</span>
            </div>
          )}
          <button aria-label="Profile" className="w-11 h-11 rounded-full flex items-center justify-center p-0.5 bg-surface-container-high transition-transform active:scale-95" type="button">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDllFRbP2EtZ97ZHCvjJyZAiv_hLaXHIV1srtaKYMt_adAH4Cv0AAKMiTB9D6dOigIUaacvYiUk8w88gx8fvPfxNouaGzc3T3DBRYV06IKHCke9UCRhsZ_dlmtexjtNGSm0yAtc22r7cZZg4vjub5eVsgx2abg-OWmiXTV_aENseMaRncjDu7Rb9Iz3c2RJXzlu1RBWP-PvSV7cI4Cca8v2aScGEjEHea7Hj5OU8KzxQ90xyt1KNMltyw"/>
          </button>
        </div>
      </div>
    </header>
  );
}

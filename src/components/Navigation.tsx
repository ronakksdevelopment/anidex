import { Icon } from './Icon';

interface NavigationProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Navigation({ currentView, onNavigate }: NavigationProps) {
  const getTabClass = (view: string) => {
    return currentView === view
      ? 'flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors text-primary-container font-bold cursor-pointer'
      : 'flex flex-col items-center justify-center min-w-[56px] min-h-[44px] text-on-surface-variant transition-colors hover:text-on-surface cursor-pointer';
  };

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-8px_24px_rgba(0,0,0,0.55)]">
      <div className="relative flex items-center justify-around h-16 px-space-xs">
        <a className={getTabClass('home')} onClick={() => onNavigate('home')}>
          <Icon name="explore" className="text-[24px]" />
          <span className="font-label-caps text-label-caps mt-0.5 tracking-wider uppercase">Home</span>
        </a>
        <a className={getTabClass('dex')} onClick={() => onNavigate('dex')}>
          <Icon name="menu_book" className="text-[24px]" />
          <span className="font-label-caps text-label-caps mt-0.5 tracking-wider uppercase">Dex</span>
        </a>
        <div className="relative -top-4 flex items-center justify-center">
          <a className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_24px_rgba(255,214,0,0.45)] text-on-primary-container active:translate-y-0.5 transition-all cursor-pointer" onClick={() => onNavigate('scanner')}>
            <Icon name="document_scanner" className="text-[30px] font-bold" />
          </a>
        </div>
        <a className={getTabClass('favs')} onClick={() => onNavigate('favs')}>
          <Icon name="favorite" className="text-[24px]" />
          <span className="font-label-caps text-label-caps mt-0.5 tracking-wider uppercase">Favs</span>
        </a>
        <a className={getTabClass('config')} onClick={() => onNavigate('config')}>
          <Icon name="tune" className="text-[24px]" />
          <span className="font-label-caps text-label-caps mt-0.5 tracking-wider uppercase">Config</span>
        </a>
      </div>
    </nav>
  );
}

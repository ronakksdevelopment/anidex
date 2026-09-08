/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomeView } from './views/HomeView';
import { DexView } from './views/DexView';
import { FavsView } from './views/FavsView';
import { ConfigView } from './views/ConfigView';
import { DetailView } from './views/DetailView';
import { ScannerView } from './views/ScannerView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  const getHeaderProps = () => {
    switch (currentView) {
      case 'detail':
        return { title: 'Specimen Detail', showBack: true, onBack: () => setCurrentView('dex') };
      case 'scanner':
        return { title: 'Biometric Scanner', showBack: true, onBack: () => setCurrentView('home') };
      case 'config':
        return { title: 'Device Settings' };
      case 'dex':
        return { title: 'Encyclopedia' };
      case 'favs':
        return { title: 'Saved Fauna' };
      default:
        return { title: 'AniDex' };
    }
  };

  return (
    <div className="bg-surface min-h-screen text-on-surface font-body-md">
      <Header {...getHeaderProps()} />
      <main className="flex-1 flex flex-col relative w-full pt-16">
        {currentView === 'home' && <HomeView onNavigate={setCurrentView} />}
        {currentView === 'dex' && <DexView onNavigate={setCurrentView} />}
        {currentView === 'favs' && <FavsView onNavigate={setCurrentView} />}
        {currentView === 'config' && <ConfigView />}
        {currentView === 'detail' && <DetailView />}
        {currentView === 'scanner' && <ScannerView />}
      </main>
      <Navigation currentView={currentView} onNavigate={setCurrentView} />
    </div>
  );
}

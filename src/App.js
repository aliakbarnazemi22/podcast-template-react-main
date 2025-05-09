import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DownHeroSection from './components/DownHeroSection'
import TopPodcasts from './components/TopPodcasts'
import EssentionalEpisodes from './components/EssentionalEpisodes'

function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <DownHeroSection />
      <TopPodcasts />
      <EssentionalEpisodes />
    </main>
  )
}

export default App
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import HeroSearch from './components/HeroSearch.jsx';
import PromoHighlights from './components/PromoHighlights.jsx';
import CategoryTabs from './components/CategoryTabs.jsx';
import StyleGrid from './components/StyleGrid.jsx';
import DealsSection from './components/DealsSection.jsx';
import EventSlider from './components/EventSlider.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import { fetchDeals, fetchDestinations, fetchEventSlides, fetchHero } from './services/api.js';
import { useSearchStore } from './store/useSearchStore.js';
import './App.css';

function App() {
  const [category, setCategory] = useState('beach');
  const hydrateFromHero = useSearchStore((state) => state.hydrateFromHero);

  const { data: heroData } = useQuery({ queryKey: ['hero'], queryFn: fetchHero });
  const { data: destinations = [], isFetching: destinationsLoading } = useQuery({
    queryKey: ['destinations', category],
    queryFn: () => fetchDestinations(category),
  });
  const { data: deals = [] } = useQuery({ queryKey: ['deals'], queryFn: fetchDeals });
  const { data: eventSlides = [] } = useQuery({
    queryKey: ['event-slides'],
    queryFn: fetchEventSlides,
  });

  useEffect(() => {
    if (heroData) {
      hydrateFromHero(heroData);
    }
  }, [heroData, hydrateFromHero]);

  return (
    <div className="app-shell">
      <header className="global-nav">
        <div className="logo">Hotels.com</div>
        <nav>
          <a href="#">Shop travel</a>
          <a href="#">Support</a>
          <a href="#">Trips</a>
          <button type="button" className="btn ghost">
            Sign in
          </button>
        </nav>
      </header>

      <main>
        <HeroSearch hero={heroData} />
        <PromoHighlights />

        <section className="styles">
          <header>
            <p className="eyebrow">Average prices based on current calendar month</p>
            <h2>Your style. These stays. A perfect match.</h2>
          </header>
          <CategoryTabs active={category} onChange={setCategory} />
          {destinationsLoading ? (
            <p className="loading">Loading stays...</p>
          ) : (
            <StyleGrid destinations={destinations} />
          )}
        </section>

        <DealsSection deals={deals} />
        <EventSlider slides={eventSlides} />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;

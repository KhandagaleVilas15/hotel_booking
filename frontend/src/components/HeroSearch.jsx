import { useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postSearch } from '../services/api.js';
import { useSearchStore } from '../store/useSearchStore.js';

const travellersSummary = ({ adults, children, rooms }) =>
  `${adults + children} traveller${adults + children > 1 ? 's' : ''}, ${rooms} room`;

const HeroSearch = ({ hero }) => {
  const { location, checkIn, checkOut, travellers, updateField, updateTravellers } =
    useSearchStore();

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: postSearch,
  });

  const headline = hero?.headline ?? 'Your next trip starts here';
  const subheading = hero?.subheading ?? 'Stay, explore, repeat.';

  const summary = useMemo(() => travellersSummary(travellers), [travellers]);

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate({ location, checkIn, checkOut, travellers });
  };

  return (
    <section className="hero">
      <div className="hero__background" />
      <div className="hero__content">
        <p className="hero__eyebrow">Hotels.com inspired</p>
        <h1>{headline}</h1>
        <p className="hero__subheading">{subheading}</p>
        <form className="hero__form" onSubmit={handleSubmit}>
          <label>
            <span>Where to?</span>
            <input
              type="text"
              value={location}
              onChange={(e) => updateField('location', e.target.value)}
              placeholder="Try Phuket, Goa, London..."
              required
            />
          </label>
          <label>
            <span>Check-in</span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => updateField('checkIn', e.target.value)}
              required
            />
          </label>
          <label>
            <span>Check-out</span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => updateField('checkOut', e.target.value)}
              required
            />
          </label>
          <label>
            <span>Travellers</span>
            <input
              type="text"
              value={summary}
              onChange={() => {}}
              readOnly
              aria-label="travellers summary"
            />
            <div className="traveller-controls">
              <button
                type="button"
                onClick={() => updateTravellers({ adults: Math.max(1, travellers.adults - 1) })}
                aria-label="decrease adults"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => updateTravellers({ adults: travellers.adults + 1 })}
                aria-label="increase adults"
              >
                +
              </button>
            </div>
          </label>
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>
        {isSuccess && <p className="hero__success">Search submitted! Check the backend logs.</p>}
      </div>
    </section>
  );
};

export default HeroSearch;


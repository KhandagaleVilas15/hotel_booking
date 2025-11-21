import { useMemo, useState } from 'react';

const DealCard = ({ deal }) => {
  const gallery = useMemo(() => {
    if (deal.images?.length) return deal.images;
    if (deal.imageUrl) return [deal.imageUrl];
    return [];
  }, [deal.images, deal.imageUrl]);

  const [index, setIndex] = useState(0);
  const hasMultiple = gallery.length > 1;

  const goPrev = () => setIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  const goNext = () => setIndex((prev) => (prev + 1) % gallery.length);

  return (
    <article className="deal-card">
      <div className="deal-card__media">
        {gallery.length > 0 && (
          <>
            <img src={gallery[index]} alt={`${deal.title} photo ${index + 1}`} loading="lazy" />
            {hasMultiple && (
              <>
                <button type="button" className="carousel-btn left" onClick={goPrev}>
                  ‹
                </button>
                <button type="button" className="carousel-btn right" onClick={goNext}>
                  ›
                </button>
              </>
            )}
          </>
        )}
      </div>
      <div className="deal-card__content">
        <span className="badge">{deal.badge ?? 'Deal'}</span>
        <h4>{deal.title}</h4>
        <p>{deal.location}</p>
        <p className="price">
          ₹{deal.pricePerNight.toLocaleString('en-IN')} <span>per night</span>
        </p>
        <ul>
          {deal.perks?.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
        {hasMultiple && (
          <p className="media-indicator">
            {index + 1}/{gallery.length}
          </p>
        )}
      </div>
    </article>
  );
};

const DealsSection = ({ deals = [] }) => (
  <section className="deals">
    <div className="deals__header">
      <div>
        <p className="eyebrow">Last-minute deals, right on time</p>
        <h2>Showing deals for the next 3 days</h2>
      </div>
      <button type="button" className="btn link">
        See all properties
      </button>
    </div>
    <div className="deals__grid">
      {deals.map((deal) => (
        <DealCard key={deal._id ?? deal.title} deal={deal} />
      ))}
    </div>
  </section>
);

export default DealsSection;


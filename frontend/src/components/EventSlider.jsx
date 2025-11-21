import { useMemo, useState } from 'react';

const EventCard = ({ slide }) => (
  <article className="event-card">
    <div className="event-card__body">
      <span className="event-card__eyebrow">{slide.ctaLabel || 'Celebrate with us'}</span>
      <h3>{slide.headline}</h3>
      <p>{slide.description}</p>
      <button type="button" className="btn">
        {slide.buttonLabel || 'Book now'}
      </button>
    </div>
    <div className="event-card__media">
      <img src={slide.imageUrl} alt={slide.headline} loading="lazy" />
    </div>
  </article>
);

const EventSlider = ({ slides = [] }) => {
  const [index, setIndex] = useState(0);
  const hasSlides = slides.length > 0;
  const title = slides[0]?.title ?? 'Host Your Special Event';
  const description =
    'Celebrate in luxury with eco-friendly spaces. Weddings, corporate events, or birthdays—book today!';

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const offset = useMemo(() => index * 100, [index]);

  if (!hasSlides) return null;

  return (
    <section className="event-slider">
      <div className="event-slider__header">
        <div>
          <p className="eyebrow light">Celebrate with style</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="event-slider__controls">
          <button type="button" onClick={goPrev} aria-label="previous slide">
            ‹
          </button>
          <button type="button" onClick={goNext} aria-label="next slide">
            ›
          </button>
        </div>
      </div>
      <div className="event-slider__track">
        <div className="event-slider__inner" style={{ transform: `translateX(-${offset}%)` }}>
          {slides.map((slide) => (
            <EventCard key={slide._id ?? slide.headline} slide={slide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSlider;


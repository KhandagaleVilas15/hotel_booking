const highlights = [
  {
    title: 'Travel adds up',
    description: 'Stay 10 nights, unlock a reward night to use however you like.',
    cta: 'How it works',
  },
  {
    title: 'Stays that deliver',
    description: 'VIP Access spots come with top ratings and perks for members.',
    cta: 'See VIP stays',
  },
  {
    title: 'Plans change. We get it.',
    description: 'Flexible booking options so you can adjust or cancel easily.',
    cta: 'Find flexible stays',
  },
];

const PromoHighlights = () => (
  <section className="promo-strip">
    {highlights.map((highlight) => (
      <article key={highlight.title}>
        <p className="promo-eyebrow">Perks</p>
        <h3>{highlight.title}</h3>
        <p>{highlight.description}</p>
        <button type="button">{highlight.cta}</button>
      </article>
    ))}
  </section>
);

export default PromoHighlights;


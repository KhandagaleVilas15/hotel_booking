const StyleGrid = ({ destinations = [] }) => (
  <div className="style-grid">
    {destinations.map((destination) => (
      <article key={destination._id ?? destination.name} className="style-card">
        <img src={destination.imageUrl} alt={destination.name} loading="lazy" />
        <div className="style-card__content">
          <h4>{destination.name}</h4>
          <p>{destination.location}</p>
          <p className="price">
            ₹{destination.averagePrice.toLocaleString('en-IN')} <span>avg per night</span>
          </p>
        </div>
      </article>
    ))}
  </div>
);

export default StyleGrid;


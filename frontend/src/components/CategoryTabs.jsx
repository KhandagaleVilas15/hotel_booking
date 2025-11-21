const categories = [
  { id: 'beach', label: 'Beach' },
  { id: 'culture', label: 'Culture' },
  { id: 'ski', label: 'Ski' },
  { id: 'family', label: 'Family' },
  { id: 'wellness', label: 'Wellness & Relaxation' },
];

const CategoryTabs = ({ active, onChange }) => (
  <div className="category-tabs">
    {categories.map((category) => (
      <button
        key={category.id}
        className={category.id === active ? 'active' : ''}
        onClick={() => onChange(category.id)}
        type="button"
      >
        {category.label}
      </button>
    ))}
  </div>
);

export default CategoryTabs;


interface FiltersProps {
  categories: string[];
  category: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearch: (term: string) => void;
  staplesOnly: boolean;
  onStaplesToggle: (enabled: boolean) => void;
}

function Filters({
  categories,
  category,
  onCategoryChange,
  searchTerm,
  onSearch,
  staplesOnly,
  onStaplesToggle
}: FiltersProps) {
  return (
    <section className="panel filters-panel">
      <div className="input-group">
        <label htmlFor="search">Search products</label>
        <div className="input-with-icon">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0-6.3a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
            />
          </svg>
          <input
            id="search"
            type="search"
            placeholder="Milk, pasta, chicken..."
            value={searchTerm}
            onChange={(event) => onSearch(event.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="all">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <label className="toggle">
        <input
          type="checkbox"
          checked={staplesOnly}
          onChange={(event) => onStaplesToggle(event.target.checked)}
        />
        Focus on staple items only
      </label>
    </section>
  );
}

export default Filters;

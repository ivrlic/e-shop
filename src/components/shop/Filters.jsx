
const Filters = ({
  setCurrentPage,
  selectedCategory, 
  onSelectCategory, 
  selectedSort, 
  onSelectSort, 
  selectedView, 
  onSelectView 
}) => {


  return (
    <div className="filter-sort-view-cont">
      {/* filter */}
      <div className="filter-cont">
        <label>Filter:</label>
        <select
          value={selectedCategory}
          onChange={(e) => {
            onSelectCategory(e.target.value)
            setCurrentPage(1)
          }}
        >
          <option value="All">All</option>
          <option value="Baby Gear">Baby Gear</option>
          <option value="Creative">Creative</option>
          <option value="Toys">Toys</option>
        </select>
      </div>

      {/* Sort */}
      <div className="sort-cont">
        <label>Sort:</label>
        <select
          value={selectedSort}
          onChange={(e) => onSelectSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Ascending Price</option>
          <option value="highToLow">Descending Price</option>
          <option value="aToZ">A to Z</option>
          <option value="zToA">Z to A</option>
        </select>
      </div>

      {/* View */}
      <div className="view-cont">      
        <label>View:</label>
        <select
          value={selectedView}
          onChange={(e) => onSelectView(e.target.value)}
        >
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

import useProduct from "../../hooks/useProduct.js"
import Pagination from "./Pagination.jsx";
import ProductItem from "./ProductItem.jsx"

const ProductList = ({ currentPage, setCurrentPage, selectedCategory, selectedSort, selectedView }) => {
  const {products, loading, error} = useProduct();
  const productsPerPage = 12;

  // Filtering by category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (selectedSort) {
      case "lowToHigh":
        return a.price - b.price;
      case "highToLow":
        return b.price - a.price;
      case "aToZ":
        return a.title.localeCompare(b.title);
      case "zToA":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  const productListHtml = currentProducts.map(product => {
    return (
        <ProductItem 
          key={product.id}
          product={product}
          view={selectedView}
        />
    )
  })

  if (error) return <p className="error-msg">{error}</p>
  if (loading) return <p className="loading-msg">Loading...</p>

  return (
    <div className="product-list-cont">
      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <div className={`product-list ${selectedView}`}>
        {productListHtml}
      </div>
      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default ProductList

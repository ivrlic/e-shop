import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/shop/ProductList.jsx";
import Filters from "../components/shop/Filters.jsx";
import ROUTES from "../utils/constantsRoutes.js";
import { useActivePage } from "../context/ActivePageContext.jsx";

const Shop = () => {
  const storedPage = localStorage.getItem("currentPage");
  const storedCategory = localStorage.getItem("selectedCategory");
  const storedSort = localStorage.getItem("selectedSort");
  const storedView = localStorage.getItem("selectedView");

  const [currentPage, setCurrentPage] = useState(storedPage || 1);
  const [selectedCategory, setSelectedCategory] = useState(storedCategory || "All");
  const [selectedSort, setSelectedSort] = useState(storedSort || "default");
  const [selectedView, setSelectedView] = useState(storedView || "grid");
  const { handlePageChange } = useActivePage();

  // saving page number to local storage
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage.toString());
  }, [currentPage]);

  // saving category(filter) to local storage
  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory.toString());
  }, [selectedCategory]);

  // saving sort to local storage
  useEffect(() => {
    localStorage.setItem("selectedSort", selectedSort.toString());
  }, [selectedSort]);

  // saving view to local storage
  useEffect(() => {
    localStorage.setItem("selectedView", selectedView.toString());
  }, [selectedView]);

  // keeping track of currentPage
  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) setCurrentPage(parseInt(storedPage));
  }, [currentPage]);

  return (
    <main className="shop-main-cont">
      <h1 className="page-title">SHO<span className="h1-last-letter">P</span></h1>
      
      <nav className="second-nav">
        <Link 
          to={ROUTES.HOME}
          onClick={() => {
            handlePageChange(ROUTES.HOME)
            localStorage.setItem("activePage", ROUTES.HOME);
          }}>
            HOME
        </Link>
        {" / "}
        <span>SHOP</span>
      </nav>
      
      <Filters
        setCurrentPage={setCurrentPage}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedSort={selectedSort}
        onSelectSort={setSelectedSort}
        selectedView={selectedView}
        onSelectView={setSelectedView}
      />

      <ProductList
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        selectedView={selectedView}
      />
      
    </main>
  );
};

export default Shop;


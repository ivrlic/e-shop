import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../utils/constantsRoutes.js";
import useProduct from "../../hooks/useProduct.js";
import { useActivePage } from "../../context/ActivePageContext.jsx";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const navigate = useNavigate();
  const selectedResultRef = useRef(null);
  const { handlePageChange } = useActivePage();

  const url  = "../data/productData.json"
  const { products } = useProduct(url);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredResults = products
        .filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

      setSearchResults(filteredResults);
      setSelectedResultIndex(-1);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedResultIndex((prevIndex) => (prevIndex + 1) % searchResults.length);
    } else if (e.key === "ArrowUp") {
      setSelectedResultIndex((prevIndex) => (prevIndex - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === "Enter" && selectedResultIndex !== -1) {
      setSearchTerm("");
      setSelectedResultIndex(-1);
      navigate(`${ROUTES.SHOP}/${searchResults[selectedResultIndex].id}`);
    }
  };

  const handleResultClick = () => {
    setSearchTerm("");
    setSelectedResultIndex(-1);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".search-bar")) {
      setSearchTerm("");
      setSelectedResultIndex(-1);
    }
  };

  const handleMouseEnter = (index) => {
    setSelectedResultIndex(index);
  };

  useEffect(() => {
    if (selectedResultRef.current) {
      selectedResultRef.current.scrollIntoView({
        block: "center",
        inline: "start",
        behavior: "smooth"
      });
    }
  }, [selectedResultIndex]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {searchTerm.length > 0 && searchResults.length === 0 && (
        <div className="no-result">
          No search result
        </div>
      )}

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result, index) => (
            <Link
              key={result.id}
              to={`${ROUTES.SHOP}/${result.id}`}
              onClick={() => {
                handleResultClick
                handlePageChange(`${ROUTES.SHOP}/${result.id}`)
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              ref={index === selectedResultIndex ? selectedResultRef : null}
            >
              <p className={index === selectedResultIndex ? "selected-search" : "non-selected-search"}>
                {result.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;



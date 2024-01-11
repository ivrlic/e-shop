import Carousel from "../components/home/Carousel.jsx";
import homeKidsFactsData from "../assets/data/homeKidsFactsData.js";
import AboutSection from "../components/home/AboutSection.jsx";
import ArticleSummary from "../components/home/ArticleSummary.jsx";
import ROUTES from "../utils/constantsRoutes.js";
import useProduct from "../hooks/useProduct.js";
import { Link } from "react-router-dom";
import { useActivePage } from "../context/ActivePageContext.jsx";

const Home = () => {
  const { handlePageChange } = useActivePage();

  const limitDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const lastSpaceIndex = text.lastIndexOf(" ", maxLength);
    const limitedText = text.substring(0, lastSpaceIndex).trim();
  
    return `${limitedText}... `;
  };
  
  const homeKidsFactsDataHtml = homeKidsFactsData.map(fact => {
    const limitedDescription = limitDescription(fact.description, 150);
    return (
      <div key={fact.id} className="carousel-cont">
      <img src={fact.img} alt={fact.imgAlt} className="carousel-img"/>
      <div className="carousel-info">
        <h3>{fact.title}</h3>
        <p>
          {limitedDescription}
          <Link 
            to={ROUTES.HOME}
            onClick={() => {
              handlePageChange(ROUTES.HOME)
              localStorage.setItem("activePage", ROUTES.HOME);
            }}>
              Read More
          </Link>
        </p>
      </div>
    </div>
    )
  });

  const { onSaleProducts, loading, error } = useProduct();
  const productsOnSaleHtml = onSaleProducts.map(product => {
    return (
      <div key={product.id} className="carousel-cont carousel-on-sale">
        <Link 
          to={`${ROUTES.SHOP}/${product.id}`}
          onClick={() => {
            handlePageChange(`${ROUTES.SHOP}/${product.id}`)
            localStorage.setItem("activePage", (`${ROUTES.SHOP}/${product.id}`).toString());
          }}>
          <img src={product.img} alt="" className="carousel-img"/>
          <div className="carousel-info carousel-info-on-sale" >
            <h3>{product.title}</h3>
            <div>
              <p className="sale-price">{`$${product.price.toFixed(2)}`}</p>
              <p className="last-price">
                {`$${product.originalPrice.toFixed(2)}`}
            </p>
            </div>
          </div>
          <div className="label-onsale">SALE</div>
        </Link>
      </div>
    )
  });

  return (
    <main>
      <h1 className="page-title">HOM<span className="h1-last-letter">E</span></h1>

      <div className="carousel-background-kids-facts">
        <Carousel items={homeKidsFactsDataHtml} />
      </div>

      <AboutSection />

      {error ? 
        ( <p className="error-msg">{error}</p> ) 
      : 
      loading ? 
        ( <p className="loading-msg">Loading...</p> ) 
      :
      ( <div className="carousel-background-products-onsale">
        <Carousel items={productsOnSaleHtml} />
      </div> )
      }

      <ArticleSummary />

    </main>
  );
};

export default Home;


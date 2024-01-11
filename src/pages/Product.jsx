import { Link, useParams } from "react-router-dom";
import ROUTES from "../utils/constantsRoutes.js";
import getProductById from "../utils/getProductById.js";
import { useCart } from "../context/CartContext.jsx";
import { useActivePage } from "../context/ActivePageContext.jsx";

const Product = () => {

  const { productId } = useParams();
  const {product, loading, error} = getProductById(productId)  
  const { addToCart } = useCart();
  const { handlePageChange } = useActivePage();

  if (error) return <p className="error-msg">{error}</p>
  if (loading) return <p className="loading-msg">Loading...</p>

  const titleNoLastLetter = product.title.slice(0, -1).toUpperCase()
  const lastLetter = product.title.slice(-1).toUpperCase()
  const isSale = product.onSale && <p className="label-onsale">SALE</p>
  const price = product.onSale 
        ? <div className="product-price-cont product-info-value">
            <p className="last-price">
              {product.price} $</p>
            <p className="sale-price">{product.originalPrice} $</p>
          </div> 
        : <p className="product-price product-info-value">{product.originalPrice} $</p>

  const techDetails = product.technicalDetails.map(detail => {
    return (<span key={detail}>{detail}</span>)
  })

  return (
    <main className="product-info-main-cont">

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
        <Link 
          to={ROUTES.SHOP}
          onClick={() => {
            handlePageChange(ROUTES.SHOP)
            localStorage.setItem("activePage", ROUTES.SHOP);
          }}>
            SHOP
        </Link>
        {" / "}
        <span>{product.title.toUpperCase()}</span>
      </nav>


      <div className="product-info-top-cont">
        <img src={`../${product.img}`} alt="" className="product-img"/>
        {isSale}
      </div>

      <h1 className="product-title">
        {titleNoLastLetter}
        <span className="h1-last-letter">
          {lastLetter}
        </span>
      </h1>
      
      <div className="product-info-small-cont">
        <p className="product-info-label">Price: </p>
        {price}
      </div>
      
      <div className="product-info-small-cont">
      <p className="product-info-label">Category:</p>
      <p className="product-info-value">{product.category}</p>
      </div>
      
      <div className="product-info-small-cont">
      <p className="product-info-label">Brand:</p>
      <p className="product-info-value">{product.brand}</p>
      </div>
            
      <div className="product-info-small-cont tech-info">      
      <p className="product-info-label">Technical details:</p>
      <p className="product-info-value">{techDetails}</p>
      </div>

      <div className="product-info-small-cont desc-info">
      <p className="product-info-label">Description:</p>
      <p className="product-info-value">{product.description}</p>
      </div>

      <div className="product-info-btn-cont">
        <button>
          <Link 
            to={ROUTES.SHOP}
            onClick={() => {
              handlePageChange(ROUTES.SHOP)
              localStorage.setItem("activePage", ROUTES.SHOP);
            }}>
              BACK TO SHOP
          </Link>
        </button>
        <button onClick={()=>addToCart(product)}>ADD TO CART</button>
      </div>  

    </main>    
  );

};

export default Product;


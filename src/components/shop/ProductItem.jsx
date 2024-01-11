import { Link } from "react-router-dom"
import ROUTES from "../../utils/constantsRoutes.js"
import { useCart } from "../../context/CartContext.jsx"
import { useActivePage } from "../../context/ActivePageContext.jsx"

const ProductItem = ({product, view}) => {
  const {
    id, 
    title, 
    price, 
    originalPrice, 
    onSale,
    imgSmall, 
  } = product

  const { addToCart } = useCart();
  const { handlePageChange } = useActivePage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  };

  const isSale = onSale ? <p className="label-onsale">SALE</p> : ""
  const currentPrice = onSale 
      ?
      <div className="price-cont">
        <p className="sale-price">${price}</p>
        <p className="last-price">${originalPrice}</p>
      </div> 
      :
      <p className="price">${originalPrice}</p>
     
  return (
    <div className={`product-item ${view === "list" ? "list-view" : ""}`}>
       <Link 
        to={`${ROUTES.SHOP}/${id}`}
        onClick={() => {
          scrollToTop()
          handlePageChange(`${ROUTES.SHOP}/${id}`)
          localStorage.setItem("activePage", (`${ROUTES.SHOP}/${id}`).toString());
        }}>
          <img className="product-img-small" src={imgSmall} alt="" />
          {isSale}
          <p className="product-title-small">{title}</p>
          {currentPrice}
      </Link>
      <button onClick={()=>addToCart(product)}>ADD</button>
    </div>
  )
}

export default ProductItem

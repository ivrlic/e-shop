export const base = "e-shop"

const ROUTES = {
  HOME: `/${base}`,
  SHOP: `/${base}/shop`,
  ABOUT: `/${base}/about`,
  CONTACT: `/${base}/contact`,
  PRODUCT: `/${base}/shop/:productId`,
  CART: `/${base}/shop/cart`,
};

export default ROUTES;
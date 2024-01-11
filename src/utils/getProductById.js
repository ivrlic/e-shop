import useProduct from "../hooks/useProduct.js";

const getProductById = (id, url) => { 

  const {products, loading, error} = useProduct(url)
  const product = products.find(product => {
    return product.id === id
  });
  
  return {product, loading, error}

};

export default getProductById
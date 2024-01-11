import useProduct from "../hooks/useProduct.js";

const getProductById = (id) => { 
  
  const {products, loading, error} = useProduct()
  const product = products.find(product => {
    return product.id === id
  });
  
  return {product, loading, error}

};

export default getProductById
import { useState, useEffect } from "react";
import fetchData from "../utils/api.js";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [onSaleProducts, setOnSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url  = "/data/productData.json"

  useEffect(() => {
    const getProducts = async () => {
      try {
        const {data, error} = await fetchData(url);

        if (error) {
          setError(error);
        } else {
          setProducts(data);
          setOnSaleProducts(data.filter(product => product.onSale));
        }

        setLoading(false);
      } 
      catch (error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, onSaleProducts, loading, error };
};

export default useProduct
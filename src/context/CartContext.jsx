import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);

  const saveCartToLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }
  };

  const setItemQuantity = (productId, qty) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: qty } : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const decrementItemQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decrementItemQuantity,
        setItemQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};


// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const existingProduct = cart.find((item) => item.id === product.id);
    
//     if (existingProduct) {
//       setCart((prevCart) =>
//         prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } 
//     else {
//       setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
//     }
//   };

//   const setItemQuantity = (productId, qty) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId
//           ? { ...item, quantity: qty }
//           : item
//       )
//     );
//   };

//   const decrementItemQuantity = (productId) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, setCart, addToCart, decrementItemQuantity, setItemQuantity, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };

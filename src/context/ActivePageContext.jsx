import React, { createContext, useContext, useState } from "react";
import ROUTES from "../utils/constantsRoutes";

const ActivePageContext = createContext();

export const ActivePageProvider = ({ children }) => {
  const storedActivePage = localStorage.getItem("activePage");
  const [activePage, setActivePage] = useState(storedActivePage || ROUTES.HOME);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <ActivePageContext.Provider value={{ activePage, handlePageChange }}>
      {children}
    </ActivePageContext.Provider>
  );
};

export const useActivePage = () => {
  const context = useContext(ActivePageContext);
  if (!context) {
    throw new Error("useActivePage must be used within an ActivePageProvider");
  }
  return context;
};
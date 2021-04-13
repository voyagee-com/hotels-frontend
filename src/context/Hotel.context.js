import React, { createContext } from "react";

export const HotelContext = createContext({});

export const HotelContextProvider = ({ children, value }) => {

  const HotelContextValue = {
    fhotelOffer: value,
    search: "",
  };

  return (
    <HotelContext.Provider value={HotelContextValue}>
      {children}
    </HotelContext.Provider>
  );
};

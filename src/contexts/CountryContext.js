/* eslint-disable no-use-before-define */
import React, { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [selCountry, setSelCountry] = useState({ selCountry: "2" });

  const values = useMemo(
    () => ({
      countries,
      setCountries,
      selCountry,
      setSelCountry,
    }),
    [countries, selCountry]
  );

  const getCountry = async () => {
    try {
      await axios("https://ezanvakti.herokuapp.com/ulkeler").then((res) =>
        setCountries(res.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useMemo(() => {
    getCountry();
  }, []);

  return (
    <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);

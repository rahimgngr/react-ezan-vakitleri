import { createContext, useContext, useState, useMemo } from "react";
import axios from "axios";
import { useCountry } from "./CountryContext";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [selCities, setSelCities] = useState({ selCities: "506" });
  const { selCountry } = useCountry();

  const values = useMemo(
    () => ({
      cities,
      setCities,
      selCities,
      setSelCities,
    }),
    [cities, selCities]
  );

  const getCity = async () => {
    try {
      axios(`https://ezanvakti.herokuapp.com/sehirler/${selCountry}`).then(
        (res) => setCities(res.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useMemo(() => {
    getCity();
  }, [selCountry]);

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);

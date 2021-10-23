/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useMemo } from "react";
import { useCity } from "./CityContext";
import axios from "axios";

const DistrictContext = createContext();

export const DistrictProvider = ({ children }) => {
  const [district, setDistrict] = useState([]);
  const [selDistrict, setSelDistrict] = useState({ selDistrict: "9206" });
  const { selCities } = useCity();

  const values = useMemo(
    () => ({
      district,
      setDistrict,
      selDistrict,
      setSelDistrict,
    }),
    [district, selDistrict]
  );

  const getDistrict = async () => {
    try {
      await axios(`https://ezanvakti.herokuapp.com/ilceler/${selCities}`).then(
        (res) => setDistrict(res.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useMemo(() => {
    getDistrict();
  }, [selCities]);

  return (
    <DistrictContext.Provider value={values}>
      {children}
    </DistrictContext.Provider>
  );
};

export const useDistrict = () => useContext(DistrictContext);

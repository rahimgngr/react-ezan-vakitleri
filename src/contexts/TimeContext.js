/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, createContext, useState, useMemo } from "react";
import { useDistrict } from "../contexts/DistrictContext";
import axios from "axios";

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [times, setTimes] = useState([]);
  const { selDistrict } = useDistrict();

  const values = useMemo(
    () => ({
      times,
      setTimes,
    }),
    [times]
  );

  const getTime = async () => {
    try {
      await axios(
        `https://ezanvakti.herokuapp.com/vakitler/${selDistrict}`
      ).then((res) => setTimes(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useMemo(() => {
    getTime();
  }, [selDistrict]);
  return <TimeContext.Provider value={values}>{children}</TimeContext.Provider>;
};

export const useTime = () => useContext(TimeContext);

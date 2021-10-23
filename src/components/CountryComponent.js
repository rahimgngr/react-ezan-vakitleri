/* eslint-disable array-callback-return */
import { useCountry } from "../contexts/CountryContext";

function CountryComponent() {
  const { countries, setSelCountry } = useCountry();

  const handleChange = (e) => {
    setSelCountry(e.target.value);
  };

  return (
    <div>
      <br />
      Ülke Seç
      <br />
      <select onChange={handleChange}>
        {countries.map((country, index) => (
          <option key={country.UlkeID || index} value={country.UlkeID}>
            {country.UlkeAdiEn}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountryComponent;

import { useCity } from "../contexts/CityContext";

function CityComponent() {
  const { cities, setSelCities } = useCity();

  const handleChange = (e) => {
    setSelCities(e.target.value);
  };

  return (
    <div>
      <br />
      Şehir Seç
      <br />
      <select onChange={handleChange}>
        {cities.map((city, index) => (
          <option key={city.SehirID || index} value={city.SehirID}>
            {city.SehirAdiEn}
          </option>
        ))}
      </select>
      <br />
      <br />
    </div>
  );
}

export default CityComponent;

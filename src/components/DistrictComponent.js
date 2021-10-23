import React from "react";
import { useDistrict } from "../contexts/DistrictContext";

function DistrictComponent() {
  const { district, setSelDistrict } = useDistrict();

  const handleChange = (e) => {
    setSelDistrict(e.target.value);
  };

  return (
    <div>
      <br />
      İlçe Seç
      <br />
      <select onChange={handleChange}>
        {district.map((dist, index) => (
          <option key={dist.IlceID || index} value={dist.IlceID}>
            {dist.IlceAdiEn}
          </option>
        ))}
      </select>
      <br />
      <br />
    </div>
  );
}

export default DistrictComponent;

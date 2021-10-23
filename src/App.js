import "./App.css";

import { CountryProvider } from "./contexts/CountryContext";
import { CityProvider } from "./contexts/CityContext";
import { DistrictProvider } from "./contexts/DistrictContext";
import { TimeProvider } from "./contexts/TimeContext";

import CountryComponent from "./components/CountryComponent";
import TimeComponent from "./components/TimeComponent";
import DistrictComponent from "./components/DistrictComponent";
import CityComponent from "./components/CityComponent";

function App() {
  return (
    <div className="App">
      <CountryProvider>
        <CityProvider>
          <DistrictProvider>
            <TimeProvider>
              <CountryComponent />
              <CityComponent />
              <DistrictComponent />
              <TimeComponent />
            </TimeProvider>
          </DistrictProvider>
        </CityProvider>
      </CountryProvider>
    </div>
  );
}

export default App;

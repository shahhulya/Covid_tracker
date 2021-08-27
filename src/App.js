import { FormControl, MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
// import InfoBox
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States
            value: country.countryInfo.iso2, //UK, USA
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
            {/* <MenuItem value="worldwide"> Worldwide</MenuItem>
          <MenuItem value="worldwide"> Option1</MenuItem>
          <MenuItem value="worldwide"> Option2</MenuItem>
          <MenuItem value="worldwide"> Option3</MenuItem> */}
          </Select>
        </FormControl>
      </div>
      <div className="app_stats">
        {/* <InfoBox title="" />

        <InfoBox title="Recovered" />
        <InfoBox title="" /> */}
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field*/}

      {/* InfoBox*/}
      {/* InfoBox*/}
      {/* InfoBox*/}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;

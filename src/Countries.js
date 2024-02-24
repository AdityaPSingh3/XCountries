import React, { useState, useEffect } from "react";
import "./Countries.css"; // Assuming you have a CSS file for styling

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="countries-grid">
      {countries.map((country) => (
        <div key={country.cca2} className="country">
          <h3>{country.name.common}</h3>
          <img src={country.flags.svg} alt={`${country.name.common} flag`} />
        </div>
      ))}
    </div>
  );
};

export default Countries;

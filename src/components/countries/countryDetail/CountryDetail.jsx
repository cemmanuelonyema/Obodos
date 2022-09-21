import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const CountryDetail = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      const [data] = res.data;
      console.log(data);
      setCountry(data);
    };
    getCountry();
  }, [name]);

  return (
    country && (
      <article className="country">
        <div className="country__img">
          <img src={country?.flags?.svg} alt="country image" />
        </div>
        <div className="country__data">
          <h2 className="country__name">{country?.name?.common}</h2>
          <div className="country__data_row">
            <span>Population:</span> <span>{country?.population}</span>
          </div>
          <div className="country__data_row">
            <span>Region:</span> <span>{country?.region}</span>
          </div>
          <div className="country__data_row">
            <span>Capital:</span> <span>{country?.capital}</span>
          </div>
        </div>
        <div>
          borderCountries:
          {country?.borders?.map((border) => (
            <span>{border}</span>
          ))}
        </div>
      </article>
    )
  );
};

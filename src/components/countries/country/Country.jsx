import React from "react";
import "./country.css";

export const Country = () => {
  return (
    <article className="country">
      <div className="country__img">
        <img src="" alt="country image" />
      </div>
      <div className="country__data">
        <h2 className="country__name">Country Name</h2>
        <div className="country__data_row">
          <span>Population:</span> <span>81,0000</span>
        </div>
        <div className="country__data_row">
          <span>Region:</span> <span>Europe</span>
        </div>
        <div className="country__data_row">
          <span>Capital:</span> <span>Berlin</span>
        </div>
      </div>
    </article>
  );
};

//  <article class="country">
//    <img class="country__img" src="" />
//    <div class="country__data">
//      <h3 class="country__name">COUNTRY</h3>
//      <h4 class="country__region">REGION</h4>
//      <p class="country__row">
//        <span>👫</span>POP people
//      </p>
//      <p class="country__row">
//        <span>🗣️</span>LANG
//      </p>
//      <p class="country__row">
//        <span>💰</span>CUR
//      </p>
//    </div>
//  </article>;

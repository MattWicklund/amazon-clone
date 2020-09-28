import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon Prime Background"
        />

        <div className="home__row">
          <Product
            id="100000090"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="100000091"
            title="LONG-CZ J9 World Mini Smallest Flip Mobile Phone Unlocked (Black)"
            price={29.94}
            image="https://m.media-amazon.com/images/I/61fCgO4-M0L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="100000092"
            title="Mini Finger Skateboard, Novelty Desktop Board"
            price={4.99}
            image="https://m.media-amazon.com/images/I/51-z6SDgMOL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="100000093"
            title="Bozo 'Oversized Clown Top Hat' Felt Party Hat"
            price={15.99}
            image="https://m.media-amazon.com/images/I/51-RoBhVxyL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="100000094"
            title="Jackson Pro Series Soloist SL2Q Mahogany Quilted MapleTop Winterstorm"
            price={999.99}
            image="https://www.fmicassets.com/Damroot/xLg/10001/2914222577_gtr_frt_001_rr.png"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="100000095"
            title="Guitar Legends: Hero of Tone"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81p8YcpdV1L._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

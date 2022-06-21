import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12345678"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated"
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
          <Product
            id="23456789"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={500}
            image={
              "https://m.media-amazon.com/images/I/716kTJI4jtL._SX425_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="34567892"
            title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black) (2022 Model) | with Alexa Compatibility"
            price={700}
            image={
              "https://m.media-amazon.com/images/I/71ZKGDdz1lL._SX355_.jpg"
            }
            rating={5}
          />
          <Product
            id="45678932"
            title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
            price={800}
            image={
              "https://m.media-amazon.com/images/I/61u0y9ADElL._SX425_.jpg"
            }
            rating={5}
          />
          <Product
            id="56789456"
            title="2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 256GB) - Blue (5th Generation)"
            price={1000}
            image={
              "https://m.media-amazon.com/images/I/719Lk3CuLzL._SX522_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home-row">
          {" "}
          <Product
            id="56789321"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1800}
            image={
              "https://m.media-amazon.com/images/I/71MlcO29QOL._SX450_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

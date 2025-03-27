import React from 'react';
import {ProductRecommendations} from "../components/ProductRecommendations";

const Home = () => {
  return (
    <div className="content-container">
      <h2>Welcome to ElectroMart</h2>
      <p>Welcome to ElectroMart, your one-stop shop for all your electronic needs. From the latest laptops and smartphones to high-performance SSDs and gaming consoles, we've got everything you need to stay up-to-date with the latest tech trends.</p>
      <img src="electroMart.webp" alt="ElectroMart" style={{ width: '100%', marginBottom: '2rem'}} />
        <ProductRecommendations/>
    </div>
  );
};

export default Home;

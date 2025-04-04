import React, { useState } from "react";
import './Home.scss';
import Header  from "../../components/Header";
import ExploreMenu from "../../components/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {




  const [category, setCategory] = useState ("All")
  return (
      <div>
        <Header/>
        <ExploreMenu category ={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload />
      </div>
  )
};

export default Home;  // ✅ Default export is required

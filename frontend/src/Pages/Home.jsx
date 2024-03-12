import React from 'react';
import Slider from '../Components/Slider/slider';
import BestSeller from '../Components/BestSeller/BestSeller';
import NewArrivals from '../Components/NewArrivals/NewArrivals';


const Home = ()=>{
  return(
    <div>
      <Slider />
      <BestSeller />
      <NewArrivals />
      
    </div>
  
  )
}

export default Home;
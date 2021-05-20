import { useState } from 'react';
import CarouselItems from '../components/CarouseItem';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home=()=>{
  return(
    <>
      <div className="flex items-center justify-center">
        <div style={{boxShadow:"5px 5px 5px grey"}} className="mx-8 my-4 shadow-2xl">
          <CarouselItems></CarouselItems>
        </div>
      </div>
    </>
  )
}
export default Home;
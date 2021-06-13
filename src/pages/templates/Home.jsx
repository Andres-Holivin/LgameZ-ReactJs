import { useEffect, useState } from 'react';
import CarouselItems from '../components/CarouseItem';
import CardHome from '../components/CardHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../../configs/AuthService';
const Home=()=>{
  const currentUser=AuthService.getCurrentUser();
  useEffect(()=>{
    console.log(currentUser==null);
    console.log(currentUser);
  },[]);
  return(
    <>
      <div className="flex flex-col items-center justify-center">
        <div style={{boxShadow:"5px 5px 5px grey"}} className="mx-8 my-4 shadow-2xl">
          <CarouselItems></CarouselItems>
        </div>
        <div className="grid w-full grid-cols-3 gap-10 px-10 py-4 justify-items-center">
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
          <CardHome></CardHome>
        </div>
      </div>
    </>
  )
}
export default Home;
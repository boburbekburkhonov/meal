import React, { useState, useEffect } from 'react';
import Header from '../Header'
import AllSections from '../AllSections'
import CanadianMealOne from '../Canadian-Meal-One'
import Search from '../Search'
import dataContext from '../Context/dataContext';
import {Routes, Route} from 'react-router-dom'
import Footer from '../Footer'
import Get from '../Api/Get';

function index(props) {
  const[result, setResult] = useState([]);
  const[seaFood, setSeaFood] = useState([])
  const[loader, setLoader] = useState(false)
  const[search, setSearch] = useState([]);

  async function By_Canadian_Foods(){
    const req = await Get.By_Canadian;
    setResult(req.data.meals)
  }

  async function Seafood(){
    const request = await Get.Seafoods
    setSeaFood(request.data.meals)
  }

  useEffect(() => {
    By_Canadian_Foods()
    Seafood()
  }, []);

  const qidiruv = async(str) =>{
    setLoader(false)
    const req = await Get.By_Searchs(str);
    if(req.data.meals === null){
      setLoader(false)
    } else {
      setSearch(req.data.meals)
      setLoader(true)
    }
  }

  return (
    <>
      <dataContext.Provider value={{qidiruv, search, loader, seaFood, result}}>
        <Header />
        <main>
          <Routes>

          <Route path='/search' element={<Search/>} />
          <Route path='/' element={<AllSections />} />
          <Route path='/:id' element={<CanadianMealOne />} />
          </Routes>
        </main>
      </dataContext.Provider>
    </>
  );
}

export default index;
import React, { useState, useEffect } from 'react';
import Header from '../Header'
import CanadianMeal from '../Canadion-Meal'
import CanadianMealOne from '../Canadian-Meal-One'
import Search from '../Search'
import dataContext from '../Context/dataContext';
import {Routes, Route} from 'react-router-dom'
import Footer from '../Footer'
import Get from '../Api/Get';

function index(props) {
  const[result, setResult] = useState([]);
  const[loader, setLoader] = useState(false)
  const[search, setSearch] = useState([]);

  async function a(){
    const req = await Get.By_Canadian;
    setResult(req.data.meals)
  }
  // console.log(search);
  useEffect(() => {
    a()
  }, []);

  const qidiruv = async(str) =>{
    setLoader(false)
    const req = await Get.By_Searchs(str);
    setSearch(req.data.meals)
    setLoader(true)
  }


  // useEffect(() => {
  //   qidiruv()
  // }, [])

  return (
    <>
      <dataContext.Provider value={{qidiruv, search, loader}}>
        <Header />
        <main>
          <Routes>

          <Route path='/search' element={<Search/>} />
          <Route path='/' element={<CanadianMeal result={result} />} />
          <Route path='/:id' element={<CanadianMealOne />} />

          </Routes>
        </main>
      </dataContext.Provider>
    </>
  );
}

export default index;
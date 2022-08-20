import React, { useState, useEffect } from 'react';
import Header from '../Header'
import AllSections from '../AllSections'
import CanadianMealOne from '../Canadian-Meal-One'
import Search from '../Search'
import CountryMeals from '../CountryMeals'
import ByName from '../ByName'
import ByNameMeals from '../ByNameMeals'
import dataContext from '../Context/dataContext';
import {Routes, Route} from 'react-router-dom'
import Footer from '../Footer'
import Get from '../Api/Get';

function index(props) {
  const[result, setResult] = useState([]);
  const[seaFood, setSeaFood] = useState([])
  const[loader, setLoader] = useState(false)
  const[search, setSearch] = useState([]);
  const[countrys, setCountry] = useState([])
  const[loaderCountry, setLoaderCountry] = useState(false)
  const[names, setName] = useState([])
  const[loaderName, setLoaderName] = useState(false)

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

  async function countries(name) {
    setLoaderCountry(false)
    const request = await Get.By_Countrys(name)
    if(request.data.meals === null){
      setLoaderCountry(false)
    } else{
      setCountry(request.data.meals)
      setLoaderCountry(true)
    }
  }

  async function byName(str){
    setLoaderName(false)
    const request = await Get.By_Names(str)
    if(request.data.meals === null){
      setLoaderName(false)
    }else {
      setName(request.data.meals)
      setLoaderName(true)
    }
  }

  return (
    <>
      <dataContext.Provider value={{qidiruv, search, loader, seaFood, result, countries, countrys, loaderCountry, byName, names, loaderName}}>
        <Header />
        <main>
          <Routes>

          <Route path='/search' element={<Search/>} />
          <Route path='/' element={<AllSections />} />
          <Route path='/home/:id' element={<CanadianMealOne />} />
          <Route path='/:country' element={<CountryMeals />} />
          <Route path='/name/:name' element={<ByNameMeals />} />
          </Routes>
        </main>
        <ByName />
      </dataContext.Provider>
    </>
  );
}

export default index;
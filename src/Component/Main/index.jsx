import React, { useState, useEffect } from 'react';
import Header from '../Header'
import CanadianMeal from '../Canadion-Meal'
import CanadianMealOne from '../Canadian-Meal-One'
import {Routes, Route} from 'react-router-dom'
import Footer from '../Footer'
import Get from '../Api/Get';

function index(props) {
  const[result, setResult] = useState([])

  async function a(){
    const req = await Get.By_Canadian;
    setResult(req.data.meals)
  }

  useEffect(() => {
    a()
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>

        <Route path='/' element={<CanadianMeal result={result} />} />
        <Route path='/:id' element={<CanadianMealOne />} />

        </Routes>
      </main>
    </>
  );
}

export default index;
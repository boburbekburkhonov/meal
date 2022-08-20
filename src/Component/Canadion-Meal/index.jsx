import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import dataContext from '../Context/dataContext';
import Hero from '../Hero'
import Seafood from '../Seafood'
import './main.css'

function index() {

  const {result} = useContext(dataContext)

  return (
    <>
    <Hero />
    <section className='canadian'>
      <div className="container">

        <div className='line'></div>

        <h1 className='canadian-heading'>Canadian foods</h1>

        <ul className='canadian-list list-unstyled m-0 p-0'>
          {result.map(item => {
            return <Link to={`/${item.idMeal}`} key={item.idMeal} className='canadian-item pt-4'>
                     <img src={item.strMealThumb} alt="canadian" width='279' height='279' />

                    <p className='canadian-desc mt-3'>
                    {item.strMeal}
                    </p>
                  </Link>
          })}
        </ul>
      </div>
    </section>

    <Seafood />
    </>
  );
}

export default index;
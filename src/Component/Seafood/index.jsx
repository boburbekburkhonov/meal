import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  const {seaFood} = useContext(dataContext)

  return (
    <section className='seafood'>
      <div className="container">

      <div className='line'></div>

        <h2 className='seafood-heading'>
          Seafoods
        </h2>

        <ul className='seafood-list list-unstyled m-0 p-0'>
          {seaFood.map(item => {
            return <Link to={`/${item.idMeal}`} key={item.idMeal} className='seafood-item pt-4'>
                     <img src={item.strMealThumb} alt="canadian" width='279' height='279' />

                    <p className='seafood-desc mt-3'>
                    {item.strMeal}
                    </p>
                  </Link>
          })}
        </ul>
      </div>
    </section>
  );
}

export default index;
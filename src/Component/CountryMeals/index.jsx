import React, {useContext, useEffect} from 'react';
import dataContext from '../Context/dataContext';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './main.css'

function index(props) {

  const {country} = useParams()
  const {countries} = useContext(dataContext)
  const {countrys} = useContext(dataContext)
  const {loaderCountry} = useContext(dataContext)
  const navigate = useNavigate()


  useEffect(() => {
    countries(country)
  }, [country])

  return (
    <section className='country-meal'>
      <div className="container">
      {loaderCountry ?

        <ul className='canadian-list d-flex flex-wrap list-unstyled m-0 p-0'>
        {countrys?.map(item => {
          return <Link to={`/home/${item.idMeal}`} key={item.idMeal} className='canadian-item search-item mt-5'>
                  <img className='rounded-5 search-img' src={item.strMealThumb} alt="search-img" />

                  <p className='search-name mt-3'>
                  {item.strMeal}
                  </p>
                </Link>
        })}
        </ul>

        : <h1 className='found text-center h1'>No meals found...</h1>}

        <button onClick={() => navigate(-1)} className='back-btn'>Back</button>
      </div>
    </section>
  );
}

export default index;
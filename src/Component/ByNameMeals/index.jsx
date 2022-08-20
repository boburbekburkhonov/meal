import React, {useEffect, useContext} from 'react';
import dataContext from '../Context/dataContext';
import { useParams, Link, useNavigate } from 'react-router-dom'
import './main.css'

function index(props) {

  const {byName} = useContext(dataContext)
  const {names} = useContext(dataContext)
  const {loaderName} = useContext(dataContext)
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    byName(name)
  }, [name])

  return (
    <section className='byname'>
     <div className="container">
      {loaderName ?

        <ul className='canadian-list d-flex flex-wrap list-unstyled m-0 p-0'>
        {names?.map(item => {
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
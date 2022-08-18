import React, {useContext} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  const {search} = useContext(dataContext)
  const {loader} = useContext(dataContext)
  const navigate = useNavigate();

  return (
    <section className='search'>
      <div className="container">
      {loader ?

        <ul className='canadian-list d-flex flex-wrap list-unstyled m-0 p-0'>
        {search?.map(item => {
          return <Link to={`/${item.idMeal}`} key={item.idMeal} className='canadian-item search-item mt-5'>
                  <img className='rounded-5 search-img' src={item.strMealThumb} alt="search-img" />

                  <p className='search-name mt-3'>
                  {item.strMeal}
                  </p>
                  <p className='search-desc'>{item?.strInstructions.slice(0, 400)}</p>
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
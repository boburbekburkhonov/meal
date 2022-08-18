import React, {useContext} from 'react';
import dataContext from '../Context/dataContext';

function index(props) {

  const {search} = useContext(dataContext)
  const {loader} = useContext(dataContext)
  console.log(search);
  return (
    <div>
      {loader ?

        <ul className='canadian-list list-unstyled m-0 p-0'>
        {search?.map(item => {
          return <li key={item.idMeal} className='canadian-item pt-4'>
                  <img src={item.strMealThumb} alt="canadian" width='279' height='279' />

                  <p className='mt-3'>
                  {item.strMeal}
                  </p>
                  <p>{item?.strInstructions.substring(0,50)}</p>
                </li>
        })}
        </ul>

      : <h1>Loading</h1>}
    </div>
  );
}

export default index;
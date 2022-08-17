import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Get from '../Api/Get';
import { useParams, useNavigate } from 'react-router-dom'
import './main.css'

function index(props) {

  const {id} = useParams()
  const[data, setData] = useState([])
  const navigate = useNavigate()

  async function CanadianId(id){
    const responce = await Get.By_Canadian_Id(id)
    setData(responce.data.meals)
  }

  useEffect(() => {
    CanadianId(id)
  }, [id])


  return (
    <section className='canadian-one'>
      <div className="container">
        {data.map((item, index) => {
          return <>
          <div key={item.idMeal} className='one d-flex flex-column mx-auto'>
            <img className='canadian-one-img rounded-5' src={item.strMealThumb} alt="canadian-food" />
            <div className='d-flex'>
            <h2 className='one-heading'>Meal name:</h2>
            <h2 className='one-heading ms-5'>{item.strMeal}</h2>
            </div>
            <div className='d-flex one-desc'>
            <p>Category:</p>
            <p className='ms-5 one-desc'>{item.strCategory}</p>
            </div>
            <div className='one-desc d-flex'>
            <p>Country:</p>
            <p className='one-desc ms-5'>{item.strArea}</p>
            </div>
          </div>

            <div key={index} className='wrapper-into'>
              <h2 className='one-heading-into'>Instructions</h2>
              <p className='one-desc-into'>{item.strInstructions}</p>
            </div>
            </>
        })}

        <button onClick={() => navigate(-1)} className='back-btn'>Back</button>
      </div>
    </section>
  );
}

export default index;
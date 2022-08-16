import React from 'react';
import mealIcon from '../../assets/images/meal-icon.png'
import './main.css'

function index(props) {
  return (
    <section className='hero'>
      <div className="container hero__container d-flex justify-content-between align-items-center">
      <img src={mealIcon} alt="meal" width='142' height='142' />

        <h1 className='hero-heading'>
          Welcome to world foods
        </h1>


       <img src={mealIcon} alt="meal" width='142' height='142' />
      </div>
    </section>
  );
}

export default index;
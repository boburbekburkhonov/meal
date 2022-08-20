import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  return (
    <section className='name'>
      <div className="container">
        <h2 className='name-heading'>
          <Link to='/name/a' className='text-decoration-none name-link' href="#">A </Link>

           /

           <Link to='/name/b' className='text-decoration-none name-link' href="#"> B </Link>

          /

          <Link to='/name/c' className='text-decoration-none name-link' href="#"> C </Link>

           /

           <Link to='/name/d' className='text-decoration-none name-link' href="#"> D </Link>

            /
          <Link to='/name/e' className='text-decoration-none name-link' href="#"> E </Link>

           /

           <Link to='/name/f' className='text-decoration-none name-link' href="#"> F </Link>

            /

          <Link to='/name/g' className='text-decoration-none name-link' href="#"> G </Link>

           /

           <Link to='/name/h' className='text-decoration-none name-link' href="#"> H </Link>

            /

          <Link to='/name/i' className='text-decoration-none name-link' href="#"> I </Link>

           /

           <Link to='/name/j' className='text-decoration-none name-link' href="#"> J </Link>

            /

          <Link to='/name/k' className='text-decoration-none name-link' href="#"> K </Link>

           /

           <Link to='/name/l' className='text-decoration-none name-link' href="#"> L </Link>

            /

          <Link to='/name/m' className='text-decoration-none name-link' href="#"> M </Link>

           /

           <Link to='/name/n' className='text-decoration-none name-link' href="#"> N </Link>

            /

            <Link to='/name/o' className='text-decoration-none name-link' href="#"> O </Link>

            /

            <Link to='/name/p' className='text-decoration-none name-link' href="#"> P </Link>

            /

            <Link to='/name/q' className='text-decoration-none name-link' href="#"> Q </Link>

            /
            <Link to='/name/r' className='text-decoration-none name-link' href="#"> R </Link>

            /

            <Link to='/name/s' className='text-decoration-none name-link' href="#"> S </Link>

            /

            <Link to='/name/t' className='text-decoration-none name-link' href="#"> T </Link>

            /

            <Link to='/name/u' className='text-decoration-none name-link' href="#"> U </Link>

            /

            <Link to='/name/v' className='text-decoration-none name-link' href="#"> V </Link>

            /

            <Link to='/name/w' className='text-decoration-none name-link' href="#"> W </Link>

            /

            <Link to='/name/x' className='text-decoration-none name-link' href="#"> X </Link>

            /

            <Link to='/name/y' className='text-decoration-none name-link' href="#"> Y </Link>

            /

            <Link to='/name/z' className='text-decoration-none name-link' href="#"> Z</Link>
        </h2>
      </div>
    </section>
  );
}

export default index;
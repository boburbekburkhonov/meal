import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  return (
    <section className='browse'>
    <div className="container">
      <ul className='browse-list list-unstyled'>
        <Link to='/British' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/gb.svg" alt="country" height='64' />
        </Link>

        <Link to='/American' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/us.svg" alt="country" height='64' />
        </Link>

        <Link to='/Canadian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/ca.svg" alt="country" height='64' />
        </Link>

        <Link to='/Jamaican' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/jm.svg" alt="country" height='64' />
        </Link>

        <Link to='/Chinese' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/cn.svg" alt="country" height='64' />
        </Link>

        <Link to='/Dutch' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/nl.svg" alt="country" height='64' />
        </Link>

        <Link to='/Egyptian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/eg.svg" alt="country" height='64' />
        </Link>

        <Link to='/Greek' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/gr.svg" alt="country" height='64' />
        </Link>

        <Link to='/Indian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/in.svg" alt="country" height='64' />
        </Link>

        <Link to='/Irish' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/ie.svg" alt="country" height='64' />
        </Link>

        <Link to='/Italian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/it.svg" alt="country" height='64' />
        </Link>

        <Link to='/Japanese' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/jp.svg" alt="country" height='64' />
        </Link>

        <Link to='/Kenyan' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/ke.svg" alt="country" height='64' />
        </Link>

        <Link to='/Malaysian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/my.svg" alt="country" height='64' />
        </Link>

        <Link to='/Mexican' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/mx.svg" alt="country" height='64' />
        </Link>

        <Link to='/Moroccan' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/ma.svg" alt="country" height='64' />
        </Link>

        <Link to='/Croatian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/hr.svg" alt="country" height='64' />
        </Link>

        <Link to='/Portuguese' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/pt.svg" alt="country" height='64' />
        </Link>

        <Link to='/Russian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/ru.svg" alt="country" height='64' />
        </Link>

        <Link to='/Argentinian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/ar.svg" alt="country" height='64' />
        </Link>

        <Link to='/Spanish' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/es.svg" alt="country" height='64' />
        </Link>

        <Link to='/Slovakian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/sk.svg" alt="country" height='64' />
        </Link>

        <Link to='/Thai' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/th.svg" alt="country" height='64' />
        </Link>

        <Link to='/Saudi_Arabian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/sa.svg" alt="country" height='64' />
        </Link>

        <Link to='/Vietnamese' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/vn.svg" alt="country" height='64' />
        </Link>

        <Link to='/Turkish' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/tr.svg" alt="country" height='64' />
        </Link>

        <Link to='/Uzbekistan' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/uz.svg" alt="country" height='64' />
        </Link>

        <Link to='/Tunisian' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/tn.svg" alt="country" height='64' />
        </Link>

        <Link to='/Polish' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/pl.svg" alt="country" height='64' />
        </Link>

        <Link to='/German' className='browse-item'>
        <img className='country-img' src="https://flagcdn.com/de.svg" alt="country" height='64' />
        </Link>
      </ul>
    </div>
    </section>
  );
}

export default index;

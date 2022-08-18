import React, {useState, useEffect, useContext, useRef} from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Get from '../Api/Get';
import dataContext from '../Context/dataContext';
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import './main.css'

function index(props) {

  const[hamburger, setHamburger] = useState(false);
  const[inputValue, setInputValue] = useState('')
  const {qidiruv} = useContext(dataContext)
  const nav = useRef()

  function add(){
    nav.current.classList.toggle('active');
  }

  function hundle(inputValue){
    if(inputValue === ''){
      alert('Ma\'lumot topilmadi')
    } else {
      qidiruv(inputValue)

      setInputValue('')
    }
  }
  return (
    <header className='header'>
      <div className="container d-flex align-items-center justify-content-between">
        <a className='header-link-logo text-decoration-none' href="#">
          <img className='header-img' src={logo} alt="logo" width='296' height='41' />
        </a>

        <nav ref={nav} className='sitenav'>
          <ul className='list list-unstyled p-0 d-flex align-items-center'>
            <li>
              <a className='sitenav-link sitenav-link-active text-decoration-none' href="#">
                Forum
              </a>
            </li>

            <li>
              <a className='sitenav-link ms-4 sitenav-link-cites text-decoration-none' href="#">
                <img src={facebook} alt="facebook" width='16' height='18' />
              </a>
            </li>

            <li>
              <a className='sitenav-link ms-4 sitenav-link-cites text-decoration-none' href="#">
                <img src={twitter} alt="facebook" width='16' height='18' />
              </a>
            </li>
          </ul>


            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="search" placeholder='Search' className='sitenav-input' />
            <Link to='/search' onClick={() => hundle(inputValue)} className='sitenav-search'>Search</Link>
        </nav>

        <button className='header-hamburger' onClick={() => add()}></button>
      </div>
    </header>
  );
}

export default index;
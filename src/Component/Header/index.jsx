import React, {useState, useRef} from 'react';
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import './main.css'

function index(props) {

  const[hamburger, setHamburger] = useState(false)
  const nav = useRef()

  function add(){
    nav.current.classList.toggle('active');
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


            <input type="search" placeholder='Search' className='sitenav-input' />

        </nav>

        <button className='header-hamburger' onClick={() => add()}></button>
      </div>
    </header>
  );
}

export default index;
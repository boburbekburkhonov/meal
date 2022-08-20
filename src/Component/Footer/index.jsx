import React from 'react';
import './main.css'

function index(props) {
  return (
    <footer className='footer'>
      <div className="container footer__container">
        <div className='footer-left'>
          <h3 className='footer-heading'>© {new Date().getFullYear()}</h3>
          <div className='d-flex align-items-center mt-3'>
          <p className='footer-desc'>Proudly built in the UZ</p>
          <img className='ms-2' src="https://flagcdn.com/uz.svg" alt="uz" width='20' height='16' />
          </div>
        </div>

        <ul className='footer-list list-unstyled'>
          <li className='footer-item'>
            <a className='footer-link' href="#">About</a>
          </li>

          <li className='footer-item'>
            <a className='footer-link' href="#">Faq</a>
          </li>

          <li className='footer-item'>
            <a className='footer-link' href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default index;
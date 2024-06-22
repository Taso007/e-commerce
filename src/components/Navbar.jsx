import '../styles/navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProductContext } from '../contexts/ProductContext';

const Navbar = ({ onSearch }) => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const { loggedIn, setLoggedIn } = useProductContext();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  }

  const checkLogIn = () => {
    if (!loggedIn) {
      return (
        <>
          <span className="navbar-item">
            <Link to="/login" >{t('login')}</Link>
          </span>
          <span className='navbar-item'>
            <Link to='https://www.facebook.com/'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
              </svg>
            </Link>
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className='navbar-item'>
            <Link to={'/profilecard'}>{t('profile')}</Link>
          </span>
          <span className='navbar-item'>
            <Link to={'/'} onClick={handleLogOut}>{t('logout')}</Link>
          </span>
        </>
      );
    }
  };

  return (
    <nav className="navbar">
      <div>
        <span className="navbar-title">
        <Link to="/" style={{  textDecoration:" none", color: "black"}}>E-commerce</Link>
        </span>
        <span className="navbar-item">
          <Link to="/">{t('home')}</Link>
        </span>
        <span className="navbar-item">
          <Link to="/contact">{t('contact')}</Link>
        </span>
      </div>
      <div className="navbar-item">
        <input
          className="search-input"
          placeholder={t('search') + '...'}
          value={searchInput}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearchSubmit}>
          {t('search')}
        </button>
      </div>
      <div className="navbar-item flex-container">
        <span className="navbar-item" onClick={toggleDropdown}>
          <span>{t('language')}</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={() => changeLanguage('en')}>
                {t("english")}
              </li>
              <li className="dropdown-item" onClick={() => changeLanguage('ge')}>
                {t("georgian")}
              </li>
            </ul>
          )}
        </span>
        <span className='navbar-item'>
          <Link to={"/cart"}>{t("cart")}</Link>
        </span>
        {checkLogIn()}
      </div>
    </nav>
  );
};

export default Navbar;

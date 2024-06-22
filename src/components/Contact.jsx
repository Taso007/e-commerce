import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/contact.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar onSearch={() => {}}/>
      <div className="contact-form-container">
        {submitted ? (
          <div className="success-message">{t("thanksforcontacting")}</div>
        ) : (
          <div className="contact-content">
            <div className="contact-info">
              <h2>{t("contactInformation")}</h2>
              <p>{t("address")}: Somewhere in Tbilisi</p>
              <p>{t("phone")}: +995 551 234 567 </p>
              <p>{t("email")}: Monitorebi@monitorebi.com</p>
              <h3>{t("followUs")}</h3>
              <Link to='https://www.facebook.com/zoommerge'> 
              <div className='flex-container'>
              Facebook                                         
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
              </div>
             </Link>
            </div>
            <form onSubmit={handleSubmit}>
              <h2>{t("contactUs")}</h2>
              <div className="form-group">
                <label htmlFor="name">{t("name")}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t("email")}</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t("message")}</label>
                <textarea id="message" name="message" required />
              </div>
              <div className="form-group">
                <input type="checkbox" id="newsletter-email" name="newsletter-email" placeholder={t("enterYourEmail")} /> {t("newsletterSubscription")}
              </div>
              <button type="submit" className="contact-button">{t("submit")}</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import '../../styles/registration.css'; 
import { useTranslation } from 'react-i18next';
import { useProductContext } from '../../contexts/ProductContext';

const Signup = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const {setLoggedIn, userName, setuserName, password, setPassword } = useProductContext();

    const onSubmit = () => {
        setLoggedIn(true);
        navigate("/");
    };

    return (
        <>
            <Navbar onSearch={() => {}}/>
            <main>
                <section className="auth-section">
                    <div className="auth-container">
                        <h1>{t('signup')}</h1>
                        <form onSubmit={onSubmit} className="auth-form">
                            <div className="form-group">
                                    <label htmlFor="text">{t('userName')}</label>
                                    <input
                                        id="text"
                                        name="text"
                                        type="text"
                                        value={userName}
                                        required
                                        placeholder={t('userName')}
                                        onChange={(e) => setuserName(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            <div className="form-group">
                                <label htmlFor="password">{t('password')}</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder={t('password')}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group text-sm text-white">
                                <div className="flex-container">
                                    <span>{t("youcanalsocreateanaccountwith")}</span>
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
                                    <Link to='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-570156269%3A1717858554402120&ddm=0'>
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        x="0px" 
                                        y="0px" 
                                        width="30" 
                                        height="30" 
                                        viewBox="0 0 48 48">
                                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
                                        <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
                                        <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
                                        <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
                                        <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>               
                            <div className="form-group btn-container">
                                <button type="submit" className="btn btn-primary">{t('signup')}</button>
                            </div>
                        </form>
                        <p className="text-sm text-white text-center">
                            {t('alreadyHaveAnAccount')} <Link to="/login">{t('login')}</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Signup;

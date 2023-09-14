import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo_scan from '../assets/logo_scan.svg';
import avatar from './avatar.svg';
import {useAuth} from '../Auth/AuthContext.tsx';
import FieldComponent from "./FieldComponent.tsx";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
    const {isLoggedIn, logout} = useAuth();

    return (
        <header>
            <div className="header-container">
                <div className="left-section">
                    <div className="logo-section">
                        <img src={logo_scan} alt="logo"/>
                        <h1>{title}</h1>
                    </div>
                </div>
                <div className="center-section">
                    <nav className="navigation-section">
                        <Link to="/">Главная</Link>
                        <Link to="/tariffs">Тарифы</Link>
                        <Link to="/faq">FAQ</Link>
                    </nav>
                </div>
                <div className="right-section">
                    {isLoggedIn && <FieldComponent isLoggedIn={isLoggedIn}/>}
                    <div className="auth-section">
                        {isLoggedIn ? (
                            <div className="user-section">
                                <div className="user-info">
                                    <span className="user-name">Алексей А.</span>
                                    <button className="logout-button" onClick={logout}>Выйти</button>
                                </div>
                                <img className="user-avatar" src={avatar} alt="User Avatar"/>
                            </div>
                        ) : (
                            <div className="auth-section">
                                <Link to="/signup">Зарегистрироваться</Link>
                                <div className="divider"></div>
                                <Link to="/login">Войти</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

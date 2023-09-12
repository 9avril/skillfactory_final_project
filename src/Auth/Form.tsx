import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Form.css';
import googleIcon from './assets/google.svg';
import facebookIcon from './assets/facebook.svg';
import yandexIcon from './assets/yandex.svg';
import {useAuth} from './AuthContext';

const Form: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('login');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const navigate = useNavigate();
    const {login: loginUser} = useAuth();

    const handleLogin = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({login, password})
        };

        try {
            const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', requestOptions);
            const data = await response.json();
            console.log(data);

            if (response.ok && data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('expire', data.expire);
                loginUser();
                navigate('/');
            } else if (data.errorCode === 'Auth_InvalidUserOrPassword') {
                setLoginError('Неправильное имя или пароль');
                setPasswordError('Неправильное имя или пароль');
            } else {
                alert("Ошибка авторизации!");
            }
        } catch (error) {
            console.error("Ошибка при авторизации:", error);
            alert("Ошибка при авторизации. Пожалуйста, попробуйте снова.");
        }
    };


    const errorStyle = {
        border: "2px solid #FF5959"
    };

    return (
        <div className="auth-form">
            <div className="tabs">
                <div
                    className={`tab-item ${activeTab === 'login' ? 'active' : ''}`}
                    onClick={() => setActiveTab('login')}
                >
                    Войти
                </div>
                <div
                    className={`tab-item ${activeTab === 'register' ? 'active' : ''}`}
                    onClick={() => setActiveTab('register')}
                >
                    Зарегистрироваться
                </div>
            </div>

            {activeTab === 'login' && (
                <>
                    <label htmlFor="login-input">Логин или номер телефона:</label>
                    <input
                        style={loginError ? errorStyle : {}}
                        className="auth-input"
                        id="login-input"
                        type="text"
                        value={login}
                        onChange={(e) => {
                            setLogin(e.target.value);
                            setLoginError(null);
                        }}
                    />
                    {loginError && <span style={{
                        color: "#FF5959",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "17px",
                        letterSpacing: "0.01em",
                        textAlign: "left"
                    }}>{loginError}</span>}

                    <label htmlFor="password-input">Пароль:</label>
                    <input
                        style={passwordError ? errorStyle : {}}
                        className="auth-input"
                        id="password-input"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError(null);
                        }}
                    />
                    {passwordError && <span style={{
                        color: "#FF5959",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "17px",
                        letterSpacing: "0.01em",
                        textAlign: "left"
                    }}>{passwordError}</span>}

                    <button
                        className="auth-btn"
                        onClick={handleLogin}
                        disabled={!login || !password}
                    >
                        Войти
                    </button>
                    <a href="#" className="recover-link">Восстановить пароль</a>
                </>
            )}

            {activeTab === 'register' && (
                <>
                </>
            )}

            <p className="socials-text">Войти через:</p>
            <div className="social-icons">
                <img src={googleIcon} alt="Google"/>
                <img src={facebookIcon} alt="Facebook"/>
                <img src={yandexIcon} alt="Yandex"/>
            </div>
        </div>
    );
}

export default Form;

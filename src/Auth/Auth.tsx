import React from 'react';
import './Auth.css';
import CharactersImage from './assets/Characters.svg';
import Form from "./Form.tsx";

const Auth: React.FC = () => {
    return (
        <div className="auth-container">
            <div className="auth-text-section">
                <p>Для оформления подписки <br/> на тариф, необходимо <br/> авторизоваться.</p>
                <img src={CharactersImage} alt="Characters" className="auth-characters-image"/>
            </div>
            <Form/>
        </div>
    );
}

export default Auth;

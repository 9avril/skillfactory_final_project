import React from 'react';
import {useNavigate} from 'react-router-dom';
import './DescriptionComp.css';
import chelove4ek_s_kofe from '../assets/chelove4ek_s_kofe.svg';
import {useAuth} from "../../Auth/AuthContext.tsx";

const DescriptionComp: React.FC = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const handleButtonClick = () => {
        if (isLoggedIn) {
            navigate('/findata');
        } else {
            navigate('/')
        }
    }

    return (
        <div className="description-container">
            <div className="text-section">
                <h1 className="title">Сервис по поиску <br/> публикаций <br/> о компании <br/> по его ИНН</h1>
                <p className="subtitle">Комплексный анализ публикаций, получение данных <br/> в формате PDF на
                    электронную почту.</p>
                <button className="request-button" onClick={handleButtonClick}>Запросить данные</button>
            </div>
            <div className="image-section">
                <img src={chelove4ek_s_kofe} alt="Человек с кофе"/>
            </div>
        </div>
    );
}

export default DescriptionComp;

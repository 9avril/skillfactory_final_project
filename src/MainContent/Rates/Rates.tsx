import React from 'react';
import {useEffect} from "react";
import './Rates.css';
import laptop from '../assets/rates_icons/laptop.svg';
import darts from '../assets/rates_icons/darts.svg';
import lampochka from '../assets/rates_icons/lampochka.svg';
import galochka from '../assets/rates_icons/galochka.svg';
import {useAuth} from "../../Auth/AuthContext.tsx";

const Rates: React.FC = () => {
    const {isLoggedIn} = useAuth();

    useEffect(() => {
        console.log("isLoggedIn changed to:", isLoggedIn);
    }, [isLoggedIn]);


    return (
        <div className="rates">
            <h2 className="rates-title">Наши тарифы</h2>
            <div className="rates-cards">

                {/* Card 1 */}
                <div className="rate-card">
                    <div className="rate-header" style={{background: '#FFB64F'}}>
                        <h3>Beginner</h3>
                        <p>Для небольшого исследования</p>
                        <div className="icon-wrapper">
                            <img src={lampochka} alt="lampochka-icon" className="rate-icon"/>
                        </div>
                    </div>
                    <div className="rate-body">
                        <div className="price">
                            <span className="current-price">799 ₽</span>
                            <span className="old-price">1 200 ₽</span>
                        </div>
                        <p className="installment-info">или 150 ₽/мес. при рассрочке на 24 мес.</p>
                        <h4 className="rate-list">В тариф входит:</h4>
                        <ul>
                            <li><img src={galochka} alt="check-icon" className="list-icon"/>Безлимитная история запросов
                            </li>
                            <li><img src={galochka} alt="check-icon" className="list-icon"/>Безопасная сделка</li>
                            <li><img src={galochka} alt="check-icon" className="list-icon"/>Поддержка 24/7</li>
                        </ul>
                        {isLoggedIn ? (
                            <button className="details-btn authenticated-btn">
                                Перейти в личный кабинет
                            </button>
                        ) : (
                            <button className="details-btn">Подробнее</button>
                        )}
                    </div>
                </div>

                {/* Card 2 */}
                <div className="rate-card">
                    <div className="rate-header" style={{background: '#7CE3E1'}}>
                        <h3>Pro</h3>
                        <p>Для HR и фрилансеров</p>
                        <div className="icon-wrapper">
                            <img src={darts} alt="darts-icon" className="rate-icon"/>
                        </div>
                    </div>
                    <div className="rate-body">
                        <div className="price">
                            <span className="current-price">1 299 ₽</span>
                            <span className="old-price">2 600 ₽</span>
                        </div>
                        <p className="installment-info">или 279 ₽/мес. при рассрочке на 24 мес.</p>
                        <h4>В тариф входит:</h4>
                        <ul>
                            <li><img src={galochka} alt="check-icon" className="list-icon"/>Все пункты тарифа Beginner
                            </li>
                            <li><img src={galochka} alt="check-icon" className="list-icon"/>Экспорт истории</li>
                            <li><img src={galochka} alt="check-icon" className="list-icon"/>Рекомендации по приоритетам
                            </li>
                        </ul>
                        <button className="details-btn">Подробнее</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="rate-card">
                    <div className="rate-header black-bg" style={{background: '#000000'}}>
                        <h3>Business</h3>
                        <p>Для корпоративных клиентов</p>
                        <div className="icon-wrapper">
                            <img src={laptop} alt="laptop-icon" className="rate-icon"/>
                        </div>
                    </div>
                    <div className="rate-body">
                        <div className="price">
                            <span className="current-price">2 379 ₽</span>
                            <span className="old-price">3 700 ₽</span>
                        </div>
                        <p className="installment-info"></p>
                        <h4>В тариф входит:</h4>
                        <ul>
                            <li><img src={galochka} alt="check-icon" className="list-icon"/>Все пункты тарифа Pro</li>
                            <li><img src={galochka} alt="check-icon" className="list-icon"/>Безлимитное количество
                                запросов
                            </li>
                            <li><img src={galochka} alt="check-icon" className="list-icon"/>Приоритетная поддержка</li>
                        </ul>
                        <button className="details-btn">Подробнее</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Rates;

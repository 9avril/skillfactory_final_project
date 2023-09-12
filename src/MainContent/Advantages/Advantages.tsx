import React from 'react';
import './Advantages.css';
import clock from "../assets/adv_icons/clock.svg"
import search from "../assets/adv_icons/search.svg"
import shield from "../assets/adv_icons/shield.svg"
import chelovechek_2 from "../assets/chelovechek_2.svg"
const Advantages: React.FC = () => {
    return (
        <div className="advantages">
            <h2 className="advantages-title">Почему именно мы</h2>
            <div className="advantages-carousel">
                <div className="advantage-card">
                    <img src={clock} alt="Clock Icon" />
                    <p>Высокая и оперативная скорость обработки заявки</p>
                </div>
                <div className="advantage-card">
                    <img src={search} alt="Search Icon" />
                    <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                </div>
                <div className="advantage-card">
                    <img src={shield} alt="Shield Icon" />
                    <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p>
                </div>
            </div>
            <div className="chelovechek_2">
                <img src={chelovechek_2} alt="chelovechek"/>
            </div>
        </div>
    );
}

export default Advantages;

import React from 'react';
import './SearchForm.css'

interface Props {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionComponent: React.FC<Props> = ({ handleClick }) => {
    return (
        <div className="btn-info">
            <button className="search-button" onClick={handleClick}>Поиск</button>
            <p className="required-fields-notice">* Обязательные к заполнению поля</p>
        </div>
    );
}

export default ActionComponent;

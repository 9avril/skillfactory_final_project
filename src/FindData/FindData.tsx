import React from 'react';
import './FindData.css';
import raketa from './assets/raketa.svg';
import documentImg from './assets/document.svg';
import foldersImg from './assets/folders.svg';
import SearchForm from "./Form/SearchForm.tsx";


const FindData: React.FC = () => {
    return (
        <div className="find-data-container">
            <h1 className="find-data-header">Найдите необходимые <br/> данные в пару кликов.</h1>
            <p className="find-data-subheader">Задайте параметры поиска. <br/> Чем больше заполните, тем точнее поиск
            </p>
            <div className="form-and-image">
                <SearchForm />
                <div className="img-container">
                    <img src={raketa} alt="Ракета" className="raketa-image"/>
                </div>
            </div>
            <img src={documentImg} alt="Документ" className="document-image"/>
            <img src={foldersImg} alt="Папки" className="folders-image"/>
        </div>
    );
}



export default FindData;

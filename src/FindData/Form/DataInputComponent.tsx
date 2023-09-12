import React from 'react';
import galochka from '../../MainContent/assets/rates_icons/galochka.svg';
import './SearchForm.css'
import ActionComponent from "./ActionComponent.tsx";
import {handleClick as clickHandler} from "./utils.ts";
import moment from 'moment';

interface Props {
    formData: FormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    setData: (data: NewsData | null) => void;
    data: any;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface FormData {
    INN: string;
    maxCompleteness: boolean;
    businessContextMentions: boolean;
    mainRoleInPublication: boolean;
    tonality: string;
    riskFactorsOnly: boolean;
    includeMarketTechnicalNews: boolean;
    includeAnnouncementsAndCalendars: boolean;
    includeNewsDigests: boolean;
    documentCount: number;
    startDate: Date;
    endDate: Date;
}

interface NewsData {
    title: string;
    content: string;
    companyName: string;
    publishedDate: string;
    sourceLink: string;
    attributes: {
        isTechNews: boolean;
        isAnnouncement: boolean;
        isDigest: boolean;
        wordCount: number;
    };
    imageUrl?: string;
}

const DataInputComponent: React.FC<Props> = ({formData, handleInputChange, setData}) => {

    const responseToNewsData = (response: any): NewsData => {
        return {
            title: response.title || "",
            content: response.content || "",
            companyName: response.companyName || "Unknown",
            publishedDate: moment(response.issueDate || "2019-11-06T09:44:00+03:00").format('DD.MM.YYYY'),
            sourceLink: "#",
            attributes: {
                isTechNews: false,
                isAnnouncement: false,
                isDigest: false,
                wordCount: response.content ? response.content.split(' ').length : 0,
            },
            imageUrl: response.imageUrl || "src/FindData/assets/grizli.png"
        };
    };


    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const apiResponse = await clickHandler(e, formData);
        if (apiResponse) {
            const newsData = responseToNewsData(apiResponse);
            setData(newsData);
        }
    }

    return (
        <>
            <div className="search-form">
                <div className="left-block">

                    <div className="input-wrapper">
                        <label className="text-style input-label" htmlFor="INN">
                            ИНН компании*
                        </label>
                        <input
                            id="INN"
                            className="input-style text-style"
                            name="INN"
                            type="text"
                            value={formData.INN}
                            onChange={handleInputChange}
                            placeholder="10 цифр"
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label className="text-style input-label" htmlFor="tonality">
                            Тональность
                        </label>
                        <select
                            id="tonality"
                            className="input-style text-style"
                            name="tonality"
                            value={formData.tonality}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="любая">Любая</option>
                            <option value="позитивная">Позитивная</option>
                            <option value="негативная">Негативная</option>
                        </select>
                    </div>
                    <div className="input-wrapper">
                        <label className="text-style input-label" htmlFor="documentCount">
                            Количество документов в выдаче*
                        </label>
                        <input
                            id="documentCount"
                            className="input-style text-style"
                            name="documentCount"
                            type="number"
                            placeholder="От 1 до 1000"
                            value={formData.documentCount}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="date-range input-wrapper">
                        <label className="text-style input-label" htmlFor="startDate">
                            Диапазон поиска*
                        </label>
                        <div className="dates-wrapper">
                            <input
                                id="startDate"
                                className="input-style date-input"
                                name="startDate"
                                type="date"
                                value={formData.startDate.toISOString().substr(0, 10)}
                                onChange={handleInputChange}
                                placeholder="Дата начала"
                                required
                            />
                            <input
                                className="input-style date-input"
                                name="endDate"
                                type="date"
                                value={formData.endDate.toISOString().substr(0, 10)}
                                onChange={handleInputChange}
                                placeholder="Дата конца"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="right-block">
                    <div className="checkboxes">
                        <label className="text-style custom-checkbox">
                            <input
                                type="checkbox"
                                name="maxCompleteness"
                                checked={formData.maxCompleteness}
                                onChange={handleInputChange}
                            />
                            <span className="checkmark">
            <img src={galochka} alt="checked"/>
        </span>
                            Признак максимальной полноты
                        </label>
                        <label className="text-style custom-checkbox">
                            <input
                                type="checkbox"
                                name="businessContextMentions"
                                checked={formData.businessContextMentions}
                                onChange={handleInputChange}
                            />
                            <span className="checkmark">
            <img src={galochka} alt="checked"/>
        </span>
                            Упоминания в бизнес-контексте
                        </label>
                        <label className="text-style custom-checkbox">
                            <input
                                type="checkbox"
                                name="mainRoleInPublication"
                                checked={formData.mainRoleInPublication}
                                onChange={handleInputChange}
                            />
                            <span className="checkmark">
            <img src={galochka} alt="checked"/>
        </span>
                            Главная роль в публикации
                        </label>
                        <label className="text-style custom-checkbox">
                            <input
                                type="checkbox"
                                name="riskFactorsOnly"
                                checked={formData.riskFactorsOnly}
                                onChange={handleInputChange}
                            />
                            <span className="checkmark">
            <img src={galochka} alt="checked"/>
        </span>
                            Публикации только с риск-факторами
                        </label>
                        <label className="text-style custom-checkbox">
                            <input
                                type="checkbox"
                                name="includeMarketTechnicalNews"
                                checked={formData.includeMarketTechnicalNews}
                                onChange={handleInputChange}
                            />
                            <span className="checkmark">
            <img src={galochka} alt="checked"/>
        </span>
                            Включать технические новости рынков
                        </label>
                        <label className="text-style custom-checkbox">
                            <input
                                type="checkbox"
                                name="includeAnnouncementsAndCalendars"
                                checked={formData.includeAnnouncementsAndCalendars}
                                onChange={handleInputChange}
                            />
                            <span className="checkmark">
            <img src={galochka} alt="checked"/>
        </span>
                            Включать анонсы и календари
                        </label>
                        <label className="text-style custom-checkbox">
                            <input
                                type="checkbox"
                                name="includeNewsDigests"
                                checked={formData.includeNewsDigests}
                                onChange={handleInputChange}
                            />
                            <span className="checkmark">
            <img src={galochka} alt="checked"/>
        </span>
                            Включать сводки новостей
                        </label>
                    </div>
                    <ActionComponent handleClick={handleClick}/>
                </div>
            </div>
        </>
    )
}

export default DataInputComponent;
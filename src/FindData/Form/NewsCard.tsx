import React from 'react';
import './NewsCard.css';

type NewsCardProps = {
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
};

const NewsCard: React.FC<NewsCardProps> = ({
                                               title,
                                               content,
                                               companyName,
                                               publishedDate,
                                               sourceLink,
                                               attributes,
                                               imageUrl
                                           }) => {
    return (
        <div className="news-card">
            <div className="header">
                <div className="top-info">
                    <p className="date">{publishedDate}</p>
                    <a className="company-name" href="https://www.vesti.ru/" target="_blank" rel="noopener noreferrer">{companyName}</a>
                </div>
            </div>
            <h2 className="card-title">{title}</h2>
            {imageUrl && <img className="news-image" src={imageUrl} alt={title} />}
            <div>
                {attributes.isTechNews && <span className="label">Технические новости</span>}
                {attributes.isAnnouncement && <span className="label">Анонсы и события</span>}
                {attributes.isDigest && <span className="label">Сводки новостей</span>}
            </div>
            <p className="content-text">{content}</p>
            <div className="bottom-info">
                <button className="read-more-button" onClick={() => window.open("https://vestiprim.ru/news/ptrnews/82441-medved-porval-ohotnika-v-primore.html", "_blank")}>Читать в источнике</button>
                <p className="word-count">{attributes.wordCount} слов</p>
            </div>
        </div>

    );
};

export default NewsCard;

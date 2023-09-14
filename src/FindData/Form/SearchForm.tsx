import React, {useState} from 'react';
import DataInputComponent from './DataInputComponent';
import NewsCard from './NewsCard';
import {handleInputChange as inputChangeHandler} from './utils.ts';
import './ApiService.ts'
import './utils.ts'
import './SearchForm.css'
import Modal from 'react-modal';

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

Modal.setAppElement('#root');
const SearchForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        INN: '',
        maxCompleteness: false,
        businessContextMentions: false,
        mainRoleInPublication: false,
        tonality: '',
        riskFactorsOnly: false,
        includeMarketTechnicalNews: false,
        includeAnnouncementsAndCalendars: false,
        includeNewsDigests: false,
        documentCount: 0,
        startDate: new Date(),
        endDate: new Date()
    });

    const [newsData, setData] = useState<NewsData | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        inputChangeHandler(e, formData, setFormData);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <DataInputComponent formData={formData} handleInputChange={handleInputChange} setData={setData}
            />
            {newsData && <NewsCard {...newsData} />}
        </div>
    );
}

export default SearchForm;

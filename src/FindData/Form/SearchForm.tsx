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

            <Modal
                isOpen={newsData !== null}
                onRequestClose={() => setData(null)}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.4)'
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        width: '440px',
                        height: '730px',
                        overflow: 'hidden'
                    }
                }}
            >
                {newsData && <NewsCard {...newsData} />}
            </Modal>

        </div>
    );
}

export default SearchForm;

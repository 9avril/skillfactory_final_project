import React, {useEffect, useState} from 'react';
import './FieldComponent.css'

interface FieldComponentProps {
    isLoggedIn: boolean;
}

const FieldComponent: React.FC<FieldComponentProps> = ({isLoggedIn}) => {
    const [data, setData] = useState<{
        usedCompanyCount?: number;
        companyLimit?: number;
    }>({});

    const [error, setError] = useState<string | null>(null);
    const [_, forceUpdate] = useState(0);
    useEffect(() => {
        forceUpdate(prev => prev + 1);
    }, [isLoggedIn]);

    useEffect(() => {
        const fetchData = async () => {
            const accessToken = localStorage.getItem('accessToken');

            if (!accessToken) {
                setError("Токен авторизации не найден");
                return;
            }

            const requestOptions = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            };

            try {
                const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/info', requestOptions);

                if (!response.ok) {
                    throw new Error('Ошибка при получении данных');
                }

                const result = await response.json();
                setData(result.eventFiltersInfo);
            } catch (error) {
                setError(error.message);
                console.error("Ошибка при выполнении запроса:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="info-field">
            {error ? (
                <p>Ошибка: {error}</p>
            ) : (
                <>
                    <p className="field-text">
                        Использовано компаний: <span className="used-value">{data.usedCompanyCount}</span>
                    </p>
                    <p className="field-text">
                        Лимит по компаниям: <span className="limit-value">{data.companyLimit}</span>
                    </p>
                </>
            )}
        </div>
    );
};

export default FieldComponent;


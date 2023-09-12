class ApiService {
    static async search(formData: any) {
        const accessToken = localStorage.getItem('accessToken');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                ids: ["1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw="]
            })
        };

        const url = 'https://gateway.scan-interfax.ru/api/v1/documents';
        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            console.error('Ошибка выполнения запроса:', error);
            throw error;
        }
    }
}

export default ApiService;

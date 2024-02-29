function createAPIs(httpClient) {
    async function getAPIs() {
        try {
            const response = await httpClient.post('http://localhost:8000/api/auth');
            return response.json();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return {
        getAPIs
    };
}
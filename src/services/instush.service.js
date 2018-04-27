export const instushService = {
    getImages
};

function getImages() {
    const requestOptions = {
        method: 'GET',
        // headers: { 'Content-Type': 'application/json' }
    };

    return fetch('http://localhost:3001/api', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(data => data);
}
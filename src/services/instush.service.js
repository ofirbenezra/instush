export const instushService = {
    getImages
};

function getImages(tag) {
    const requestOptions = {
        method: 'GET',
        // headers: { 'Content-Type': 'application/json' }
    };

    return fetch('http://localhost:3001/api?tag=' + tag, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(data => data);
}
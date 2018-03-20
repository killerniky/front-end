export const getAll = () => {
    return fetch('http://localhost:1337/locaties').then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const get = (id) => {
    return fetch(`http://localhost:1337/locaties/${id}`).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const update = (id, locatie) => {
    return fetch(`http://localhost:1337/locaties/${id}`, {
        method: 'PUT',
        body: JSON.stringify(locatie),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const del = (id) => {
    return fetch(`http://localhost:1337/locaties/${id}`, {
        method: 'DELETE',
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

export const add = (locatie) => {
    return fetch('http://localhost:1337/locaties/add', {
        method: 'POST',
        body: JSON.stringify(locatie),
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
        })
    }).then((response) => {
        if(response.statusText === 'OK') {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
}

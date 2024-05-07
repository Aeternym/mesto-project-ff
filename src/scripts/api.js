const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-12',
    headers: {
        authorization: 'b858c9fa-b514-4457-ad53-456e482f6654',
        'Content-Type': 'application/json'
    }
}

function checkResponseData(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

async function getUserInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then((res) => checkResponseData(res))
        .catch((err) => {
            return err;
        });
}

async function getCards() {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then((res) => checkResponseData(res))
        .catch((err) => {
            return err;
        });
}

async function postUserProfile(title, descr) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: title,
            about: descr
        })
    })
        .then((res) => checkResponseData(res))
        .catch((err) => {
            return err;
        });
}

async function postNewCard(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then((res) => checkResponseData(res))
        .catch((err) => {
            return err;
        });
}

async function putLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    })
        .then((res) => checkResponseData(res))
        .catch((err) => {
            return err;
        });
}

async function deleteLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
        .then((res) => checkResponseData(res))
        .catch((err) => {
            return err;
        }); 
}

async function deleteCardByApi(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
        .then((res) => checkResponseData(res))
        .catch((err) => {
            return err;
        });
}

async function updateAvatar(url) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: url
        })
    })
        .then((res) => checkResponseData(res))
        .catch((err) => {
            return err;
        });
}

export {getUserInfo, getCards, postUserProfile, postNewCard, putLike, deleteLike, deleteCardByApi, updateAvatar};
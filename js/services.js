const API_KEY = '41f33f5f6c66d791ac0717391fe0be52';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

const getData = url => fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw `Что-то пошло не так, ошибка ${response.status}`
        })
        .catch(err => console.error(err));


export const getTrends = async (type = 'all', period = 'day', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
    return await getData(url);
};
  

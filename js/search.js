import { search as getSearch } from "./services.js";
import renderCards from "./renderCards.js";

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const form = document.querySelector('.header__search-form');
const input = document.querySelector('.header__search-input');

console.log();

const search = () => {
    form.addEventListener('sub', event => {
        event.preventDefault();

        if (!input.value) return; 

        getSearch(input.value)
        .then( data => {
            console.log(data);
            if (data.length ) {
                renderCards(data); 
            } else {
                throw 'К сожелению по вашему запросу ничего не найдено';    
            }
        })
        .then( () => {
            filmWeek.remove();
            title.textContent = 'Резульат поиска';
        })
        .catch( err => {
            title.textContent = err;
        })
    });
};




export default search;
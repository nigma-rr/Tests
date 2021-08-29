import {http} from './http_service';

export function addPeople(people) {
    return http().post('/add', {
        people: people
    });
}

export function getPeoples() {
    return http().get('/peoples')
}

export function getJson() {
    return http().get('/json')
}
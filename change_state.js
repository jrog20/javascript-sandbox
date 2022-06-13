const input = '$Collie, Poodle, Shepherd, Husky, Chihuahua, Boxer, Dachshund, Terrier, Bulldog, Dane$'

const state = {
    Collie: 'medium', 
    Poodle: 'large', 
    Shepherd: 'large', 
    Husky: 'large', 
    Chihuahua: 'small', 
    Boxer: 'large', 
    Dachshund: 'small', 
    Terrier: 'small', 
    Bulldog: 'small', 
    Dane: 'giant'
};

function changeState(state) {
    return {...state, Collie: 'large'}
};

console.log(changeState(state));
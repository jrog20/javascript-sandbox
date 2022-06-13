const input = '$Collie, Poodle, Shepherd, Husky, Chihuahua, Boxer, Dachshund, Terrier, Bulldog, Dane$'

const dogMap = {
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

const parseDogInput = ({string, separator = ',', beginString = '-', endString = '-'}) => {
    let output = string.replace(beginString, '');
    output = output.replace(endString, '');
    return output.split(separator);
}

const determineDogSize = (dogSize, dog) => dogSize[dog] || 'not defined';

const handleDogSize = (dogSize) => {
    if (dogSize === 'giant') return "That's the one I want!";
    return dogSize;
}

const parsedDogs = parseDogInput({string: input, beginString: '$', endString: '$'});

const dogSizeOutput = parsedDogs.map(dog => determineDogSize(dogMap, dog.trim()
));

const output = dogSizeOutput.map(dogSize => handleDogSize(dogSize));

console.log(output)
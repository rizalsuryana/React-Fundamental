const getRandomAnimalFact = async (animal) => {
    const response = await fetch(`https://some-random-api.ml/animal/${animal}`);

    if (response.status !== 200) {
        if (animal === 'cat') {
            return{
                image : 'https://cdn.some-random-api.ml/00xPyYnm',
                fact:
                `Cat change their meow to manupulate human`
            };
        }

        return {
            image: 'https://cdn.some-random-api.ml/ibxhGkSO',
    fact: `“Him” and “Her” were the names of President Lyndon Johnson's two beagles.`
    };
    }

    const {image, fact} = await response.json();
    return { image, fact};

}


export { getRandomAnimalFact };
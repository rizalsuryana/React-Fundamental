import React from "react";
import UseEffectAnimal from "./UseEffectAnimal";


const AnimalApp = () => {

    const [animal, setAnimal] = React.useState('cat');

    const genderChangeHandler = (event) => setAnimal(event.target.value);

    return(
        <div>
            <select onChange={genderChangeHandler}>
                <option value="cat">Cat Fact</option>
                <option value="dog">Dog Fact</option>
            </select>
            <UseEffectAnimal animal={animal}/>
        </div>
    );
}


export default AnimalApp;
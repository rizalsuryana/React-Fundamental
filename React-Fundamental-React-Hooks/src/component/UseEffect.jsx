import React from "react";

const UseEffectFunc = () => {
    const [count, setCount] = React.useState(0);


    // Menggantikan componenDidMount dan componenDidUpdate

    React.useEffect (() => {
        console.count('di dalam useEffect');
        document.title = `You have clicked ${count} times`;
    });

    const increase =()=> setCount((prevCount) => prevCount +1);
    const decrease =()=> setCount ((prevCount)=> prevCount -1);

    console.count('rendering');

    return(
        <div>
            <button onClick={increase}>+ Increase Value</button>
            <p>Count: {count}</p>
            <button onClick={decrease}>- Decrease Value</button>
        </div>
    )
}


export default UseEffectFunc;
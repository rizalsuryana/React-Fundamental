import React from "react";
import Todo from "./Todo";
import ToggleLampFunc from "./ToggleLamp";
import UseEffectFunc from "./UseEffect";
// useEffect latihan
import AnimalApp from "./AnimalApp";
import '../styles/style.css';


const App = () => {
    return (
        <div>
            <h1> Latihan <code>useState()</code></h1>

            <section>
                <h2>
                    kasus 1: <code>ToggleLamp</code> Component
                </h2>
                <p>Nyalakan lampu untuk melihat pesan.</p>
                <ToggleLampFunc/>
            </section>

            <section>
                <h2>Kasus 2 <code>Todo</code> Component
                <Todo/>
                </h2>
            </section>

                <h2>Latihan useEffect</h2>
            <section>
                <UseEffectFunc/>
            </section>
            <h2>Latihaan Use Effect 2 ; animal</h2>
            <section>
                <AnimalApp/>
            </section>

        </div>
    );
}


export default App;
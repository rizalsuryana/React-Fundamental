import React from "react";
import Todo from "./Todo";
import ToggleLampFunc from "./ToggleLamp";
import UseEffectFunc from "./UseEffect";

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

        </div>
    );
}


export default App;
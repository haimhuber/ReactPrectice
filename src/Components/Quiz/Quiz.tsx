import './Quiz.css'
import { useState } from 'react'
import React from 'react'

type QuizProps = {
    header: string[];
}

export const Quiz: React.FC<QuizProps> =
    ({ header }) => {
        const [counter, setCounter] = useState(0);
        const answers = [];
        return (
            <div>
                {counter < header.length - 1 && <h2> Question: {header[counter]}</h2>}
                {counter < header.length - 1 && <input type="text" name="" id="in" onChange={(e) => { answers.push(e.target.value) }} />}
                {counter === header.length - 1 && <h3>Thank you!</h3>}
                <br />
                <br />
                <button onClick={() => setCounter((counter + 1) % header.length)}> Next Question</button>
            </div>


        );
    } 

import { useState } from 'react'
import './App.css'

import { Calc } from './features/calc/Calc.jsx';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App" >
            <header className="App-header">
                <h1 className="text-3xl font-bold mb-2">
                    Simple Calculator
                </h1>

                <Calc />

            </header>
        </div>
    )
}

export default App

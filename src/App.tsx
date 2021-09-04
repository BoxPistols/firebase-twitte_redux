import React, { useState, useEffect } from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'

const App: React.FC = () => {
    const [ status, setState ] = useState<string>('て')
    return (
        <div className="App">
            <header className="App-header">
                <h4>{status}</h4>
                <button onClick={() => setState('Change')}>Count </button>
                <Counter />
            </header>
        </div>
    )
}

export default App

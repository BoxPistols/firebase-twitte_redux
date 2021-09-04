import React, { useState, useEffect } from 'react'
import { Counter } from './features/counter/Counter'
import './App.css'

const App: React.FC = () => {
    const [ status, setState ] = useState<string | number>('テキスト')
    const [ input, setInput ] = useState('')

    const onChangeHandler = (e: React.ChangeEventHandler<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    return (
        <div className="App">
            <header className="App-header">
                {/* Text */}
                <h4>{status}</h4>
                <button onClick={() => setState(0)}>Count </button>
                {/* input */}
                <input type="text" value={input} onChange={onChangeHandler} />
                <Counter />
            </header>
        </div>
    )
}

export default App

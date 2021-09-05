import React, { useState, useEffect } from 'react'
// import { Counter } from './features/counter/Counter'
import './App.css'
import Cleanup from './CleanUp'

const App: React.FC = () => {
    const [ status, setState ] = useState<string | number>('テキスト')
    const [ input, setInput ] = useState('')
    const [ counter, setCounter ] = useState(0)
    const [ display, setDisplay ] = useState(false)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    useEffect(
        () => {
            console.log('move useEffect')
            document.title = `my title ${counter}`
            return () => {
                // cleanup
            }
        },
        [ counter ]
        /**
         * 第２引数設定
         * [ counter ] = useEffectの発火を絞る
         * [ ] だけ =　1回だけ発火 = カウンターに追従しない
        */
    )

    return (
        <div className="App">
            <header className="App-header">
                {/* Text */}
                <h4>status: {status}</h4>
                <button onClick={() => setState('Nothing!')}>Count </button>
                {/**
                 * setStateを通じてstatusを入れ替え
                 */}

                {/* input */}
                <h4>input: {input}</h4>
                <input type="text" value={input} onChange={onChangeHandler} />
                {/**
                 * onChangeHandler関数を通じてinputをBind
                 */}

                {/* counter */}
                <h4>counter: {counter}</h4>
                <button onClick={() => setCounter((pr) => pr + 1)}>
                    Count{' '}
                </button>
                {/**
                 * onChangeHandler関数を通じてinputをBind
                 */}

                {/* Clean Up */}
                <h4>CleanUp</h4>
                {display && <Cleanup />}
                <button onClick={() => setDisplay(!display)}>
                    Toggle Cleanup
                </button>
                {/* <Counter /> */}
            </header>
        </div>
    )
}

export default App

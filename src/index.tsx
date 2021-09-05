import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import UseEffect from './UseEffect'
// import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)
console.log(store.getState())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import rootReducer from './store';
import { BrowserRouter } from 'react-router-dom';

const savToLs = state => {
    const _state = JSON.stringify(state)
    try{
        localStorage.setItem('state', _state)
    }catch(err){
        console.log(err)
    }
}

const loadFromLs = () => {
    const _state = localStorage.getItem('state')
    try{
        if(_state === null){
            return undefined
        }else{
            return JSON.parse(_state)
        }
    }catch(err){
        console.log(err)
        return undefined
    }
}

const presistedState = loadFromLs()

const store = createStore(
    rootReducer,
    presistedState,
    applyMiddleware(thunk)
)

store.subscribe(() => savToLs(store.getState()))

const app = <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>

ReactDOM.render(app, document.querySelector('#root'));
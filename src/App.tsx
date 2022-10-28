import React from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import {CounterNew} from "./components/CounterNew/CounterNew";


export function App() {

    return (
        <div className="App">
            <Counter/>
            <CounterNew/>
        </div>
    );

}




import React, {useEffect, useState} from 'react';
import s from './Counter.module.css';
import {CounterSettings} from "../CounterSettings/CounterSettings";
import {CounterScreen} from "../CounterScreen/CounterScreen";


export type StorageValuesType = {
    startValue: number
    maxValue: number
}

function Counter() {
    const [settingsValues, setSettingsValues] = useState<StorageValuesType>({
        startValue: 0,
        maxValue: 5
    })

    let [count, setCount] = useState<number>(settingsValues.startValue);

    let [error, setError] = useState<string>('');



    let [buttonValue, setButtonValue] = useState<string>('');

    const setStartValue = (num: string) => {
        setSettingsValues({...settingsValues, startValue: +num});
        setButtonValue('enter values and press "set"');
        if (+num >= 0 && +num < settingsValues.maxValue) {
            setError('');
        } else {
            setError('Incorrect value!');
            setButtonValue('');
        }
    }

    const setMaxValue = (num: string) => {
        setSettingsValues({...settingsValues, maxValue: +num})
        setButtonValue('enter values and press "set"');

        if (+num >= 1 && +num > settingsValues.startValue && settingsValues.startValue >=0 ) {
            setError('');
        } else {
            setError('Incorrect value!');
            setButtonValue('');
        }
    }


    useEffect(() => {
        let startValueStorage = localStorage.getItem('startValue');
        let maxValueStorage = localStorage.getItem('maxValue');
        if (startValueStorage && maxValueStorage) {
            let newStartValue = JSON.parse(startValueStorage);
            let newMaxValue = JSON.parse(maxValueStorage);
            setSettingsValues({...settingsValues, startValue: newStartValue, maxValue: newMaxValue})
            setCount(newStartValue)
        }

    }, [])

    const setToLocalStorage = () => {
        setButtonValue('');
        setError('');
        setCount(settingsValues.startValue)
        localStorage.setItem('startValue', JSON.stringify(settingsValues.startValue));
        localStorage.setItem('maxValue', JSON.stringify(settingsValues.maxValue));
    }


    const setCounter = () => {
        count < settingsValues.maxValue && setCount(++count);
    }
    const resetCounter = () => {
        setCount(settingsValues.startValue);
    }
    return (
        <div className={s.counter}>
            <CounterSettings setToLocalStorage={setToLocalStorage}
                             setStartValue={setStartValue}
                             setMaxValue={setMaxValue}
                             settingsValues={settingsValues}
                             error={error}
                             buttonValue={buttonValue}
            />
            <CounterScreen count={count}
                           setCounter={setCounter}
                           resetCounter={resetCounter}
                           settingsValues={settingsValues}
                           error={error}
                           buttonValue={buttonValue}
            />
        </div>
    );

}


export default Counter;

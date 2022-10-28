import React, {useEffect, useState} from 'react';
import {StorageValuesType} from "../Counter/Counter";
import s from "./CounterNew.module.css";
import {CounterButton} from "../CounterButton/CounterButton";
import {CounterNewSettings} from "../CounterNewSettings/CounterNewSettings";
import {CounterNewScreen} from "../CounterNewScreen/CounterNewScreen";

export const CounterNew = () => {
    const [settingsValues, setSettingsValues] = useState<StorageValuesType>({
        startValue: 0,
        maxValue: 5
    })

    let [count, setCount] = useState<number>(settingsValues.startValue);

    let [error, setError] = useState<string>('');

    const [setButton, setSetButton] = useState<boolean>(false);

    const setStartValue = (num: string) => {
        setSettingsValues({...settingsValues, startValue: +num});
        if (+num >= 0 && +num < settingsValues.maxValue) {
            setError('');
        } else {
            setError('Incorrect value!');
        }
    }

    const setMaxValue = (num: string) => {
        setSettingsValues({...settingsValues, maxValue: +num})
        if (+num >= 1 && +num > settingsValues.startValue && settingsValues.startValue >= 0) {
            setError('');
        } else {
            setError('Incorrect value!');
        }
    }


    useEffect(() => {
        let startValueStorage = localStorage.getItem('startValueNewCounter');
        let maxValueStorage = localStorage.getItem('maxValueNewCounter');
        if (startValueStorage && maxValueStorage) {
            let newStartValue = JSON.parse(startValueStorage);
            let newMaxValue = JSON.parse(maxValueStorage);
            setSettingsValues({...settingsValues, startValue: newStartValue, maxValue: newMaxValue})
            setCount(newStartValue)
        }

    }, [])

    const setToLocalStorage = () => {
        setSetButton(!setButton);
        setError('');
        setCount(settingsValues.startValue)
        localStorage.setItem('startValueNewCounter', JSON.stringify(settingsValues.startValue));
        localStorage.setItem('maxValueNewCounter', JSON.stringify(settingsValues.maxValue));
    }


    const setCounter = () => {
        count < settingsValues.maxValue && setCount(++count);
    }
    const resetCounter = () => {
        setCount(settingsValues.startValue);
    }

    return (
        <div className={s.counter}>
            <div className={s.counter__board}>
                {setButton ?
                    <CounterNewSettings setStartValue={setStartValue} setMaxValue={setMaxValue} settingsValues={settingsValues}/> :
                    <CounterNewScreen count={count} settingsValues={settingsValues}/>
                }
            </div>
            <div className={s.counter__buttonBlock}>
                { !setButton && <>
                    <CounterButton name={"inc"}
                                  callback={setCounter}
                                  disabled={count >= settingsValues.maxValue}
                />
                    <CounterButton name={"reset"}
                                   callback={resetCounter}
                                   disabled={count === settingsValues.startValue}
                    />
                </>}
                <CounterButton name={"set"}
                               callback={setToLocalStorage}
                               disabled={error !== ''}
                />
            </div>
        </div>
    );
};


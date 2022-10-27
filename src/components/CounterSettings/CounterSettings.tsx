import React from "react";
import s from "./CounterSettings.module.css"
import {CounterButton} from "../CounterButton/CounterButton";
import {CounterInput} from "../CounterInput/CounterInput";
import {StorageValuesType} from "../Counter/Counter";




type CounterSettingsPropsType = {
    setToLocalStorage: () => void
    setStartValue: (num: string) => void
    setMaxValue: (num: string) => void
    settingsValues: StorageValuesType
    error: string
    buttonValue: string
}


export const CounterSettings:React.FC<CounterSettingsPropsType> = ({setToLocalStorage, setStartValue, setMaxValue, settingsValues,error, buttonValue}) => {

    return (
        <div className={s.counterSet}>
            <div className={s.counterSet__board}>
                <CounterInput labelName={'max value:'}
                              onChangeNumber={setMaxValue}
                              value={settingsValues.maxValue}
                              errorInp={settingsValues.maxValue <= 1 || settingsValues.maxValue <= settingsValues.startValue}
                />
                <CounterInput labelName={'min value:'}
                              onChangeNumber={setStartValue}
                              value={settingsValues.startValue}
                              errorInp={settingsValues.startValue < 0 || settingsValues.maxValue <= settingsValues.startValue}

                />
            </div>
            <div className={s.counter__buttonBlock}>
                <CounterButton name={"set"}
                               callback={setToLocalStorage}
                               disabled={error !== '' || buttonValue === ''}
                />
            </div>
            </div>
    );
}
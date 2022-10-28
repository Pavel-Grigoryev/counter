import React from "react";
import s from "./CounterScreen.module.css"
import {CounterButton} from "../CounterButton/CounterButton";
import {StorageValuesType} from "../Counter/Counter";


type CounterPropsType = {
    count: number
    setCounter: () => void
    resetCounter: () => void
    settingsValues: StorageValuesType
    error: string
    buttonValue: string
}

export const CounterScreen: React.FC<CounterPropsType> = ({
                                                        count,
                                                        setCounter,
                                                        resetCounter,
                                                        settingsValues,
                                                        error,
                                                        buttonValue
                                                    }) => {
    // let [count, setCount] = useState<number>(0)
    const setCountHandler = () => {
        setCounter();
    }
    const resetCountHandler = () => {
        resetCounter();
    }

    const finalSpanClass = count === settingsValues.maxValue ? s.counter__errNum + " " + s.counter__Num : s.counter__Num;

    return (
        <div className={s.counter}>
            <div className={s.counter__board}>                {buttonValue ? (<span className={s.counter__text}>{buttonValue}</span>) :
                error ? (<span className={s.counter__textErr}>{error}</span>) :
                    <span className={finalSpanClass}>{count}</span>}

            </div>
            <div className={s.counter__buttonBlock}>
                <CounterButton name={"inc"}
                               callback={setCountHandler}
                               disabled={count >= settingsValues.maxValue || !!error || !!buttonValue}/>
                <CounterButton name={"reset"}
                               callback={resetCountHandler}
                               disabled={count === settingsValues.startValue || !!error || !!buttonValue}
                />
            </div>
        </div>
    );
}
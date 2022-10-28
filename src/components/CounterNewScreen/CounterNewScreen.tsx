import React from "react";
import s from "./CounterNewScreen.module.css"
import {StorageValuesType} from "../Counter/Counter";


type CounterNewScreenPropsType = {
    count: number
    settingsValues: StorageValuesType
}

export const CounterNewScreen: React.FC<CounterNewScreenPropsType> = ({
                                                                          count,
                                                                          settingsValues,

                                                                      }) => {

    const finalSpanClass = count === settingsValues.maxValue ? s.counter__errNum + " " + s.counter__Num : s.counter__Num;

    return (
        <div>
            <span className={finalSpanClass}>{count}</span>
        </div>
    );
}
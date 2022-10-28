import React from "react";
import s from "./CounterButton.module.css"

type CounterButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}

export const CounterButton: React.FC<CounterButtonPropsType> = ({callback, name,disabled}) => {
    return (
        <button className={s.button} onClick={callback} disabled={disabled}>{name}</button>
    );
}


import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './CounterInput.module.css'

type CounterInputPropsType = {
    labelName: string
    onChangeNumber?: (num: string) => void
    onEnter?: () => void
    value: number
    errorInp: boolean

}

export const CounterInput: React.FC<CounterInputPropsType> = ({labelName, onChangeNumber, onEnter,value,errorInp}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeNumber) {
            onChangeNumber(e.currentTarget.value);

        }
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        onEnter &&
        e.key === 'Enter' &&
        onEnter();
    }

    const finalClassInput = s.input + (errorInp ? ' ' + s.errorInput : '' )

    return (
            <label className={s.label}>
                <span className={s.label__name}>{labelName}</span>
                <input value={value} type="number" className={finalClassInput} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            </label>

    )
}
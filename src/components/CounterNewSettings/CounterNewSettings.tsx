import React from "react";
import {CounterInput} from "../CounterInput/CounterInput";
import {StorageValuesType} from "../Counter/Counter";


type CounterNewSettingsPropsType = {
    setStartValue: (num: string) => void
    setMaxValue: (num: string) => void
    settingsValues: StorageValuesType
}


export const CounterNewSettings: React.FC<CounterNewSettingsPropsType> = ({
                                                                              setStartValue,
                                                                              setMaxValue,
                                                                              settingsValues

                                                                          }) => {

    return (
        <>
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
        </>
    );
}
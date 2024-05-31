"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import localeReducer, { setLocaleState } from "./locale";
import settingReducer, { setSettingState } from "./setting";
import productReducer from './product'

export function ReduxProvider({ data, children }) {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = configureStore({
            reducer: {
                localeReducer,
                settingReducer,
                productReducer
            },
        });

        storeRef.current.dispatch(setLocaleState(data.locale));
        storeRef.current.dispatch(setSettingState(data.setting));
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: process.env.NEXT_PUBLIC_LOCALE_DEFAULT || "vi",
};

const locale = createSlice({
    name: "locale",
    initialState,
    reducers: {
        setLocaleState: (_, action) => {
            return {
                value: action.payload,
            };
        },
    },
});

export const { setLocaleState } = locale.actions;
export default locale.reducer;

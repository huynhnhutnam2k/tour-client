import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
};

const setting = createSlice({
    name: "setting",
    initialState,
    reducers: {
        setSettingState: (_, action) => {
            return {
                value: action.payload,
            };
        },
    },
});

export const { setSettingState } = setting.actions;
export default setting.reducer;

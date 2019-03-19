import { INPUT_FOCUS_CHANGE } from './actionTypes';

export const getFocusedAction = (isFocused) => ({
    type: INPUT_FOCUS_CHANGE,
    isFocused
})
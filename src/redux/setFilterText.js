import { SET_FILTER_TEXT } from "./actions";

export const setFilterText = (text) => ({
    type: SET_FILTER_TEXT,
    payload: text,
});

export default setFilterText;

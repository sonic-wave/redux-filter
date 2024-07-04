import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, SET_USER_TEXT_VALUE, SET_FILTER_TEXT } from "./actions";

const initialState = {
    items: [],
    userTextValue: '',
    editItemId: null,
    filterText: '',
};

const valueReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            if (state.editItemId !== null) {
                return {
                    ...state,
                    items: state.items.map((item) => item.id === state.editItemId
                        ? { ...item, textValue: state.userTextValue }
                        : item
                    ),
                    userTextValue: '',
                    editItemId: null,
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    userTextValue: '',
                }
            }
        case SET_USER_TEXT_VALUE:
            return {
                ...state,
                userTextValue: action.payload,
            }
        case EDIT_ITEM:
            return {
                ...state,
                userTextValue: action.payload.textValue,
                editItemId: action.payload.id,
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        case SET_FILTER_TEXT:
            return {
                ...state,
                filterText: action.payload,
            }
        default:
            return state;
    }
};

export default valueReducer;
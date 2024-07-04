import { ADD_ITEM } from "./actions"

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: {
    id: item.id,
    textValue: item.textValue,
  },
});

export default addItem;
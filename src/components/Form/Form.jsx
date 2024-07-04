import { useSelector, useDispatch } from "react-redux";
import { SET_USER_TEXT_VALUE } from "../../redux/actions";
import addItem from "../../redux/addItem";
import './Form.css';

export const Form = () => {
    const dispatch = useDispatch();
    const { userTextValue, editItemId } = useSelector((state) => state.value);

    const submitHandler = (e) => {
        e.preventDefault();
        const itemId = editItemId || Date.now();
        if (userTextValue) {
            dispatch(addItem({id: itemId, textValue: userTextValue}));
        } 
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-container'>
                <input
                    type="text"
                    value={userTextValue}
                    onChange={(e) => {
                        dispatch({
                            type: SET_USER_TEXT_VALUE,
                            payload: e.target.value,
                        });
                    }}
                    placeholder="Форма"
                />
                <button type='submit'>Save</button>
                <button onClick={() => {
                    dispatch({
                    type: SET_USER_TEXT_VALUE,
                    payload: '',
                    })
                }}>Cancel</button>
            </div>
        </form>
    )
}
import React from 'react'
import './SavedInfo.css'
import { useSelector, useDispatch } from "react-redux";
import setUserTextValue from '../../redux/setUserTextValue';
import editItem from '../../redux/editItem';
import deleteItem from '../../redux/deleteItem';


export const SavedInfo = () => {
    const dispatch = useDispatch();
    const { items, filterText } = useSelector((state) => state.value);

    const handleEditButton = (item) => {
        dispatch(setUserTextValue(item));
        dispatch(editItem(item));
    }

    const handleDeleteButton = (item) => {
        dispatch(deleteItem(item));
    }

    const filteredItems = items.filter((item) =>
        item.textValue.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            {items && filteredItems.map((item, index) => (
                <div className='saved-info-container' key={index}>
                    <div className='saved-info text'>{item.textValue}</div>
                    <button className='saved-info-editBtn' onClick={() => handleEditButton(item)}>Edit</button>
                    <button className='saved-info-deleteBtn'onClick={() => handleDeleteButton(item)}>Delete</button>
                </div>
            ))
            }
        </>
    )
}

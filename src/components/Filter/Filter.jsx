import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setFilterText } from '../../redux/setFilterText';
import './Filter.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const filterText = useSelector((state) => state.value.filterText);

    const handleChange = (e) => {
        dispatch(setFilterText(e.target.value));
    };

    return (
        <div className='filter-container'>
            <input
                type="text"
                value={filterText}
                onChange={handleChange}
                placeholder="Фильтр"
            />
        </div>
    );
};

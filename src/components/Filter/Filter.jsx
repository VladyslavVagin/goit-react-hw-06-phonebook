import React from 'react';
import css from './Filter.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterContacts);
  const handleFilter = (event) => dispatch(filterContacts(event.target.value));

  return (
    <label>
      <input
        className={css.filter}
        name="filter"
        placeholder="Search..."
        type="search"
        onChange={handleFilter}
      />
    </label>
  );
};


export default Filter;

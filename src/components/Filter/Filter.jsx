import css from './Filter.module.css'


const Filter = () => {
  return (
    <label>
      <input
        className={css.filter}
        name="filter"
        placeholder="Search..."
        type="search"
      />
    </label>
  );
};


export default Filter;

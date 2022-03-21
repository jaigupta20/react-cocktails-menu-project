import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const {
    setSearchTerm,
    // searchTerm
  } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favourite cocktail</label>
          <input
            // autoFocus
            type='text'
            id='name'
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

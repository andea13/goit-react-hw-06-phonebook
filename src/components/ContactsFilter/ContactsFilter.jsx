import { FilterLabel, FilterInput } from './ContactsFilter.styled';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/ContactsSlice';

export const ContactsFilter = () => {
  const value = useSelector(state => state.contacts.filter);
  console.log(value);

  const dispatch = useDispatch();

  const handleChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </FilterLabel>
  );
};

// ContactsFilter.propTypes = {
//   value: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };

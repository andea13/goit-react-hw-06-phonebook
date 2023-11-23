import { FilterLabel, FilterInput } from './ContactsFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsAndFilterValue, setFilter } from 'redux/ContactsSlice';

export const ContactsFilter = () => {
  const { value } = useSelector(getContactsAndFilterValue);

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

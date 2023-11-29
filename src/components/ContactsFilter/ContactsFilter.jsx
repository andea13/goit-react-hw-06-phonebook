import { FilterLabel, FilterInput } from './ContactsFilter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, setFilter } from '../../redux/ContactsSlice';

export const ContactsFilter = () => {
  const { filter } = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChange = value => {
    console.log(value);
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={`${filter}`}
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </FilterLabel>
  );
};

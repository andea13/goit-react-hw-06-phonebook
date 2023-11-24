import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactList } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContactsAndFilterValue } from 'redux/ContactsSlice';

export const ContactsList = () => {
  const { contacts, filter } = useSelector(getContactsAndFilterValue);

  return (
    <ContactList>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ name, number, id }) => (
          <ContactsListItem name={name} number={number} key={id} id={id} />
        ))}
    </ContactList>
  );
};

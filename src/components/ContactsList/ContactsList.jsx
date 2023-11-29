import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactList } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/ContactsSlice';
// import { useMemo } from 'react';

// import { useMemo } from 'react';

export const ContactsList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  console.log(contacts);
  console.log(filter);

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

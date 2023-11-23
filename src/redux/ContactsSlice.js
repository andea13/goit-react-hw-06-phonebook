import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

let contact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const localStorageContacts = localStorage.getItem('list');

const initialState = {
  list: localStorageContacts ? JSON.parse(localStorageContacts) : contact,
  filter: '',
};

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const duplicate = state.list.find(
        item => item.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (duplicate) {
        alert(`${contact.name} is already in contacts`);
        return;
      }
      state.list.push(action.payload);
    },

    setFilter: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload;
    },

    deleteContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['list'],
};

export const ContactsReducer = persistReducer(
  persistConfig,
  ContactsSlice.reducer
);

export const getContactsAndFilterValue = state => state.contacts;

export const { addContact, setFilter, deleteContact } = ContactsSlice.actions;

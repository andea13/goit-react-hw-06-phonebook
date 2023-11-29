import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
  filter: '',
};

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log(state);
      const duplicate = state.contacts.find(
        item => item.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (duplicate) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      }
      state.contacts.push(action.payload);
    },

    setFilter: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload;
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const ContactsReducer = persistReducer(
  persistConfig,
  ContactsSlice.reducer
);
export const getContacts = state => state;
export const getFilter = state => state;

export const { addContact, setFilter, deleteContact } = ContactsSlice.actions;

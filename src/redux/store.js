import { configureStore } from '@reduxjs/toolkit';

import { ContactsSliceReducer } from './ContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsSliceReducer,
  },
});

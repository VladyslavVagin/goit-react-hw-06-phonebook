import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
             ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteUser(state, action) {
     return state = state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
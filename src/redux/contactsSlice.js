import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 1, name: 'Vladyslav', number: '676677676' },
];

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
      const contact = state.filter(user => user.id === action.payload);
      state.splice(contact, 1);
    },
  },
});

export const { addUser, deleteUser } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

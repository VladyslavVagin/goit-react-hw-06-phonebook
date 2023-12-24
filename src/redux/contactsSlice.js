import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { name: 'Vladyslav', number: '676677676', id: 1 },
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

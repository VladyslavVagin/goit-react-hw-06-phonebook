import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter', 
    initialState: {data: ''},
    reducers: {
        filterContacts: (state, action) => {state.data = action.payload}
    },
})

export const { filterContacts } = filterSlice.actions;
export default filterSlice.reducer;
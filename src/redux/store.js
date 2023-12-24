import { configureStore } from '@reduxjs/toolkit'
import { filterContacts } from './filterSlice'

export const store = configureStore({
    reducer: {
        filter: filterContacts,
    },
  })
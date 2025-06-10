import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectNameFilter } from "../filters/slice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
     .addCase(fetchContacts.pending, state => {
       state.loading = true;
       state.error = null;
     })
     .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
     })
     .addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
     })
     .addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
     })
     .addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
     });
  },
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const lowercasedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercasedFilter) ||
      contact.number.includes(lowercasedFilter)
    );
  }
);

export default contactsSlice.reducer;
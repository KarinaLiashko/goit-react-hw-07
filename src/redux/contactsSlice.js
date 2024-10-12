import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  loading: false,
  error: null,
};
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get(
    "https://670a28e5af1a3998baa3379a.mockapi.io/contacts"
  );
  return response.data;
});
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async contact => {
    const response = await axios.post(
      "https://670a28e5af1a3998baa3379a.mockapi.io/contacts",
      contact
    );
    return response.data;
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async contactId => {
    await axios.delete(
      `https://670a28e5af1a3998baa3379a.mockapi.io/contacts/${contactId}`
    );
  }
);
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export const selectFilteredContacts = createSelector(
  state => state.contacts.items,
  state => state.filters.name,
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default contactsSlice.reducer;

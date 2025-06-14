import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", 
    async (_, thunkAPI) => {
     try {
          const { data } = await axios.get("/contacts");
           return data;
        }  catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact", 
    async (newContact, thunkAPI) => {
        try {
            const { data } = await axios.post("/contacts", newContact);
             return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
  }
);


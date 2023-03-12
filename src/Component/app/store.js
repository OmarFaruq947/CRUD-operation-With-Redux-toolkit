import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../routes/Fetures/Books/BooksSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;

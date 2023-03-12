import { v4 as uuidv4 } from "uuid";

const { createSlice } = require("@reduxjs/toolkit");

const initialBooks = {
  books: [
    { id: uuidv4(), title: "Love Bangladesh,", author: "Faruq" },
    { id: uuidv4(), title: "History of Bangladesh,", author: "omar" },
    { id: uuidv4(), title: "Bangladesh river", author: "omar faruq" },
    { id: uuidv4(), title: "politics of Bangladesh,", author: "Islam" },
    { id: uuidv4(), title: "media of Bangladesh", author: "Anisul" },
    { id: uuidv4(), title: "Insider of Bangladesh", author: "Anisul Islam" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },

    updateBooks: (state, action) => {
      const { id, title, author } = action.payload;
      const bookIsExist = state.books.filter((book) => book.id === id);
      if (bookIsExist) {
        bookIsExist[0].title = title;
        bookIsExist[0].author = author;
      }
    },

    deleteBooks: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBooks, deleteBooks, updateBooks } =
  booksSlice.actions;
export default booksSlice.reducer;

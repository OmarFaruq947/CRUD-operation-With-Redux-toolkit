import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBok from "./Fetures/Books/AddBok";
import BooksView from "./Fetures/Books/BooksView";
import EditBook from "./Fetures/Books/EditBook";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/add-book" element={<AddBok />} />
        <Route path="/edit-book" element={<EditBook />} />
        <Route path="/show-books" element={<BooksView />} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Index;

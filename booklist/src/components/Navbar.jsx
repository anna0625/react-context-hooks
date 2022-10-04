import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
      <p>
        This mini project is using React Hooks <br />
        including <strong>useContext, useReducer, useEffect, useState.</strong>
      </p>
    </div>
  );
};

export default Navbar;

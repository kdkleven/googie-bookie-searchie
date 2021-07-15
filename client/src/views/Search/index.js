import React from "react";
import Header from "../../components/Header"
import Title from "../../components/Title"
import BookSearch from "../../components/BookSearch"
import Results from "../../components/Results"

function Search() {
  return (
    <div className="App">
        <Title />
          <BookSearch />
          <Results />     
    </div>
  );
}


export default Search;

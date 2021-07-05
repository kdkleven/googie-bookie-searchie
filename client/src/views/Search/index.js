import React from "react";

function Search() {
  return (
    <div className="App">
      <div className="App-header">
        <p strong>Google Books</p>
        <p>Search</p>
        <p>Saved</p>
      </div>

      <div>
        <h1>Googie Bookie Searchie</h1>
        <h2>Search for and save books of interest</h2>
      </div>
      <div>
      <h3>Book Search</h3>
      <p>Book</p>
      <input placeholder="Harry Potter"></input>
      <button>Search</button>
      </div>
      <div>
          <h3>Results</h3>
          <div class="card">
            <h4>Title</h4><span><button>View</button><button>Save</button></span>
            <h5>Subtitle</h5>
            <h6>Written by author</h6>
            <img src=""/>Image
            <p>Description</p>
          </div>
          <div class="card">
            <h4>Title</h4><span><button>View</button><button>Save</button></span>
            <h5>Subtitle</h5>
            <h6>Written by author</h6>
            <img src=""/>
            <p>Description</p>
          </div>
      </div>
    </div>
  );
}


export default Search;

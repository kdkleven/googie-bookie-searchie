import React from "react";
import Header from "../../components/Header"
import Title from "../../components/Title"
import SavedBooks from '../../components/SavedBooks'


function Saved() {
  return (
    <div className="App">
        <Title />
          {/* <Header/> */}
            <SavedBooks />
    </div>
  );
}


export default Saved;

//import logo from './logo.svg';
import React from "react";
import './App.css';
import Dinner from './dinner.js';


function App() {
  return (<div className="App.js">
        {/* <Dinner></Dinner> */}
        <Dinner dishnsme = "chiken karahi" sweetdish = "kheer"/>

        <hr/>
        
        <Dinner dishnsme = "chiken karahi" sweetdish = "kheer"/>

        <hr/>
        
        <Dinner dishnsme = "chiken karahi" sweetdish = "kheer"/>

      </div>
  );
}

export default App;

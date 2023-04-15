import React from "react";

// Components and Pages
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles"

import { Route } from "react-router-dom";
import GameDetail from "./components/GameDetail";

function App() {
  
return( 
  <div className="App">
    <GlobalStyle/>
      {/* <Routes> */}
        

        <Route path={["/game/:id", "/"]}>
          <Home/>
        </Route>
        {/* <Route path="/" element={<Home/>}/> */}
      {/* </Routes> */}
  </div>
)
}

export default App;

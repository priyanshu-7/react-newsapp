import React from 'react';

import Store from "./store/store";
import {Provider} from "react-redux";

//import {Link} from "react-router-dom";
//routes
import Routes from "./routes";

function App() {
  return (
    <Provider store={Store}>
    <center>
      <div className="App">
        <nav>
            <h1>The React Daily</h1>
        </nav>


        <main>
          <Routes/>
        </main>

      </div>
      </center>
    </Provider>

  );
}

export default App;

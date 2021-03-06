import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import 'chartjs-adapter-luxon';
import { Auth0Provider } from "@auth0/auth0-react";

import Streaming from "./pages/Streaming";
import Main from "./pages/Main";
import Train from "./Components/Train";
import Navbar from "./Components/Navbar/Navbar";
import Recordings from "./pages/Recordings";
import NewRecording from "./pages/NewRecording";
function App() {
  const JSDOM = require("jsdom").JSDOM;

  Object.defineProperty(global.self, "crypto", {
    value: {
      getRandomValues: (arr) => crypto.randomBytes(arr.length),
    },
  });
  global.crypto.subtle = {}; // this gets around the 'auth0-spa-js must run on a secure origin' error
  return (
    <>
      <Auth0Provider
        domain="dev-vqaan0om.us.auth0.com"
        clientId="lnDxRsrwTBBr74wzXuN9HOavolmNlyRn"
        redirectUri={window.location.origin}
      >
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/streaming" element={<Streaming />} />
            <Route
              path="/train"
              element={<Train name="vssss" data="weeeee" />}
            />
            <Route
              exact
              path="/recordings/new"
              element={<NewRecording />}
            ></Route>
            <Route path="/recordings/" element={<Recordings />}></Route>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </Auth0Provider>
    </>
  );
}

export default App;

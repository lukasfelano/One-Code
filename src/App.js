import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from "./components/header";

import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import DetailProfile from "./pages/detail-profile";
import { useState } from "react";

function App() {
  let [openLogin, setOpenLogin] = useState(false);
  let [logged, setLogged] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
          <Header profile={logged} status={openLogin} open={setOpenLogin} logOut={setLogged} />
          <Routes>
            <Route path="/" element={<Login status={openLogin} open={setOpenLogin} changeLogged={setLogged} />}></Route>
            <Route path="/dashboard" element={<Dashboard logged={logged} /> }></Route>
            <Route path="/profile" element={<DetailProfile logged={logged} /> }></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

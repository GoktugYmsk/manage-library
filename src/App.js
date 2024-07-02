import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./content";
import Login from "./login";
import Header from "./header";
import Signin from "./signin";

function App() {
  return (
    <>
      <div className="App">
        <Helmet>
          <title>Library</title>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Content />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

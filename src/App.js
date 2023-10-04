import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Search from "./components/Search";
import SearchPage from "./pages/SearchPage";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/search" Component={SearchPage}></Route>

          <Route path="/search/all" Component={UnderConstruction}></Route>
          <Route path="/search/news" Component={UnderConstruction}></Route>
          <Route path="/search/images" Component={UnderConstruction}></Route>
          <Route path="/search/shopping" Component={UnderConstruction}></Route>
          <Route path="/search/maps" Component={UnderConstruction}></Route>
          <Route path="/search/more" Component={UnderConstruction}></Route>
          <Route path="/search/settings" Component={UnderConstruction}></Route>
          <Route path="/search/tools" Component={UnderConstruction}></Route>
          {/* <Route path="/about" com */}
          {/* <h1>Google clone</h1> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Detail from "./pages/Detail";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/posts"
          element={<Posts />}
        />

        <Route
          path="/posts/:id"
          element={<Detail />}
        />

      </Routes>
    </>
  );
}

export default App;
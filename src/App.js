import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Test } from "./pages";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:data" element={<Test />} />
        <Route path="/test/" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;

//실행할 때 npm run dev 하면 서버랑 클라이언트 둘 다 가동됨

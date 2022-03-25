import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [host, setHost] = useState("");
  useEffect(async () => {
    const res = await axios.get("/api");
    setHost(res.data.host);
  }, []);

  return (
    <div className="App">
      <h3>
        Welcome to <u>{host}</u> Blog
      </h3>
    </div>
  );
}

export default App;

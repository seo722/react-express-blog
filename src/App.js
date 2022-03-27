import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [host, setHost] = useState("");
  // useEffect(async () => {
  //   const res = await axios.get("/api/test");
  //   console.log(res.data);
  // }, []);

  return (
    <div className="App">
      <h3>
        Welcome to <u>{host}</u> Blog
      </h3>
    </div>
  );
}

export default App;

//실행할 때 npm run dev 하면 서버랑 클라이언트 둘 다 가동됨

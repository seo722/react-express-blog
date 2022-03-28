import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios("/add/data", {
      method: "POST",
      data: { data: name },
      headers: new Headers(),
    });
    if (res.data) {
      console.log("데이터 추가ㅇㅋ");
    }
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <h3>Welcome to Blog</h3>
      <form onSubmit={onSubmit}>
        <input type="text" maxLength={10} onChange={onChange} value={name} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default App;

//실행할 때 npm run dev 하면 서버랑 클라이언트 둘 다 가동됨

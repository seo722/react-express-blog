import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
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

  const getListData = async () => {
    const res = await axios.get("/get/data");
    if (res.data[0] === undefined) {
      return setList([...list, res.data]);
    }
    setList(res.data);
  };

  useEffect(getListData, []);

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

      <br />
      <br />
      <div style={{ height: "250px", overflow: "auto" }}>
        <h4 style={{ color: "#ababab" }}>Teachers List</h4>
        <div
          style={{
            border: "solid 1px black",
            width: "50%",
            marginLeft: "25%",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "32% 35% 30%",
              textAlign: "center",
            }}
          >
            <div> Number </div>
            <div> Name </div>
            <div> Other </div>
          </div>
        </div>
        {list.length !== 0
          ? list.map((el, key) => {
              return (
                <div
                  key={key}
                  style={{
                    display: "grid",
                    lineHeight: "40px",
                    gridTemplateColumns: "32% 35%",
                    width: "50%",
                    marginLeft: "25%",
                  }}
                >
                  <div> {el.id} </div>
                  <div> {el.name} </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;

//실행할 때 npm run dev 하면 서버랑 클라이언트 둘 다 가동됨

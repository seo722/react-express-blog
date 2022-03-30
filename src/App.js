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

  const onModifyClick = async (el) => {
    const modify = prompt(el.name + "을 어떤 이름으로 변경할까요?");
    if (modify !== null) {
      const body = {
        name: modify,
        id: el.id,
      };

      const res = await axios("/modify/data", {
        method: "POST",
        data: { modify: body },
        headers: new Headers(),
      });

      if (res.data) {
        alert("데이터를 수정했습니다.");
        return window.location.reload();
      }
    }
  };

  const onDeleteClick = async (el) => {
    const remove = window.confirm(el.name + "을 삭제하시겠습니까?");

    if (remove) {
      const body = { id: el.id };
      const res = await axios("/delete/data", {
        method: "post",
        data: { delete: body },
        headers: new Headers(),
      });
      if (res.data) {
        alert("데이터를 삭제했습니다");
        return window.location.reload();
      }
    }
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
                    gridTemplateColumns: "32% 35% 20% 0%",
                    width: "50%",
                    marginLeft: "25%",
                  }}
                >
                  <div> {el.id} </div>
                  <div> {el.name} </div>
                  <div
                    style={{ color: "#ababab" }}
                    onClick={() => onModifyClick(el)}
                  >
                    Modify
                  </div>
                  <div
                    style={{ color: "#ababab" }}
                    onClick={() => onDeleteClick(el)}
                  >
                    Delete
                  </div>
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

import "./App.css";

import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;

//실행할 때 npm run dev 하면 서버랑 클라이언트 둘 다 가동됨

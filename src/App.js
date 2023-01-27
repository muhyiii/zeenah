import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./PAGES/Home";
import Scrollbars from "react-custom-scrollbars-2";

function App() {
  return (
    <div className="App bg-slate-100 h-screen w-screen overflow-x-hidden">
      <Scrollbars autoHide style={{ height: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Scrollbars>
    </div>
  );
}

export default App;

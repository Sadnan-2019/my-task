import { Route, Routes,  } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="">
      <Header></Header>


      <Routes>

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Register/>}></Route>
      <Route path="/todo" element={<Todo/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

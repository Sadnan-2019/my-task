import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageTodo from "./components/ManageTodo/ManageTodo";
import Register from "./components/Register/Register";
import Todo from "./components/Todo/Todo";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import UpdateTodo from "./components/UpdateTodo/UpdateTodo";



function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/manage-todo" element={<ManageTodo />}></Route>
        <Route path="/update/:Id" element={<UpdateTodo />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
     </div>
  );
}

export default App;

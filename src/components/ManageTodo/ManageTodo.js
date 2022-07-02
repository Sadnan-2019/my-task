import React, { useEffect, useState } from 'react';
import {  useNavigate } from "react-router-dom";

const ManageTodo = () => {
     const navigate = useNavigate()
   

     const [todos, setTodo] = useState([]);
     useEffect(() => {
       fetch("http://localhost:5000/manage-todo")
         .then((res) => res.json())
         .then((data) => setTodo(data));
     }, []);
     return (
          <div>
      <div class="overflow-x-auto">
        <h3 className="text-2xl text-center font-bold mb-4">Manage Todo</h3>
        <table class="table w-full">
          <thead>
            <tr>
            {/* <label>
            <input type="checkbox" class="checkbox" />
          </label> */}
              <th>Serial No</th>
              <th>Todo Title</th>
              <th>Todo Description</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, i) => (
              <tr>
                 <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
                <th>{i + 1}</th>
                <td><div class="form-control">
   
</div></td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>

                <td>
                  <button className="bg bg danger" onClick={()=>navigate(`/update/${todo._id}`)}  >Edit
                    <i class="fa-solid   fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     );
};

export default ManageTodo;
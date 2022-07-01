import React, { useEffect, useState } from 'react';

const ManageTodo = () => {

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
              <th>Serial No</th>
              <th>Todo Title</th>
              <th>Todo Description</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{todo.title}</td>
                <td>{todo.description}</td>

                 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
     );
};

export default ManageTodo;
import React from 'react';
 import { toast } from "react-toastify";
//  import { useForm } from "react-hook-form";
 import { useForm } from "react-hook-form";

const Todo = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    e.target.reset();
    console.log(e.target)

    const url = `http://localhost:5000/todo`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Add done");
      });
  };
     

     return (
        <div>

<div class="hero min-h-screen bg-base-200">
          <div class="hero-content lg:grid-cols-12">
            <div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className=" font-bold text-2xl text-center mt-8">Add Task</h1>
              <div className="card-body  w-full">
                <form onSubmit={handleSubmit(onSubmit)} className=" mt-5   p-5 ">
                  <div className="form-control w-full max-w-xs mb-2  ">
                    <input
                    type="text"
                      {...register("title")}
                      className="input input-bordered w-full max-w-xs  "
                      placeholder="Task Title"
                      required
                    />
                  </div>
    
                  <div className="form-control w-full max-w-xs mb-2">
                    <input
                    type="text"
                      {...register("description")}
                      className="input input-bordered w-full max-w-xs"
                      placeholder="Description"
                      required
                    />
                  </div>
                 
    
                
                  
                   
                  <input className="btn btn-info" type="submit" value="Add" />
                </form>
              </div>
            </div>
          </div>
        </div>


        
        </div>
     );
};

export default Todo;
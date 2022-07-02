import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateTodo = () => {
     const { Id } = useParams();
     const [task, setTask]  = useState({});
     console.log(Id);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
//     console.log(e);
e.target.reset();
const url = `https://frozen-brushlands-83872.herokuapp.com/updatetask/${Id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("update  done")
     //    toast("Add done");
      });
  };

  useEffect(()=>{
          fetch(`https://frozen-brushlands-83872.herokuapp.com/task/${Id}`)
          .then(res => res.json())
          .then(data => setTask(data))

  },[Id])



 
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content lg:grid-cols-12">
        <div className="card   flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className=" font-bold text-2xl text-center mt-8">Update Task</h1>
          <div className="card-body  w-full">
            <form onSubmit={handleSubmit(onSubmit)} className=" mt-5   p-5 ">
              <div className="form-control w-full max-w-xs mb-2  ">
                <input
                  type="text"
                  {...register("title")}
                  className="input input-bordered w-full max-w-xs  "
                  placeholder="Task Title"
                  required
                 defaultValue={task?.title}
                />
              </div>

              <div className="form-control w-full max-w-xs mb-2">
                <input
                  type="text"
                  {...register("description")}
                  className="input input-bordered w-full max-w-xs"
                  placeholder="Description"
                  required
                  defaultValue={task?.description}
                />
              </div>

              <input className="btn btn-info" type="submit" value="Update" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;

import React from 'react';
import {
     useSignInWithGoogle,
     useCreateUserWithEmailAndPassword,
     useUpdateProfile,
   } from "react-firebase-hooks/auth";
   import { useForm } from "react-hook-form";
   import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.int';


const Register = () => {

     const [createUserWithEmailAndPassword, user, loading, error] =
     useCreateUserWithEmailAndPassword(auth);
  
 
   const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
 
  
   const navigate =useNavigate()
 
   const {
     register,
     formState: { errors },
     handleSubmit,
   } = useForm();
   let signInrror;
   if (user) {
     console.log(user);
     navigate("/todo")
 
   }

   const onSubmit = async (data) => {
     console.log(data);
 
     await createUserWithEmailAndPassword(data.email, data.password);
     await updateProfile({ displayName: data.name });
     console.log("update done");
   };
     return (
<div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">SignUp</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please file the name field",
                  },
                })}
                type="text"
                placeholder="your name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please file the Email field",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide correct email ",
                  },
                })}
                type="email"
                placeholder="your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Paasword</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please file the password field",
                  },
                  minLength: {
                    value: 6,
                    message: "Please provide six more digit  ",
                  },
                })}
                type="password"
                placeholder="your password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInrror}

            <input
              type="submit"
              className="btn w-full max-w-xs  btn-secondary"
              value="SignUp"
            />
          </form>
          <p>
            <small className="text-primary">
              Already Account?{" "}
              <Link className="btn btn-link text-primary" to="/login">
                Login
              </Link>
            </small>
          </p>

           
        </div>
      </div>
    </div>
     );
};

export default Register;
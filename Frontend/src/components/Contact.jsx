import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div id="1" className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl">Contact Us</h3>
              {/*Name*/}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("text", { required: true })}
                />
                <br />
                {errors.text && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/*Email*/}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/*Message*/}

              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea placeholder="Enter your Message" className="w-80 px-3 py-1
                  border rounded-md outline-none"
                  {...register("message", { required: true })}>
                  
                </textarea>
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/*Buttom*/}
              <div className="flex justify mt-4">
                <button className="bg-pink-500 px-3 py-1 rounded-md text-white hover:bg-pink-700 duration-200">
                  Submit
                </button>
                
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

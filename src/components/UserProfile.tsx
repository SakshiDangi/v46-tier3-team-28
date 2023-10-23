"use client";

import React, { useState, useEffect, useContext } from "react";
import { users, items } from "@/db/schema";

const UserProfile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  // useEffect(() => {
    // if (users) {
      // setName(users.name);
      // setEmail(email.email);
    // }

    // if (error) {
      // toast.error(error);
      // clearErrors();
    // }
  // }, [users]);

  const submitHandler = () => {
    // e.preventDefault();

    // const formData = new FormData();
    // formData.set("name", name);
    // formData.set("email", email);
    // formData.set("image", avatar);

    // updateProfile(formData);
  };

  const onChange = () => {
  
  };

  return (
    <>
      <div
        style={{ maxWidth: "480px" }}
        className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white"
      >
        <form onSubmit={submitHandler}>
          <h2 className="mb-5 text-2xl font-semibold">Update Profile</h2>

          <div className="mb-4">
            <label className="block mb-1"> Full Name </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="Enter your name here.."
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Email </label>
            <input
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="text"
              placeholder="Enter your email here.."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Profile Image </label>
            <div className="mb-4 flex flex-col md:flex-row">
              <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer md:w-1/5 lg:w-1/4">
                <img className="w-14 h-14 rounded-full" src="https://github.com/shadcn.png" alt="@shadcn"
 />
              </div>
              <div className="md:w-2/3 lg:w-80">
                <input
                  className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-6"
                  type="file"
                  id="formFile"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700"
          >Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UserProfile;
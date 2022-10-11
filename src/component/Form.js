import React, { useRef } from "react";

const Form = () => {
  const titleRef = useRef();
  const messageRef = useRef();
  const addPostHandler = (event) => {
    event.preventDefault();
    const enteredtitle = titleRef.current.value;
    const enteredmessage = messageRef.current.value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: enteredtitle,
        body: enteredmessage,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    titleRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className=" py-12 lg:m-24 lg:mx-48 bg-slate-200  mt-7 text-gray-600 body-font relative">
      <h1 className="flex justify-center items-center text-4xl">Add Post</h1>
      <form
        onSubmit={addPostHandler}
        className="flex flex-col justify-center items-center gap-6 p-4 "
      >
        <div>
          <label
            htmlFor="username"
            className="leading-7 text-sm text-gray-600 mr-3 "
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            ref={titleRef}
            className="-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div>
          <label htmlFor="age" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            ref={messageRef}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="flex mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default Form;

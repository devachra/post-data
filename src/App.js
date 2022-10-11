import { useState } from "react";

import "./App.css";
import Form from "./component/Form";

import Post from "./component/Post";

function App() {
  const [form, setForm] = useState(false);
  const postHandler = () => {
    setForm((prev) => !prev);
  };
  return (
    <div>
      <button
        className="flex mx-auto mt-4  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg "
        onClick={postHandler}
      >
        Post Data
      </button>
      {form && <Form />}
      <Post />
    </div>
  );
}

export default App;

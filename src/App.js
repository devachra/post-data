import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Form from "./component/Form";

import Post from "./component/Post";
import { formActions } from "./store/form-slice";

function App() {
  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.form.form);

  const postHandler = () => {
    dispatch(formActions.toggle());
  };

  return (
    <div>
      <button
        className="flex mx-auto mt-4  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg "
        onClick={postHandler}
      >
        Post Data
      </button>
      {showForm && <Form />}
      <Post />
    </div>
  );
}

export default App;

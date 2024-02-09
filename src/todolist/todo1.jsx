import React, { useReducer, useState } from "react";
const state = {
  users: [],
  count: 0,
};
const reducer = (data, action) => {
  switch (action.type) {
    case "ADD":
      return { ...data, users: [...data.users, action.payload] };
    case "DELETE":
      const newData = data.users.filter((user) => user.id !== action.payload);
      return { ...data, users: [...newData] };
    case "EDIT":
      const newArr = data.users.map((user) =>
        user.id == action.payload.id ? { ...action.payload } : user
      );
      return {...data, users: [...newArr]}
  }
};
function Todo1() {
  const [data, dispatch] = useReducer(reducer, state);
  const [input, setInput] = useState("");
  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: { name: input, id: Date.now() } });
    setInput("")
  };

  const Delete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  
  const Edit = (id) => {
    let newEdit = prompt("edit your name" );
    dispatch({ type: "EDIT", payload: { name: newEdit, id } });
  };

  return (
    <div>
      <form
        className="d-flex gap-3 justify-content-center mt-5"
        onSubmit={submit}
      >
        <input
          className="form-control w-50 "
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add item..."
        />
        <button className="btn btn-success">Add</button>
      </form>
      {data.users?.map((datas) => (
        <div
          key={datas.id}
          className="border  rounded-2 p-2 d-flex align-items-center gap-3  w-25 m-auto mt-5"
        >
          <h1>{datas.name}</h1>
          <div className="d-flex gap-2">
            <button className="btn btn-warning" onClick={() => Edit(datas.id)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => Delete(datas.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo1;

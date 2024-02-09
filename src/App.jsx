import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo1 from "./todolist/todo1";
// const state = {
//   users: [],
//   count: 0,
// };
// const reducer = (data, action) => {
//  switch(action.type) {
//   case "INCREMENT":
//     return {...data, count: data.count + 1}
//     case "DECREMENT":
//       return {...data, count: data.count - 1}
//     }
// };
function App() {
  // const [data, dispatch] = useReducer(reducer, state);
  // console.log(data, dispatch);
  return (
    <>
      {/* {data.count} */}
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>click</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>click</button> */}
      <Todo1 />
    </>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLogin from "./user/UserLogin";
import TodoList from "./todo/TodoList";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />}></Route>
        <Route path="/todo/list" element={<TodoList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

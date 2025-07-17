import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// react router dom 이용한 화면구성
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import Library from "./component/Library"
// const root = ReactDOM.createRoot(document.getElementById('root')); //Virtual Dom으로 전환한다
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// import CountPage from "./state/CountPage";
// const root = ReactDOM.createRoot(document.getElementById('root')); //Virtual Dom으로 전환한다
// root.render(
//   <React.StrictMode>
//     <CountPage />
//   </React.StrictMode>
// );

// import UserLogin from "./user/UserLogin";
// const root = ReactDOM.createRoot(document.getElementById('root')); //Virtual Dom으로 전환한다
// root.render(
//   <React.StrictMode>
//     <UserLogin />
//   </React.StrictMode>
// );

// app이 jsx로 만들어진 하나의 컴포넌트
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

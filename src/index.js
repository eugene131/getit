import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter_05/CommentList';
import Clock from './chapter_04/Clock';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
const root = ReactDOM.createRoot(document.getElementById('root'));

//7ch
root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
)

/*5챕터
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);*/

/*4 챕터
setInterval(() => {
  root.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>,
  );
}, 1000);*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

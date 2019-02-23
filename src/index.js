import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import style from './style.css'

ReactDOM.render(<ToDoList />, document.getElementById('root'));//此处是将index.js文件渲染到index.html上去

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

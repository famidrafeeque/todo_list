import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos,setToDos] =useState([]);
  const [toDo,setToDo] = useState('');
  const [deletedToDos,setDeletedToDos] = useState([]);
  return (
    <div className="app">
      <div>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos,{id:Date.now(), text:toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      {
        toDos.map((obj)=>{
          return(

            <div className="todos">
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setToDos(toDos.filter((obj2)=>{
                if(obj2.id === obj.id)
                {
                  obj2.status=e.target.checked
                }
                return obj2;
              }))
            }} value={obj.status}  type="checkbox" name="" id="" />
            <p>{obj.text} </p>
          </div>
          <div className="right">
            <i onClick={()=>{
              setDeletedToDos([...deletedToDos,{id:Date.now(),text:obj.text}]);
              setToDos(toDos.filter(item=>item.id !== obj.id ));
              console.log(deletedToDos)
              console.log(toDos);
              }}  className="fas fa-times"></i>
          </div>
          </div>
        </div>
            )
        }) 
      }
      </div>
      <div>
      <div className="left">
        <h2>Active list</h2>
      {
        toDos.map((obj)=>{
          if(obj.status){
            return(
            <h1>{obj.text}</h1>)
          }
          return null;
        })
      }
      </div>
      <div className="right">
        <h2>InActive List</h2>
      {               
        toDos.map((obj)=>{
          if(obj.status===false){
            return(
            <h1>{obj.text}</h1>)
          }
          return null;
        })
      }
      </div>
      </div>
    </div>
  );
}

export default App;
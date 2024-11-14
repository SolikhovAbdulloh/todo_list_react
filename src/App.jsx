import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);

  const plus = () => {
    setCount((counter += 1));
  };
  const minus = () => {
    if (counter > 0) {
      setCount((counter -= 1));
    }
  };

  const DeleteStudent = (id) =>{
      const fucEvent = student.filter((event)=>{
        return event.id !== id
      })
      
     setCount1(fucEvent) 
  }



  var [student,setCount1] = useState([
    { id: 1, name: "Abdulloh" },
    { id: 2, name: "Xayrulloh" },
    { id: 3, name: "Sayfulloh" },
    { id: 4, name: "Habibulloh" },
    { id: 5, name: "Asadulloh" },
  ]);

  return (
    <div className="add">
      <button onClick={plus}>+</button>
      <div className="qqq">{counter}</div>
      <button onClick={minus}>-</button>  
      {student.map((event)=>{
        return (
          <div className="keyss" key={event.id}>
            {event.name}
            {event.id}
            <button onClick={() => DeleteStudent(event.id)}>Delete</button>
          </div>
        );
      })}
    </div>

  );
}

export default App;

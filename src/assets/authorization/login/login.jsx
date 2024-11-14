import style from "./style.module.css";
import { useState } from "react";

const DeleteFunc = (name, ism, IsmSet) => {
  const updatedList = ism.filter((e) => e !== name);  
  IsmSet(updatedList); 
};

function FocusInput() {
  const [name, SetName] = useState("");
  const [ism, IsmSet] = useState([]);

  const AddUser = (name) => {
    if (name) {
      IsmSet((ismlar) => [...ismlar, name]); 
      SetName("");
    }
  };

  return (
    <div className={style.contiener}>
      <div className={style.todo}>
        <div className={style.todo_list}>
          <input
            value={name}
            type="text"
            onChange={(e) => SetName(e.target.value)} 
          />
          <button onClick={() => AddUser(name)}>Add</button>
        </div>
        {ism.map((item, index) => (
          <div key={index} className={style.users}>
            <div className={style.user}>
              <p>{item}</p>  
              <button
                className={style.btn}
                onClick={() => DeleteFunc(item, ism, IsmSet)}  
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FocusInput;


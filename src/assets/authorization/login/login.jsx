import style from "./style.module.css";
import { useState } from "react";
import { IconBase } from "react-icons";
import { MdDelete } from "react-icons/md";
import { useRef } from "react";

let User = JSON.parse(localStorage.getItem("User")) || [];


const DeleteFunc = (name, ism, setIsm) => {
  const ismlar = ism.filter((e) => e !== name);
  localStorage.setItem("User", JSON.stringify(ism));
  
  setIsm(ismlar);
};

function FocusInput() {
  let [ism, setIsm] = useState([]);
  let [name, setName] = useState("");
  let [editIndex,SetEdit] = useState(null)

  const AddUser = (name) => {
    if (name) {
      setIsm((ismlar) => [...ismlar, name]);
      localStorage.setItem("User", JSON.stringify(ism));
      setName("");
    }
  };

  const SaveFuc = (index)=>{
    
   SetEdit(null)
    
  }

  return (
    <div className={style.contiener}>
      <div className={style.todo}>
        <div className={style.todo_list}>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => AddUser(name)}>Add</button>
        </div>
        {ism.map((item, index) => (
          <div key={index} className={style.users}>
            <div className={style.user}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const updatedIsm = [...ism];
                    updatedIsm[index] = e.target.value;
                    setIsm(updatedIsm);
                  }}
                />
              ) : (
                <p>{item}</p>
              )}
              <div className={style.btns}>
                <button
                  onClick={() => SetEdit(index)}
                  className={style.editttt}
                >
                  edit
                </button>
                <button className={style.save} onClick={()=>SaveFuc(index)}>save</button>
                <button
                  className={style.btn}
                  onClick={() => DeleteFunc(item, ism, setIsm)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FocusInput;

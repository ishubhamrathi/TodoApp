import React, {useState} from "react";
import Lists from "./Lists";

const Todo = () =>{

    const [inputList, setInputLists] = useState("");
    const [items, setItems] = useState([]);
  
    const itemEvent = (event) =>{
      setInputLists(event.target.value);
    };
  
    const listOfItems = () =>{
      setItems((prev)=>{
        return [...prev, inputList];
      })
      setInputLists("");
    };
  

    const deleteItem = (id) =>{
      setItems((prev)=>{
        return prev.filter((arrayElement, index)=>{
          return index !== id;
        })
      })
    }
    
  
    return (
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>Todo List</h1>
          <br/>
          <input type="text" placeholder="Add Items" onChange={itemEvent} value={inputList}/>
          <button className="submit_button" onClick={listOfItems}>+</button>
          <ul>
            {
              items.map((itemval, index)=>{
                return <Lists
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}/>
              })
            }
          </ul>
        </div>
      </div>
    );

}

export default Todo;
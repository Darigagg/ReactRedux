import axios from "axios";
import React from "react";
import { BiPencil } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Todo({ title, isDone, id }) {
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    if (isDone) {
      setDone(true);
    }
  }, []);

  const deleteTodo = () => {
    axios.delete(`http://localhost:9999/todos/${id}`)
  
.then((response) => {
    console.log("Успешно удалено",response)
})

.catch((error) => {
    console.log("ОШИБКА", error);
  });


};

  return (
    <div className="border-4">
      <p className={done ? "red" : ""}>{title}</p>
      <div className="div-10">
        <input type="checkbox" onClick={() => setDone(!done)} />
        <BiPencil />
        <RiDeleteBin5Line onClick={deleteTodo} />
      </div>
    </div>
  );
}

// onClick={(event) => console.log(event.target.value)}
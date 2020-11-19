import React from "react";
import { Alert } from "./Alert";
import { List } from "./List";
import { newItemType } from "./Types/type";
interface alerType {
  show: boolean;
  msg: string;
  type: string;
}

function App() {
  const [name, setName] = React.useState<string>("");
  const [list, setList] = React.useState<newItemType[]>([]);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [editid, setEditID] = React.useState<null>(null);
  const [Aalert, setAlert] = React.useState<alerType>({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
    } else if (name && isEditing) {
    } else {
      const newItem: newItemType = {
        id: Number(new Date().getTime().toString()),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };
  console.log(list, "LOP.....");

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {Aalert.show && <Alert />}
        <h3>gocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g Eggs"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List itemlist={list} />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default App;

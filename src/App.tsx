import React from "react";
import { Alert } from "./Alert";
import { List } from "./List";
import { newItemType, alerType } from "./Types/type";

function App() {
  const [name, setName] = React.useState<string>("");
  const [list, setList] = React.useState<newItemType[]>([]);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [editid, setEditID] = React.useState(null);
  const [Aalert, setAlert] = React.useState<alerType>({
    show: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "plz enter value");
    } else if (name && isEditing) {
      setList(onEditList);
      setName("");
      setIsEditing(false);
      setEditID(null);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem: newItemType = {
        id: Number(new Date().getTime().toString()),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
    }
  };
  const onEditList: newItemType[] = list.map((item: any) => {
    if (item.id === editid) {
      return { ...item, title: name };
    }
    return item;
  });
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id: number) => {
    showAlert(true, "danger", "empty list");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id: any) => {
    const spacificItem: any = list.find((item: newItemType) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(spacificItem.title);
  };
  const showAlert = (show = false, type = "", msg = "") => {
    return setAlert({
      show,
      type,
      msg,
    });
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {Aalert.show && (
          <Alert {...Aalert} removeAlert={showAlert} list={list} />
        )}
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
      {list.length > 0 && (
        <div className="grocery-container">
          <List itemlist={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

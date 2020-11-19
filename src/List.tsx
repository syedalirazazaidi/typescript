import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { newItemType } from "./Types/type";
interface PropsList {
  itemlist: newItemType[];
  removeItem: (id: number) => void;
  editItem: (id: number) => void;
}

export const List = ({ itemlist, removeItem, editItem }: PropsList) => {
  return (
    <div className="grocery-list">
      {itemlist.map((item: newItemType) => {
        const { id, title } = item;
        return (
          <article
            key={id}
            className="grocery-item
          "
          >
            <div className="title">{title}</div>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit onClick={() => editItem(id)} />
              </button>
              <button type="button" className="delete-btn">
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

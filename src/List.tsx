import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { newItemType } from "./Types/type";
interface PropsList {
  itemlist: newItemType[];
}

export const List = ({ itemlist }: PropsList) => {
  return (
    <div className="grocery-list">
      {itemlist.map((item: newItemType) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-itemlist">
            <div className="title">{title}</div>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit />
              </button>
              <button type="button" className="delete-btn">
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

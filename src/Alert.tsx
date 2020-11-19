import React from "react";
import { newItemType } from "./Types/type";
interface alerType {
  show: boolean;
  msg: string;
  type: string;
  removeAlert: () => void;
  list: newItemType[];
}

export const Alert = ({ show, msg, type, removeAlert, list }: alerType) => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}:null`}>{msg}</p>;
};

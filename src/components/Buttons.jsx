import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";

const Buttons = () => {
   
  const [btnText, setBtnText] = useState('Add Note');
   const  [btnStatus, SetBtnStatus] = useState('');
   const [btnClass, SetButtonClass] = useState('bg-green-600');

   const openForm = () => {
    if(btnStatus == "") {
      SetBtnStatus(<TodoForm />)
      setBtnText("Close")
      SetButtonClass("bg-red-600")
    } else {
      SetBtnStatus("")
      setBtnText("Add Note")
      SetButtonClass("bg-green-600")
    }
   }

  return (
    <div className="mb-12">
      <div className="flex">
        <button
        onClick={openForm}
        className={`${btnClass} mr-3 w-32 text-[16px] drop-shadow-md text-white font-medium p-3`}>
          {btnText}
        </button>
      </div>

      <div>{btnStatus}</div>
    </div>
  );
};

export default Buttons;

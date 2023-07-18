import React from "react";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import Data from "../CardData";
// import TodoForm from "../components/TodoForm";
// import { useState } from "react";

const CardContainer = () => {
const addItem = () => {
 
}


  return (
    <div className="p-8">
      <Buttons />
      <div className="flex flex-wrap">
        {Data.map((data) => (
          <Card 
          key={data.id} 
          heading={data.heading} 
          para={data.Para} 
          />
        ))}
      </div>
      <button onClick={addItem}>Testing</button>
    </div>
  );
};

export default CardContainer;

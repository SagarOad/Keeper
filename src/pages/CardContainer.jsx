import React, { useContext } from "react";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import { CardDataContext } from "../CardData";
import TodoForm from "../components/TodoForm";

const CardContainer = () => {
  const { cardData } = useContext(CardDataContext);

  return (
    <div className="p-8">
      <Buttons />
      <TodoForm />
      <div className="flex flex-wrap">
        {cardData.map((data) => (
          <Card 
            key={data.id} 
            heading={data.heading}
            para={data.Para} 
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
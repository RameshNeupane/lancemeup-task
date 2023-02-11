import React from "react";
import { Droppable } from "react-beautiful-dnd";

import ColumnItem from "./ColumnItem";
import { ColumnItemsListProps } from "@/types/column";

const ColumnItemsList: React.FC<ColumnItemsListProps> = ({ items, colId }) => {
  return (
    <Droppable droppableId={colId} key={colId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className=" flex flex-col items-center gap-6 p-4"
        >
          {items.map((item, index) => (
            <ColumnItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ColumnItemsList;

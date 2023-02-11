import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { ColumnItemProps } from "@/types/column";

const ColumnItem: React.FC<ColumnItemProps> = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index} key={item.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className=" w-60 text-center py-6 border-2 border-fuchsia-300 rounded font-medium"
        >
          {item.title}
        </div>
      )}
    </Draggable>
  );
};

export default ColumnItem;

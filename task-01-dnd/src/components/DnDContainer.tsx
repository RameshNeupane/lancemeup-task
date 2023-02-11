import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import Column from "./Column";
import { columns, columnsOrder } from "@/utils/dummy-data";

const DnDContainer = () => {
  const [columnsData, setColumnsData] = useState(columns);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // if dropped outside the droppable, then destination is null
    if (!destination) {
      return;
    }

    // if the draggable is dropped in its own position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    /*
    ------------REORDER COLUMN------------
    */
    const copyOfColumnsData = [...columnsData];

    // remove dragged item from the source column
    const draggedItem = copyOfColumnsData[
      columnsOrder.indexOf(source.droppableId)
    ].children.splice(source.index, 1);

    // add dragged item into the destination column
    copyOfColumnsData[
      columnsOrder.indexOf(destination.droppableId)
    ].children.splice(destination.index, 0, draggedItem[0]);

    // set new data state
    setColumnsData(copyOfColumnsData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} key="drop-context">
      <div className=" w-full h-max flex justify-center gap-8">
        {columnsData.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default DnDContainer;

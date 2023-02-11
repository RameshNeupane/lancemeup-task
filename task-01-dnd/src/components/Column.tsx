import React from "react";

import { ColumnProps } from "@/types/column";
import ColumnItemsList from "./ColumnItemsList";

const Column: React.FC<ColumnProps> = ({ column }) => {
  return (
    <div className=" w-72 h-max border-2 border-purple-300 rounded">
      <h1 className=" text-lg font-medium text-center py-2 border-b-2 border-b-purple-300 bg-slate-200">
        {column.title}
      </h1>
      <ColumnItemsList items={column.children} colId={column.id} />
    </div>
  );
};
export default Column;

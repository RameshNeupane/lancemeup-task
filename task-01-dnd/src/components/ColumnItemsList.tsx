import React from "react";

import ColumnItem from "./ColumnItem";
import { ColumnItemsListProps } from "@/types/column";

const ColumnItemsList: React.FC<ColumnItemsListProps> = ({ items }) => {
  return (
    <div className=" flex flex-col items-center gap-6 p-4">
      {items.map((item, index) => (
        <ColumnItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ColumnItemsList;

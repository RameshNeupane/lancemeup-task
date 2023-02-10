import React from "react";
import { ColumnItemProps } from "@/types/column";

const ColumnItem: React.FC<ColumnItemProps> = ({ item }) => {
  return (
    <div className=" w-60 text-center py-6 border-2 border-fuchsia-300 rounded font-medium">
      {item}
    </div>
  );
};

export default ColumnItem;

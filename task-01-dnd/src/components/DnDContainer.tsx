import Column from "./Column";
import { columns } from "@/utils/dummy-data";

const DnDContainer = () => {
  return (
    <div className=" w-full h-max flex justify-center gap-8">
      {columns.map(
        (column) =>
          column?.children?.length > 0 && (
            <Column key={column.id} column={column} />
          )
      )}
    </div>
  );
};

export default DnDContainer;

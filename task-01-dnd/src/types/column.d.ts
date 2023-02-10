type columnData = {
  id: string;
  title: string;
  children: string[];
};

export type ColumnProps = {
  column: columnData;
};

export type ColumnItemsListProps = {
  items: string[];
};

export type ColumnItemProps = {
  item: string;
};

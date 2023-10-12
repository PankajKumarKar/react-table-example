import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { data } from "../Data";

const Table = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } },
        Cell: ({ renderedCellValue }) => (
          <strong className="text-green-600">{renderedCellValue}</strong>
        ),
      },
      {
        accessorFn: (row) => row.age,
        id: "age",
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>,
        Cell: ({ renderedCellValue }) => (
          <span className="text-red-600">{renderedCellValue}</span>
        ),
      },
      {
        accessorFn: (row) => row.city,
        id: "city",
        header: "City",
        Header: <i style={{ color: "goldenrod" }}>City</i>,
        Cell: ({ renderedCellValue }) => (
          <span className="text-yellow-600">{renderedCellValue}</span>
        ),
      },
    ],
    []
  );

  return (
    <div className="container mx-auto p-4">
      <MaterialReactTable
        className="border border-gray-300 shadow-lg" // Apply border and shadow
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default Table;

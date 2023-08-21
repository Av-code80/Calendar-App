import React from "react";

const TableHeader: React.FC = () => {
  const months = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <thead>
      <tr>
        {months.map((month) => (
          <th key={month}>{month}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

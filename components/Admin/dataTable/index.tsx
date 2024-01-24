import { ReactNode } from "react";

export type DataTableProps<T> = {
  titles: ReactNode[];
  data: T[];
  idExtractor: (row: T) => string;
  rowGenerator: (row: T, index: number) => ReactNode[];
};

export default function DataTable<T>({
  titles,
  rowGenerator,
  idExtractor,
  data,
}: DataTableProps<T>) {
  return (
    <div className=" mt-3 rounded-2xl border bg-white">
      <table className="w-full text-left text-sm">
        <thead className="uppercase text-gray-700">
          <tr>
            {titles.map((title, index) => (
              <th key={index} className="p-3">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={idExtractor(row)}
              className={rowIndex < data.length - 1 ? "border-b" : ""}
            >
              {rowGenerator(row, rowIndex).map((data, index) => (
                <td key={index} className="p-3">
                  {data}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

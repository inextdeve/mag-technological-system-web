"use client";
import { ReactNode, useState } from "react";
import { data } from "./data";
import { Button, Chip, TableCellProps } from "@nextui-org/react";
import { ArrowDown, ChevronRight } from "lucide-react";
import CustomSlider from "./slider";
import { cn } from "@/helpers/utils";

const TableHead = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <thead className={`bg-gray-100 [&>tr]:first:rounded-lg ${className}`}>
      {children}
    </thead>
  );
};

const TableRow = (props: any) => {
  return (
    <tr
      {...props}
      className={`group outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 ${props.className}`}
    >
      {props.children}
    </tr>
  );
};

const TableColumn = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <th
      className={`group px-3 h-10 text-left rtl:text-right align-middle whitespace-nowrap text-foreground-500 text-tiny font-semibold first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] data-[sortable=true]:transition-colors data-[sortable=true]:cursor-pointer data-[hover=true]:text-foreground-400 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 bg-gray-100 ${className}`}
    >
      {children}
    </th>
  );
};

const TableData = (props: TableCellProps) => {
  return (
    <td
      {...props}
      className={`py-2 px-3 relative align-middle whitespace-normal text-small font-normal [&>*]:z-1 [&>*]:relative outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 before:content-[''] before:absolute before:z-0 before:inset-0 before:opacity-0 data-[selected=true]:before:opacity-100 group-data-[disabled=true]:text-foreground-300 group-data-[disabled=true]:cursor-not-allowed before:bg-default/40 data-[selected=true]:text-default-foreground first:before:rounded-l-lg rtl:first:before:rounded-r-lg rtl:first:before:rounded-l-[unset] last:before:rounded-r-lg rtl:last:before:rounded-l-lg rtl:last:before:rounded-r-[unset] ${props.className}`}
    >
      {props.children}
    </td>
  );
};

export default function CollapsibleTable() {
  const [expandedRows, setExpandedRows] = useState([]);

  // expand table row
  const handleExpandRow = (index: number) => {
    const isRowExpanded = expandedRows.includes(index as never);

    if (isRowExpanded) {
      setExpandedRows((prev) => prev.filter((v) => v != index));
    } else {
      setExpandedRows((prev) => prev.concat(index as never));
    }
  };
  return (
    <div className="md:overflow-auto overflow-x-scroll">
      <table className="min-w-full h-auto table-auto w-full">
        <TableHead>
          <TableRow>
            <TableColumn>
              <ArrowDown className="w-4 h-4" />
            </TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>From</TableColumn>
            <TableColumn>To</TableColumn>
            <TableColumn>Total Price</TableColumn>
            <TableColumn>Total Fines</TableColumn>
            <TableColumn>Total Remaining</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Details</TableColumn>
          </TableRow>
        </TableHead>
        {data.map((item, index) => (
          <tbody key={index}>
            <TableRow
              key={index}
              onClick={() => handleExpandRow(index)}
              className={cn("hover:cursor-pointer")}
            >
              <TableData>
                <ChevronRight
                  className={cn("w-4 h-4 transition-transform", {
                    "rotate-90": expandedRows.includes(index as never),
                  })}
                />
              </TableData>
              <TableData>{item.name}</TableData>
              <TableData>{item.from}</TableData>
              <TableData>{item.to}</TableData>
              <TableData className="text-[#F29701]">
                {item.totalPrice}
              </TableData>
              <TableData className="text-[#D0004B]">
                {item.totalFines}
              </TableData>
              <TableData className="text-[#0AB9BF]">
                {item.totalRemaining}
              </TableData>
              <TableData>
                <Chip
                  color={`${
                    item.status === "completed" ? "success" : "danger"
                  }`}
                  size="md"
                  className={cn(
                    "text-yellow-m bg-x-light-yellow-m min-w-[60%] text-center",
                    {
                      "text-green-m bg-x-light-green-m":
                        item.status.toLowerCase() === "completed",
                    }
                  )}
                >
                  {item.status}
                </Chip>
              </TableData>
              <TableData>
                <Button
                  size="sm"
                  className="bg-[#0AB9BF55] border-white border-2"
                >
                  Details
                </Button>
              </TableData>
            </TableRow>
            {expandedRows.includes(index as never) ? (
              <TableRow className="opacity-0 translate-y-[-10px] animate-fadein">
                <TableData colSpan={9} className="collaps-viewer">
                  <div className="bg-[#0AB9BF55] rounded-lg flex gap-16 p-4">
                    <CustomSlider />
                    <CustomSlider variant="exchange" />
                  </div>
                </TableData>
              </TableRow>
            ) : null}
          </tbody>
        ))}
      </table>
    </div>
  );
}

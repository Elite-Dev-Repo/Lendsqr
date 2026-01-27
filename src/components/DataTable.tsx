"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const currentPage = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  return (
    <div className="overflow-hidden rounded-md border bg-white">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="py-4 text-secondary/60 text-md font-medium hover:text-secondary capitalize"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* --- PAGINATION CONTROLS --- */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-4">
        <div className="flex items-center gap-2 text-secondary/60 text-sm">
          <span>Showing</span>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger className="w-[80px] bg-[#213f7d1a] border-none font-medium text-secondary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="start">
              <SelectGroup>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <span>out of {data.length}</span>
        </div>

        <Pagination className="justify-end w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="ghost"
                className="hover:bg-[#213f7d1a]"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <PaginationPrevious href="#" className="hover:bg-transparent" />
              </Button>
            </PaginationItem>

            {/* Simple Page Indicator */}
            <div className="flex items-center gap-1">
              {table.getPageOptions().map((pageIdx) => {
                // Showing first 3 and last page logic for cleaner UI
                if (
                  pageIdx === 0 ||
                  pageIdx === pageCount - 1 ||
                  (pageIdx >= currentPage - 1 && pageIdx <= currentPage + 1)
                ) {
                  return (
                    <PaginationItem key={pageIdx}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          table.setPageIndex(pageIdx);
                        }}
                        isActive={currentPage === pageIdx}
                        className={
                          currentPage === pageIdx ? "font-bold" : "opacity-60"
                        }
                      >
                        {pageIdx + 1}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                if (pageIdx === 1 || pageIdx === pageCount - 2) {
                  return <PaginationEllipsis key={pageIdx} />;
                }
                return null;
              })}
            </div>

            <PaginationItem>
              <Button
                variant="ghost"
                className="hover:bg-[#213f7d1a]"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <PaginationNext href="#" className="hover:bg-transparent" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

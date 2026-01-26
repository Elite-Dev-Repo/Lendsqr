"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { ListFilter, MoreVertical } from "lucide-react";

export type Payment = {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Pending" | "Blacklisted" | "Inactive";
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "organization",
    header: () => (
      <div className="flex items-center gap-2 text-secondary font-bold text-[12px]">
        <span>ORGANIZATION</span>
        <ListFilter size={14} className="cursor-pointer" />
      </div>
    ),
  },
  {
    accessorKey: "username",
    header: () => (
      <div className="flex items-center gap-2 text-secondary font-bold text-[12px]">
        <span>USERNAME</span>
        <ListFilter size={14} className="cursor-pointer" />
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="flex items-center gap-2 text-secondary font-bold text-[12px]">
        <span>EMAIL</span>
        <ListFilter size={14} className="cursor-pointer" />
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: () => (
      <div className="flex items-center gap-2 text-secondary font-bold text-[12px]">
        <span>PHONE NUMBER</span>
        <ListFilter size={14} className="cursor-pointer" />
      </div>
    ),
  },
  {
    accessorKey: "dateJoined",
    header: () => (
      <div className="flex items-center gap-2 text-secondary font-bold text-[12px]">
        <span>DATE JOINED</span>
        <ListFilter size={14} className="cursor-pointer" />
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="flex items-center gap-2 text-secondary font-bold text-[12px]">
        <span>STATUS</span>
        <ListFilter size={14} className="cursor-pointer" />
      </div>
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const statusStyles: Record<string, string> = {
        Active: "bg-[#F3FCF6] text-[#39CD62]",
        Pending: "bg-[#FDF7E5] text-[#E9B200]",
        Blacklisted: "bg-[#FCE6EB] text-[#E4033B]",
        Inactive: "bg-[#F5F5F7] text-[#545F7D]",
      };

      return (
        <div className="flex items-center justify-between w-full pr-4">
          <span
            className={`px-3 py-1.5 rounded-full text-[12px] font-medium ${
              statusStyles[status] || "bg-gray-100 text-gray-600"
            }`}
          >
            {status}
          </span>
          <div className="p-2  hover:bg-primary/10 rounded-full flex items-center justify-center">
            <MoreVertical size={18} className="text-secondary cursor-pointer" />
          </div>
        </div>
      );
    },
  },
];

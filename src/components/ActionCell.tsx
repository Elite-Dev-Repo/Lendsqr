"use client";
import { useNavigate } from "react-router-dom";
import { MoreVertical, Eye, UserX, UserCheck } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ActionCell = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  const status = row.getValue("status") as string;
  const user = row.original;

  const statusStyles: Record<string, string> = {
    Active: "bg-[#F3FCF6] text-[#39CD62]",
    Pending: "bg-[#FDF7E5] text-[#E9B200]",
    Blacklisted: "bg-[#FCE6EB] text-[#E4033B]",
    Inactive: "bg-[#F5F5F7] text-[#545F7D]",
  };

  return (
    <div className="flex items-center justify-between w-full pr-2">
      <span
        className={`px-3 py-1.5 rounded-full text-[12px] font-medium ${statusStyles[status] || "bg-gray-100 text-gray-600"}`}
      >
        {status}
      </span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors outline-none text-secondary">
            <MoreVertical size={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[180px] p-2 shadow-xl border-border bg-white z-50"
        >
          <DropdownMenuItem
            className="flex items-center gap-3 py-3 cursor-pointer text-secondary outline-none"
            onClick={() => navigate(`/users/${user.id}`)}
          >
            <Eye size={16} />
            <span className="font-medium text-[14px]">View Details</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 py-3 cursor-pointer text-secondary outline-none">
            <UserX size={16} />
            <span className="font-medium text-[14px]">Blacklist User</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 py-3 cursor-pointer text-secondary outline-none">
            <UserCheck size={16} />
            <span className="font-medium text-[14px]">Activate User</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

import React from "react";
import { columns, type Payment } from "./columns";
import { DataTable } from "./DataTable";

function UserTable() {
  const payments: Payment[] = [
    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Pending",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Active",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Blacklisted",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Pending",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Inactive",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Active",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Inactive",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Active",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Blacklisted",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Blacklisted",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Blacklisted",
    },

    {
      id: crypto.randomUUID(),

      organization: "Lendsqr",

      username: "Ademola",

      email: "ademola@example.com",

      phone: "08123456789",

      dateJoined: "2022-01-01",

      status: "Blacklisted",
    },
  ];

  return (
    <div className="mt-10 bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <DataTable columns={columns} data={payments} />
    </div>
  );
}

export default UserTable;

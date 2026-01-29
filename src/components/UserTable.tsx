import { columns, type Payment } from "./Columns";
import { DataTable } from "./DataTable";
import usersData from "../db.json";

function UserTable() {
  const data = usersData as Payment[];

  return (
    <div className="mt-10 bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default UserTable;

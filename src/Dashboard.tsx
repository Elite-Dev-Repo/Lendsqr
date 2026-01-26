import Nav from "./components/Nav.tsx";
import Mysidebar from "./components/Mysidebar.tsx";
import UserTable from "./components/UserTable.tsx"; //

function Dashboard() {
  const users = [
    {
      name: " Users",
      amt: "12,000",
      Icon: (
        <div className=" p-3 rounded-full text-[#DF18FF] bg-[rgba(224,24,255,0.10)] flex items-center justify-center">
          <i className="fa-solid fa-users "></i>
        </div>
      ),
    },
    {
      name: "Active Users",
      amt: "5,200",
      Icon: (
        <div className=" p-3 rounded-full text-[#5718FF] bg-[rgba(87,24,255,0.10)] flex items-center justify-center">
          <i className="fa-solid fa-user-group "></i>
        </div>
      ),
    },
    {
      name: "Users with Loans",
      amt: "2,670",
      Icon: (
        <div className=" p-3 rounded-full text-[#F55F44] bg-[rgba(245,95,68,0.10)] flex items-center justify-center">
          <i className="fa-brands fa-hive "></i>
        </div>
      ),
    },
    {
      name: "Users with Savings",
      amt: "120,000",
      Icon: (
        <div className=" p-3 rounded-full text-[#FF3366] bg-[rgba(255,51,102,0.10)] flex items-center justify-center">
          <i className="fa-solid fa-coins "></i>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-slate-50">
      <Nav />
      <Mysidebar>
        <section className="container mx-auto">
          <div className="p-6">
            <h2 className="font-medium text-md text-secondary text-3xl mb-10">
              User
            </h2>

            <div className="grid grid-cols-4 gap-4">
              {users.map((user) => (
                <div
                  key={user.name}
                  className="flex flex-col items-start px-7 py-4 bg-white rounded-sm shadow-lg gap-4"
                >
                  {user.Icon}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-md uppercase text-secondary">
                      {user.name}
                    </h3>
                    <p className="text-2xl font-semibold text-secondary">
                      {user.amt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background">
            <UserTable />
          </div>
        </section>
      </Mysidebar>
    </div>
  );
}

export default Dashboard;

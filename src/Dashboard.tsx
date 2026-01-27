import Nav from "./components/Nav.tsx";
import Mysidebar from "./components/Mysidebar.tsx";
import UserTable from "./components/UserTable.tsx";

function Dashboard() {
  const stats = [
    {
      name: "Users",
      amt: "12,000",
      color: "text-[#DF18FF]",
      bg: "bg-[rgba(224,24,255,0.1)]",
      icon: "fa-users",
    },
    {
      name: "Active Users",
      amt: "5,200",
      color: "text-[#5718FF]",
      bg: "bg-[rgba(87,24,255,0.1)]",
      icon: "fa-user-group",
    },
    {
      name: "Users with Loans",
      amt: "2,670",
      color: "text-[#F55F44]",
      bg: "bg-[rgba(245,95,68,0.1)]",
      icon: "fa-hive",
    },
    {
      name: "Users with Savings",
      amt: "120,000",
      color: "text-[#FF3366]",
      bg: "bg-[rgba(255,51,102,0.1)]",
      icon: "fa-coins",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Nav />
      <Mysidebar>
        <section className="p-4 md:p-10">
          <h2 className="text-2xl font-semibold text-secondary mb-8">Users</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex flex-col gap-3"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}
                >
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <h3 className="text-xs font-semibold uppercase text-secondary opacity-70">
                  {stat.name}
                </h3>
                <p className="text-2xl font-bold text-secondary">{stat.amt}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto">
            <UserTable />
          </div>
        </section>
      </Mysidebar>
    </div>
  );
}

export default Dashboard;

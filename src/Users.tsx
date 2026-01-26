import Nav from "./components/Nav.tsx";
import Mysidebar from "./components/Mysidebar.tsx";
import { MoveLeft } from "lucide-react";
import profile from "./assets/profile.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Users = () => {
  return (
    <div className="bg-slate-50">
      <Nav />
      <Mysidebar>
        <section className="container mx-auto p-6">
          <header>
            <h2 className="flex items-center text-[1.2em] gap-2 text-secondary font-medium">
              <MoveLeft /> Back to Users
            </h2>
          </header>

          <div className="flex items-center justify-between mt-6">
            <h2 className="text-2xl font-medium text-secondary">
              User Details
            </h2>

            <div className="flex gap-2 items-center">
              <button className="px-4 py-2 rounded-sm border border-red-500 text-red-500 uppercase text-[12px] font-semibold">
                Blacklist User
              </button>
              <button className="px-4 py-2 rounded-sm border border-primary text-primary uppercase text-[12px] font-semibold">
                Activate User
              </button>
            </div>
          </div>
          <div className="bg-background p-6 rounded-sm w-full mt-4 relative shadow-sm">
            <div className="flex mb-5">
              <div className="flex items-center gap-4 border-r border-border px-4">
                <Avatar size="xl">
                  <AvatarImage src={profile} />
                  <AvatarFallback>PfP</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <h2 className="text-secondary font-medium text-[1.2em]">
                    Elite DEV
                  </h2>
                  <p className="text-[.8em] text-secondary">@elite_developer</p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2 border-r border-border px-4 ">
                <h3 className="text-secondary font-medium">User's Tier</h3>
                <span className="flex items-center gap-1 text-[12px]">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-regular fa-star text-yellow-500"></i>
                </span>
              </div>

              <div className="flex flex-col justify-center gap-2 border-r border-border px-4 ">
                <h3 className="text-secondary font-medium">
                  <i className="fa-solid fa-naira-sign"></i>
                  1,803,064<span className="text-[15px] opacity-70">.81</span>
                </h3>
                <p className="text-[13px] text-secondary font-semibold">
                  9167686804/Opay
                </p>
              </div>
            </div>
            <div className=" w-full absolute bottom-0">
              <ul className="flex items-center justify-around">
                <li className="text-secondary py-2 border-b-2 border-transparent hover:border-b-2 hover:border-primary hover:text-primary">
                  General Details
                </li>
                <li className="text-secondary py-2 border-b-2 border-transparent hover:border-b-2 hover:border-primary hover:text-primary">
                  Documents
                </li>
                <li className="text-secondary py-2 border-b-2 border-transparent hover:border-b-2 hover:border-primary hover:text-primary">
                  Bank Details
                </li>
                <li className="text-secondary py-2 border-b-2 border-transparent hover:border-b-2 hover:border-primary hover:text-primary">
                  Loans
                </li>
                <li className="text-secondary py-2 border-b-2 border-transparent hover:border-b-2 hover:border-primary hover:text-primary">
                  Savings
                </li>
                <li className="text-secondary py-2 border-b-2 border-transparent hover:border-b-2 hover:border-primary hover:text-primary">
                  App and System
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Mysidebar>
    </div>
  );
};

export default Users;

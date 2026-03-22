import Sidebar from "./sidebar";

const Dashboard = ({ children, activeMenu }) => {
  return (
    <div className="pt-[61px]">
      <div className="flex">
        <div className="max-[1080px]:hidden">
          {/* SIDEBAR CONTENT */}
          <Sidebar activeMenu={activeMenu} />
        </div>
        <div className="grow mx-5">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;

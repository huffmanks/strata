import SidebarLogo from "./SidebarLogo";
import SidebarNavLinks from "./SidebarNavLinks";
import SidebarLogout from "./SidebarLogout";

const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 bottom-0 z-40 flex h-full w-16 flex-col items-center overflow-hidden bg-dark-alt text-gray-400 md:w-40">
        <SidebarLogo />

        <div className="w-full px-2">
          <SidebarNavLinks />
        </div>

        <SidebarLogout />
      </aside>
    </>
  );
};

export default Sidebar;

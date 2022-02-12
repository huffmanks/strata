import { primaryRoutes, secondaryRoutes } from "../../routes";
import NavItem from "./NavItem";

const SidebarNavLinks = () => {
  return (
    <>
      <div className="mt-3 flex w-full flex-col items-center border-t border-gray-400">
        {primaryRoutes.map((route) => (
          <NavItem
            key={route.title}
            path={route.path}
            icon={route.icon}
            title={route.title}
          />
        ))}
      </div>
      <div className="mt-2 flex w-full flex-col items-center border-t border-gray-400">
        {secondaryRoutes.map((route) => (
          <NavItem
            key={route.title}
            path={route.path}
            icon={route.icon}
            title={route.title}
            hasNotifications={route.hasNotifications}
          />
        ))}
      </div>
    </>
  );
};

export default SidebarNavLinks;

import { NavLink } from "react-router-dom";
const SidebarLogo = () => {
  return (
    <NavLink
      to="/"
      className="mt-3 flex w-full items-center justify-center px-3 md:justify-start"
    >
      <svg
        className="h-10 w-10 fill-primary-main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
      </svg>
      <span className="ml-2 hidden text-sm font-bold text-light-main md:block">
        Strata
      </span>
    </NavLink>
  );
};

export default SidebarLogo;

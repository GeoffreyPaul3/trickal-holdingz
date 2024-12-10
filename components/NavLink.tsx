import { FC, ReactNode } from "react";
import { Link } from "react-scroll";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-white hover:text-blue-300 transition-colors cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default NavLink;


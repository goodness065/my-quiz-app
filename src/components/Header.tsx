import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/logo.svg";
import Button from "./Button";

const Header = () => {
  const location = useLocation();

  return (
      <div className="flex justify-between items-center layout_container bg-[#190E0A] w-full h-[70px] fixed">
        <Link to="/">
          <img src={logo} />
        </Link>
        {location.pathname === "/" && (
          <Button href="/details" title="Start Quiz" />
        )}
      </div>
  );
};

export default Header;

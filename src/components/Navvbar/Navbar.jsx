import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { IoChatbubblesOutline, IoHomeOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { FaLandmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="navbar">
      <div className="containerr">
        <ul className="list">
          <li>
            <Link to="/" className={isActive("/")}>
              <IoHomeOutline className="icon" size={50} />
            </Link>
          </li>
          <li>
            <Link to="/likes" className={isActive("/likes")}>
              <GrFavorite className="icon" size={50} />
            </Link>
          </li>
          <li>
            <Link to="/chats" className={isActive("/chats")}>
              <IoChatbubblesOutline className="icon" size={50} />
            </Link>
          </li>
          <li>
            <Link to="/market" className={isActive("/market")}>
              <FaLandmark className="icon" size={50} />
            </Link>
          </li>
          <li>
            <Link to="/profile" className={isActive("/profile")}>
              <CgProfile className="icon" size={50} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

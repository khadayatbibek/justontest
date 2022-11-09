import "./navbar.scss";

import { FaGlobeAsia } from "react-icons/fa";

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="add"></div>
        <div className="items">
          <div className="item">
            <FaGlobeAsia className="icon" />
            <span> EN</span>
          </div>
          <div className="item">
            <HelpOutlineOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <span>beta.user@JustOn.com</span>
            <KeyboardArrowDownOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

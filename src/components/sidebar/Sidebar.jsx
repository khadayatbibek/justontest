import "./sidebar.scss";

import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { AiOutlineIdcard } from "react-icons/ai";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">JustOn</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">DASHBOARD</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardCustomizeIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">WORKPLACE</p>

          <Link to="/report" style={{ textDecoration: "none" }}>
            <li>
              <AiOutlineIdcard className="icon" />
              <span>Reports</span>
            </li>
          </Link>

          <p className="title">MANAGE USER</p>

          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
        <div className="bottoms">
          <Divider />
          <ul>
            <li>
              <PersonAddIcon className="icon" />
              <span>Invite colleagues</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const PermanentDrawer = () => {
  const IconPerson = {
    marginLeft: "200px",
  };
  const buttonStyle = {
    width: "200px",
    margin: "15px",
    backgroundColor: "#E1F0F8",
    borderRadius: "8px",
    padding: "16px",
    color: "black",
  };

  return (
    <div>
      <nav anchor="left" variant="permanent">
        <div>
          <MenuIcon />
          <PersonIcon style={IconPerson} />
          <ul className="drawer-content">
            <li>
              <Link to="/" style={buttonStyle}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/" style={buttonStyle}>
                Thông tin tài khoản
              </Link>
            </li>
            <li>
              <Link to="/" style={buttonStyle}>
                Tạo nhóm
              </Link>
            </li>
            <li>
              <Link to="/" style={buttonStyle}>
                Tham gia bằng mã
              </Link>
            </li>
            <li>
              <Button to="/" style={buttonStyle}>
                Đăng xuất
              </Button>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <p>Main Content</p>
      </div>
    </div>
  );
};

export default PermanentDrawer;

import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

const PermanentDrawer = () => {

  const IconPerson = {
    marginLeft: '200px',
    
  }  
  const buttonStyle = {
    width: '200px',
    margin: '15px', 
    backgroundColor: '#E1F0F8', 
    borderRadius: '8px', 
    padding: '16px',
    color: 'black' 
  };

  return (
    <div>
      <Drawer anchor="left" variant="permanent">
        <div>
          <MenuIcon/>
          <PersonIcon style={IconPerson}/>
          <ul className='drawer-content'>
            <li>
              <Button style={buttonStyle}>Trang chủ</Button>
            </li>
            <li>
              <Button style={buttonStyle}>Thông tin tài khoản</Button>
            </li>
            <li>
              <Button style={buttonStyle}>Tạo nhóm</Button>
            </li>
            <li>
              <Button style={buttonStyle}>Tham gia bằng mã</Button>
            </li>
            <li>
              <Button style={buttonStyle}>Đăng xuất</Button>
            </li>
          </ul>
        </div>
      </Drawer>
      <div>
        <p>Main Content</p>
      </div>
    </div>
  );
};

export default PermanentDrawer;

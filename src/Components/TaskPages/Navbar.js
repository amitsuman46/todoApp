import React, { useState } from "react";
import {
  NavbarContainer,
  UserCircle,
  H2,
  UserProfile,
} from "../../Common/CommonComponents";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';


const Navbar = ({ userName,onLogOut}) => {
  const [menuState, setMenuState] = useState(false);
  const initials = userName.charAt(0);

  const logOutHandler = () => {
    onLogOut();
  }
  return (
    <>
      <NavbarContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <UserCircle>{initials}</UserCircle>
          <H2>TASK IT UP</H2>
        </div>
        <UserProfile onClick={()=>{
          setMenuState(true);
        }}/>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={menuState}
          onClose={()=>{setMenuState(false)}}
          anchorOrigin={{
            vertical: "top",

            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>

          <MenuItem>My account</MenuItem>

          <MenuItem onClick={logOutHandler}>Logout</MenuItem>
        </Menu>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

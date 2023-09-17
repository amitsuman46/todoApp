import React from "react";
import {
  NavbarContainer,
  UserCircle,
  H2,
  UserProfile
} from "../../Common/CommonComponents";

const Navbar = ({ userName }) => {
  const initials = userName.charAt(0);

  return (
    <>
        <NavbarContainer>
          <div style={{ display: "flex", alignItems: "center" }}>
            <UserCircle>{initials}</UserCircle>
            <H2>TASK IT UP</H2>
          </div>
          <UserProfile />
        </NavbarContainer>
    </>
  );
};

export default Navbar;

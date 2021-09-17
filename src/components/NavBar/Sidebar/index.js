import React from "react";
import {
  CloseIcon,
  SidebarContainer,
  Icon,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap
} from "./SidebarElements";

function Sidebar() {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">
            About
            </SidebarLink>
          <SidebarLink to="discover">
            Discover
            </SidebarLink>
          <SidebarLink to="service">
            Service
            </SidebarLink>
          <SidebarLink to="signup">
            Sign Up
            </SidebarLink>
        </SidebarMenu>
       
        <SideBtnWrap>
          <SidebarRoute to="/signin">
            Sign In
            </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
import React from 'react';
import { Menu, Grid } from 'antd';
import {Link} from "react-router-dom";


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/states">States</Link>
      </Menu.Item>
    </Menu>
  );
}

export default RightMenu;
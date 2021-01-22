import React from 'react';
import { Button, Avatar, Typography, Menu, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { StyledHeader } from './Header-styling';
import Logout from './Logout';
import Logo from '../../../assets/logo.png';

const { Title } = Typography;

const Header = () => {
  // const menu = (
  //   <Menu>
  //     <Menu.Item>
  //       <Logout />
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <>
      <StyledHeader>
        <div>
          <img src={Logo} alt="Human Rights First Logo"></img>
          <Title className="titleFont">
            human rights <span className="italic">first</span>
          </Title>
        </div>
        <Menu
          mode="horizontal"
          style={{ backgroundColor: 'inherit', border: 'none' }}
        >
          {/* <Menu.Item>Who We Are</Menu.Item> */}
          <Menu.Item>
            <Button type="primary">Upload</Button>
          </Menu.Item>
          <Menu.Item>
            <Logout />
            {/* <Dropdown overlay={menu}>
              <Avatar size={50} icon={<UserOutlined />} />
            </Dropdown> */}
          </Menu.Item>
        </Menu>
      </StyledHeader>
    </>
  );
};

export default Header;

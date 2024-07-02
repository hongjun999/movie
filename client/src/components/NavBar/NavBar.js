import { Layout, Menu } from 'antd';
import React from 'react';

const { Header } = Layout;

// const items1 = ['Home','Menu'].map((key) => ({
//   key,
//   // label: <a href={`${key}`}>{`${key}`}</a>
//   label: <a href={(key == 'Home') ? "/" : key} >{`${key}`}</a>
// }));
const items = [{
  key: 'Home',
  label: (<a href='/movie'>Home</a>)
}]
// items1 => items로 변경


const NavBar = () => {

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['Home']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>

    </Layout>
  );
};
export default NavBar;
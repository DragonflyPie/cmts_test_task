
//dependencies
import { UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu as AntMenu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

//style
import style from './Main.module.scss';

//types
import type {MenuProps} from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
): MenuItem {
  return {key, icon, label} as MenuItem;
}

export const allItems: MenuItem[] = [
  getItem('Артикулы', 'article', <UnorderedListOutlined />),
  getItem('Пользователи', 'user', <UserOutlined />),
];

const Main: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const navigate = useNavigate();

  const onChangeOpen = () => {
    setCollapsed(!collapsed);
  };

  const onClick = (el: { key: string }) => {
    navigate(el.key);
  };

  return (
    <Layout className={style.wrapper}>
      <Layout.Sider
        theme='light'
        collapsible={true}
        width={255}
        trigger={null}
        collapsed={collapsed}>
        <AntMenu
          mode="inline"
          items={allItems}
          onClick={onClick} />
      </Layout.Sider>
      <Layout.Content>
        <Layout.Header style={{ padding: 0, background: 'transparent' }}>
        <Button
          type="text"
          onClick={onChangeOpen}
          icon={
            <Icon
              height="12px"
              width="12px"
              icon={collapsed ? 'fa6-solid:chevron-right' : 'fa6-solid:chevron-left'}
            />
          }
        />
        </Layout.Header>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Main;

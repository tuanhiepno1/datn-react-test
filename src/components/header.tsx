import { Layout, Menu, Input } from "antd";
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

const HeaderComponent = () => {
    return (
        <Header style={{ backgroundColor: 'white', height: '100px', display: 'flex', alignItems: 'center', padding: '0 50px' }}>
            <div className="logo" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <img
                    src='/images/banner va logo/logo.png'
                    alt="Logo"
                    style={{ width: 100, height: 80, backgroundColor: 'black', padding: '5px', margin: '0' }}
                />
            </div>
            <Menu
                theme="light"
                mode="horizontal"
                style={{ flex: 3, justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}
            >
                <Menu.Item key="1">Giới thiệu</Menu.Item>
                <Menu.Item key="2" style={{color: '#ce161f'}}>Xu hướng 2024</Menu.Item>
                <Menu.Item key="3">Sản phẩm</Menu.Item>

                <Menu.SubMenu key="4" title="Nam" icon={<DownOutlined />}>
                    <Menu.Item key="41">Đồng hồ thể thao</Menu.Item>
                    <Menu.Item key="42">Đồng hồ sang trọng</Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="5" title="Nữ" icon={<DownOutlined />}>
                    <Menu.Item key="51">Đồng hồ thời trang</Menu.Item>
                    <Menu.Item key="52">Đồng hồ sang trọng</Menu.Item>
                </Menu.SubMenu>

                <Menu.Item key="6">Cặp đôi</Menu.Item>
            </Menu>
            <Search placeholder="Tìm là thấy" style={{ width: 250 }} /> {/* Tăng kích thước Search */}
            <ShoppingCartOutlined style={{ fontSize: '40px', marginLeft: '20px', cursor: 'pointer' }} />
        </Header>
    );
};
export default HeaderComponent;
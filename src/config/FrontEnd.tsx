import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from "react-router-dom";
import List from "../components/pages/list";
import Form from "../components/pages/form";
import SideNav from "../components/layouts/sidebar";
import File from "../components/pages/files";
import Videos from "../components/pages/videos";
import Home from "../components/pages/frontEnd/home";
import AboutUs from "../components/pages/frontEnd/about-us";
import Gallery from "../components/pages/frontEnd/gallery";
import Portfolio from "../components/pages/frontEnd/portfolio";
import ContactUs from "../components/pages/frontEnd/contact-us";
import '../FrontEnd.css';
import { Layout,Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';
require('typeface-monoton')
const { Header, Sider, Content} = Layout;
const FrontEnd = () => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);

    const handleToggle = (event: any) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }
  return (
      <Router>
        <Layout>
            <Header className="siteLayoutBackground" style={{padding:'0px 20px', background: "#001529"}}>               

              <div className="logo"><Link to="/"><img src="https://image.shutterstock.com/image-vector/www-internet-globe-line-icon-600w-628621502.jpg" /></Link></div>          

              <Menu theme="dark" mode="horizontal">
                <Menu.Item key='1'><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key='2'><Link to="/about-us">About Us</Link></Menu.Item>
                <Menu.Item key='3'><Link to="/gallery">Services</Link></Menu.Item>
                <Menu.Item key='4'><Link to="/portfolio">Works</Link></Menu.Item>
                <Menu.Item key='5'><Link to="/portfolio">Team</Link></Menu.Item>
                <Menu.Item key='6'><Link to="/portfolio">Packages</Link></Menu.Item>
                <Menu.Item key='7'><Link to="/contact-us">Contact Us</Link></Menu.Item>

                <Menu.Item key='8' style={{float: 'right'}}><Link to="/contact-us">Login</Link></Menu.Item>
                <Menu.Item key='9' style={{float: 'right'}}><Link to="/contact-us">Account</Link></Menu.Item>
                </Menu>

            </Header>
              <Content style={{margin: '24px 16px', padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff"}}>
                <Switch>
                    <Route path="/"  exact component={Home} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact-us" component={ContactUs} />                    
                </Switch>
              </Content>
          </Layout>
    </Router>
  );
}

export default FrontEnd;

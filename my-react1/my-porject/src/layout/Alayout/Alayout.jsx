import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import cookie from 'react-cookies'

import '../../css/login.css'
import User from '../../components/user'
import Complaint from '../../components/complaint'
import Leave from '../../components/leave'
import Barkrule from '../../components/barkrule'

import Question from '../../components/question'
import Onlond from '../../components/onlond'



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class Alayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }
    }
    componentWillMount() {
        let uesernm = cookie.load('username');
        console.log(uesernm)
        this.setState({
            username: uesernm
        })
    }
    render() {
        return (
            <Router >
                <Switch>
                    <Route path="/nav" >
                        <Layout>
                            <Header className="header">
                                <div className="logo" />
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                    style={{ lineHeight: '64px' }}
                                >
                                    <Menu.Item key="1">
                                        <img className="img1" src="http://stu.1000phone.net/Public/assets/css/images/logo.png?1574392358" alt="" />
                                        <div id="name">{this.state.username}
                                            <Link to="/login">
                                                <span id="sp1">退出</span>
                                            </Link>
                                        </div>
                                    </Menu.Item>
                                </Menu>
                            </Header>
                            <Switch>
                                <Route path="/nav/nav1">
                                    <Acontent1 />
                                </Route>
                            </Switch>
                            <Footer style={{ textAlign: 'center' }}>"Yi Ming product, will belong to scrap"</Footer>
                        </Layout>
                    </Route>
                </Switch>
            </Router>
        )
    }
}


const Acontent1 = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>

            </Breadcrumb>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['6']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    学员后台
                    </span>
                            }
                        >
                            <Menu.Item key="1"><Link to="/nav/nav1/option1">匿名投诉</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/nav/nav1/option2">技术问题</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/nav/nav1/option3">项目上传</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/nav/nav1/option4">VIP</Link></Menu.Item>
                            
                            <Menu.Item key="6"><Link to="/nav/nav1/option6">我的资料</Link></Menu.Item>

                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="laptop" />
                                    学员考勤
                    </span>
                            }
                        >
                            <Menu.Item key="8"><Link to="/nav/nav1/option8">学员请假</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/nav/nav1/option9">学院违纪</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Switch>
                        <Route path="/nav/nav1/option1">
                            <Complaint />
                        </Route>
                        <Route path="/nav/nav1/option2">
                            <Question />
                        </Route>
                        <Route path="/nav/nav1/option3">
                            <Onlond />
                        </Route>
                        <Route path="/nav/nav1/option4">
                            <div>option4</div>
                        </Route>
                        <Route path="/nav/nav1/option6">
                            <User />
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/nav/nav1/option8">
                            <Leave />
                        </Route>
                        <Route path="/nav/nav1/option9">
                            <Barkrule />

                        </Route>
                    </Switch>
                </Content>
            </Layout>
        </Content>
    )
}

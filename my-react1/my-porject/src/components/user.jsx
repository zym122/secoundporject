import React from 'react'
import axios from 'axios';
import cookie from 'react-cookies'

import {
    withRouter,
    // Link
} from "react-router-dom";
import '../sass/dist/user.css'


export default withRouter(class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uesrdata: ""
        }
    }
    async componentWillMount() {
        let cookie_val = cookie.load('userId');
        // let uesernm = cookie.load('username');
        // console.log(uesernm)

        await axios.get('http://localhost:2400/userxx').then((data) => {
            this.setState({
                uesrdata: data.data[cookie_val]
            })
        })
        console.log(cookie_val)

    }
    render() {
        return (
            <div id="userbox">
                <img className="userimg" src={this.state.uesrdata.userurl} alt="" />
                <div className="username">
                    {this.state.uesrdata.username}
                </div>
                <ul className="userul">
                    <li>
                        <span className="usersp1"> 身份证号码 </span>
                        <span className="usersp2">************</span>
                    </li>
                    <li>
                        <span className="usersp1"> 手机号 </span>
                        <span className="usersp2">*********</span>
                    </li>
                    <li>
                        <span className="usersp1">qq</span>
                        <span className="usersp2">{this.state.uesrdata.userqq}</span>
                    </li>
                    <li>
                        <span className="usersp1"> 毕业学院 </span>
                        <span className="usersp2">{this.state.uesrdata.userschool}</span>
                    </li>
                    <li>
                        <span className="usersp1">报名日期</span>
                        <span className="usersp2">2019-05-15</span>
                    </li>
                    <li>
                        <span className="usersp1">学历</span>
                        <span className="usersp2">专科</span>
                    </li>
                    <li>
                        <span className="usersp1">学习情况</span>
                        <span className="usersp2">{this.state.uesrdata.userstudy}</span>
                    </li>
                    
                </ul>
            </div>
        )
    }

})
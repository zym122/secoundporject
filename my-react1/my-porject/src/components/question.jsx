import React from 'react'
import axios from 'axios';
import cookie from 'react-cookies'

import {
    withRouter,
    // Link
} from "react-router-dom";
import '../sass/dist/question.css'


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
            <div id="qusbox">
                <div className="p11">学员姓名：</div>
                <input className="inp1" type="text" value={this.state.uesrdata.username} />
                <div className="p12">问题内容：</div>
                <textarea placeholder="请输入技术内容" className="content" name="content"></textarea>
                <p className="p2">添加</p>
                <p onClick={this.test.bind(this)} className="p3">返回</p>

            </div>
        )
    }
    test() {
        this.props.history.push('/nav/nav1/option6');
    }
})
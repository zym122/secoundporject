import React from 'react';
import axios from 'axios';
import cookie from 'react-cookies'
import {
    withRouter,
    HashRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import '../css/login.css'
export default withRouter(class Complaint extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <div id="box">
                            <div className="box1">
                                <h1>学员后台系统 </h1>
                                <span></span>
                                <input className="inp1" onChange={(e) => this.inputChange1(e)} placeholder="   身份证号码/学号" type="text" />
                                <input className="inp1" onChange={(e) => this.inputChange2(e)} placeholder="   密码" type="password" />
                                <input className="inp2" onClick={this.test.bind(this)} type="button" value="登录" />
                                <p>切换新版学员系统，抢先体验</p>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        )
    }
    inputChange1(e) {
        this.setState({
            username: e.target.value,
            userpad: e.target.value
        })
    }
    inputChange2(e) {
        this.setState({
            userpad: e.target.value
        })
    }


    async test() {
        let datas = await axios.get('http://localhost:2400/userxx').then((data) => {
            return data
        })
        // console.log(datas.data[0].userzh,datas.data[0].usermm)
        // console.log(this.state.username,this.state.userpad)
        if (this.state.username === datas.data[0].userzh && this.state.userpad === datas.data[0].usermm) {
            this.props.history.push('nav/nav1/option6');
            cookie.save('userId', 0);
            cookie.save('username', datas.data[0].username);

        } else if (this.state.username === datas.data[1].userzh && this.state.userpad === datas.data[1].usermm) {
            this.props.history.push('nav/nav1/option6');
            cookie.save('userId', 1);
            cookie.save('username', datas.data[1].username);
        } else {
            alert('密码或账号错误')
        }
    }
})
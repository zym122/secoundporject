import React from 'react'
import axios from 'axios';
import cookie from 'react-cookies'

import {
    withRouter,
    // Link
} from "react-router-dom";
import '../sass/dist/onlond.css'
import Onlondx from './onlond(x)'


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
            <div id="onlondbox">
                <h2>学院项目上传</h2>
                <div className="box">
                    <ul>
                        <li>上传项目：</li>
                        <li>
                            <Onlondx />
                        </li>
                        <li>请注意上传的项目大小</li>
                    </ul>
                    <p className="p2">添加</p>
                    <p onClick={this.test.bind(this)} className="p3">返回</p>
                </div>

            </div>
        )
    }
    test() {
        this.props.history.push('/nav/nav1/option3');
    }
})
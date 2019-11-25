import React from 'react'

import {
    withRouter,

    // Link
} from "react-router-dom";
import '../sass/dist/complant.css'


export default withRouter(class complaint extends React.Component {

    async componentWillMount() {

    }
    render() {
        return (

            <div id="combox">
                <p className="p1">投诉内容:</p>
                <textarea placeholder="本投诉是匿名投诉，不会暴露您的信息" className="content" ></textarea>
                <p className="p2">添加</p>
                <p onClick={this.test.bind(this)} className="p3">返回</p>
            </div>
        )
    }
    test() {
        this.props.history.push('/nav/nav1/option6');
    }
})
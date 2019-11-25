import React from 'react'

import {
    withRouter,

    // Link
} from "react-router-dom";
import '../sass/dist/barkrule.css'


export default withRouter(class complaint extends React.Component {


    render() {
        return (

            <div id="brbox">
                <ul>
                    <li>
                        <span>姓名</span>
                        <span> </span>
                    </li>
                    <li><span>类型</span>
                        <span> </span>
                    </li>
                    <li><span>扣除（分数）</span>
                        <span> </span>
                    </li>
                    <li><span>剩余分数</span>
                        <span> </span>
                    </li>
                    <li><span>理由</span>
                        <span> </span>
                    </li>
                    <li><span>操作人</span>
                        <span> </span>
                    </li>
                    <li><span>操作时间</span>
                        <span> </span>
                    </li>
                </ul>
            </div>
        )
    }
    test() {
        this.props.history.push('/nav/nav1/option6');
    }
})
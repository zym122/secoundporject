import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React from 'react'
import axios from 'axios';
import cookie from 'react-cookies'
import '../sass/dist/laeva.css'
import {
    withRouter,

    // Link
} from "react-router-dom";
const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${'条请假记录'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                提交请假条
      </Button>
        </Form.Item>
    </div>
);

export default withRouter(class App extends React.Component {
    constructor(props) {
        super(props)
        this.state1 = {
            uesrdata: ""
        }
    }
    state = {
        comments: [],
        submitting: false,
        value: '',
    };
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

    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            this.setState({
                submitting: false,
                value: '',
                comments: [
                    {
                        author: '天懒',
                        avatar: 'http://img4.imgtn.bdimg.com/it/u=3694940777,3481677981&fm=26&gp=0.jpg',
                        content: <p>{this.state.value}</p>,
                        datetime: moment().fromNow(),
                    },
                    ...this.state.comments,
                ],
            });
        }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <div>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                    avatar={
                        <Avatar
                            src="http://img4.imgtn.bdimg.com/it/u=3694940777,3481677981&fm=26&gp=0.jpg"
                            alt="天懒"
                        />
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value + '请写出你的请假理由'}
                        />
                    }
                />
            </div>
        );
    }
})

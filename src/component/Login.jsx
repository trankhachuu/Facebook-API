import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import '../style/StyleLogin.css';

class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values.userName)
            // if (!err) {
            //     console.log('Received values of form: ', values);
            // }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className={'login_label'}>Login</div>
                <Form.Item className="textbox">
                    {getFieldDecorator('userName', {
                       
                    })(
                        <Input prefix={<Icon type="user" style={{ width : '26px', float : 'left', textAlign : 'center' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item className="textbox">
                    {getFieldDecorator('password', {
                    })(
                        <Input prefix={<Icon type="lock" style={{ width : '26px', float : 'left', textAlign : 'center' }}/>} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item className="textbox">
                    {getFieldDecorator('remember', {
                        initialValue: true,
                    })}
                    <br />
                    <a className="login-form-forgot" href="/">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in</Button>
                    Or <a href="/">register now!</a>
                </Form.Item>
            </Form>
        );
    }
}


export default Form.create()(Login);

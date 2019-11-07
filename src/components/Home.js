import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Home.css';
// import './miaosha.js';
import { Form, Icon, Input, Button } from 'antd';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {  
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('Cell-phone number', {
            rules: [{ required: true, message: 'Please input your Cell-phone number!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Cell-phone number"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('Verification Code"', {
            rules: [{ required: true, message: 'Please input your Verification Code"!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="
              Verification Code"
              placeholder="
              Verification Code"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })}
          <Button type="primary" htmlType="submit" className="login-form-button">
            获取验证码
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('container'));
export default WrappedNormalLoginForm;
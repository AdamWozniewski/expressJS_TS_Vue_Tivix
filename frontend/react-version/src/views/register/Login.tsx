import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, notification } from 'antd';
import AuthService from '../../services/AuthService';
import { testDispatcher } from "../../actions/auth";

class Login extends Component<any, any> {
  state = {
  };

  static propTypes = {
  };

  static defaultProps = {
  };

  auth = async (values: any) => {
    this.props.testDispatcher('abc z LoginView');
    try {
      const user = await AuthService.login(values);
      console.log(user)
      notification.success({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    } catch (error) {
      notification.error({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    }
  };

  onFinishFailed = () => {
    notification.error({
      message: 'Notification Title',
      description: 'Form is not valid'
    });
  }

  render() {
    return (
      <div>
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={this.auth}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="email"
            rules={[{ required: true, message: 'Please input your username!', type: 'email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ items }: { items: any[] }) => ({
  items,
});
const mapDispatchToProps = (dispatch: Function) => ({
  testDispatcher: (payload: any) => dispatch(testDispatcher(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);



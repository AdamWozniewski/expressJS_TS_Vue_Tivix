import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import AuthService from '../../services/AuthService';
import { notificationDispatch } from '../../store/reducers/utilitiesReducer';
import { loginUser } from '../../store/reducers/userReducer';
import { useUtilities } from '../../hooks/useUtilities';

type ConstantLogin = {
  [key: string]: string
}

const CONSTANT: ConstantLogin = {
  EMAIL: 'email',
  ERROR: 'error',
};

export function Login() {
  const { dispatch } = useUtilities();
  const auth = async (values: any) => {
    await AuthService.login({ ...values })
      .then((data) => {
        dispatch(loginUser({...data, remember: values.remember}))
        dispatch(notificationDispatch({
          type: 'success',
          message: 'Notification Title',
          description: 'Form is not valid'
        }))
      })
      .catch(() => dispatch(notificationDispatch({
        type: 'error',
        message: 'Notification Title',
        description: 'Form is not valid'
      })))
  }

  const onFinishFailed = () => {
    dispatch(notificationDispatch({
      type: 'error',
      message: 'Notification Title',
      description: 'Form is not valid'
    }));
  };
    return (
      <div>
        <Form
          name='login'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={auth}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Username'
            name={CONSTANT.EMAIL}
            rules={[{ required: true, message: 'Please input your username!', type: 'email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}

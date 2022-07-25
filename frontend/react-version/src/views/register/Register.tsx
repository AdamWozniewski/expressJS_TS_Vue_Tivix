import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import AuthService from '../../services/AuthService';
import { useUtilities } from '../../hooks/useUtilities';
import { notificationDispatch } from '../../store/reducers/utilitiesReducer';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

type IRegistrationFormProps = {};
export const RegistrationForm: React.FunctionComponent<
  IRegistrationFormProps
> = () => {
  const [form] = Form.useForm();
  const { dispatch } = useUtilities();
  const register = async (values: any) => {
    await AuthService.createUser(values)
      .then(() =>
        dispatch(
          notificationDispatch({
            type: 'success',
            message: 'Notification Title',
            description: 'Form is not valid',
          }),
        ),
      )
      .catch(() =>
        dispatch(
          notificationDispatch({
            type: 'error',
            message: 'Notification Title',
            description: 'Form is not valid',
          }),
        ),
      );
  };
  const onFinishFailed = () =>
    dispatch(
      notificationDispatch({
        type: 'error',
        message: 'Notification Title',
        description: 'Form is not valid',
      }),
    );
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={register}
      onFinishFailed={onFinishFailed}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value)
                return Promise.resolve();
              return Promise.reject(
                new Error('The two passwords that you entered do not match!'),
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="first_name"
        label="First Name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="last_name"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

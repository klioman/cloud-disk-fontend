import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Store } from 'antd/lib/form/interface';
import { Form, Input, Button, Spin } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { registrationRequest } from 'redux/reducers/auth/reducer';
import { ILoginRequestPayload } from 'redux/reducers/auth/types';
import { IStoreState } from 'redux/types';
import { getAuthIsLoad, getAuthErrors } from 'redux/reducers/auth/selectors';

// ===================================================
const View: FC<any> = (props) => {
	const { registrationRequest, isLoading } = props;

	const onFinish = (values: ILoginRequestPayload) => {
		registrationRequest(values);
	};

	const onFinishFailed = (errorInfo: Store) => {
		// eslint-disable-next-line no-console
		console.error('Failed:', errorInfo);
	};

	return (
		<div className="auth-form-wrapper">
			<h3>Регистрация:</h3>
			<Spin tip="Загрузка..." spinning={isLoading}>
				<Form
					className="registration-form"
					name="user-login"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						name="email"
						validateTrigger={['onChange', 'onBlur']}
						rules={[
							{
								type: 'email',
								whitespace: true,
								message: 'Введите валидный e-mail!',
							},
							{
								required: true,
								message: 'Пожалуйста, введите ваш E-mail!',
							},
						]}
					>
						<Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
					</Form.Item>

					<Form.Item
						name="password"
						validateTrigger={['onChange', 'onBlur']}
						rules={[
							{ required: true, message: 'Пожалуйста, введите ваш пароль!' },
							{
								min: 3,
								message: 'Пароль должен быть не меньше 3-х символов',
							},
							{
								max: 12,
								message: 'Пароль должен быть не больше 12 символов',
							},
						]}
					>
						<Input.Password
							prefix={<LockOutlined className="site-form-item-icon" />}
							placeholder="Пароль"
						/>
					</Form.Item>

					<Form.Item style={{ marginBottom: 0 }}>
						<Button type="primary" htmlType="submit">
							Отправить
						</Button>
					</Form.Item>
				</Form>
			</Spin>
		</div>
	);
};

// ================= Container: =================
const mapStateToProps = (store: IStoreState): any => {
	return { isLoading: getAuthIsLoad(store), authErrors: getAuthErrors(store) };
};
const mapDispatchToProps: any = { registrationRequest };
const Login = connect(mapStateToProps, mapDispatchToProps)(View);

export default Login;

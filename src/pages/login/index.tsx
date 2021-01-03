import React, { FC } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Store } from 'antd/lib/form/interface';
import EmptyLayout from 'layouts/empty';
import { getAuthIsLoad } from 'redux/reducers/auth/selectors';
import { loginRequest } from 'redux/reducers/auth/reducer';
import { IStoreState } from 'redux/types';
import { ILoginRequestPayload } from 'redux/reducers/auth/types';
import { ILoginIMapStateToProps, ILoginMapDispatchToProps, TLoginComponentProps } from './types';

// ===================================================
const View: FC<TLoginComponentProps> = (props) => {
	const { loginRequest, isLoading } = props;

	const onFinish = (values: ILoginRequestPayload) => {
		loginRequest(values);
	};

	const onFinishFailed = (errorInfo: Store) => {
		// eslint-disable-next-line no-console
		console.error('Failed:', errorInfo);
	};

	return (
		<EmptyLayout>
			<div className="login-form-wrapper">
				<Spin tip="Загрузка..." spinning={isLoading}>
					<Form
						className="login-form"
						name="user-login"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							name="email"
							rules={[
								{
									type: 'email',
									message: 'Введите валидный e-mail!',
								},
								{
									required: true,
									message: 'Пожалуйста, введите ваш E-mail!',
								},
							]}
						>
							<Input
								prefix={<MailOutlined className="site-form-item-icon" />}
								placeholder="Email"
							/>
						</Form.Item>

						<Form.Item
							name="password"
							rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
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
		</EmptyLayout>
	);
};

// ================= Container: =================
const mapStateToProps = (store: IStoreState): ILoginIMapStateToProps => {
	return { isLoading: getAuthIsLoad(store) };
};
const mapDispatchToProps: ILoginMapDispatchToProps = { loginRequest };
const Login = connect(mapStateToProps, mapDispatchToProps)(View);

export default Login;

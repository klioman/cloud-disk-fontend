import React, { FC } from 'react';
import { Store } from 'antd/lib/form/interface';
import { Form, Input, Button, Spin } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { ILoginRequestPayload } from 'redux/reducers/auth/types';

// ===================================================
const RegistrationContent: FC = () => {
	const onFinish = (values: ILoginRequestPayload) => {
		// eslint-disable-next-line no-console
		console.info('Succsess:', values);
	};

	const onFinishFailed = (errorInfo: Store) => {
		// eslint-disable-next-line no-console
		console.error('Failed:', errorInfo);
	};

	return (
		<div className="auth-form-wrapper">
			<h3>Регистрация:</h3>
			<Spin tip="Загрузка..." spinning={false}>
				<Form
					className="login-form"
					name="user-login"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item name="email">
						<Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
					</Form.Item>

					<Form.Item name="password">
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

export default RegistrationContent;

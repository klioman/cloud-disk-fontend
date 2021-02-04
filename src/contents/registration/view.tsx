import React, { FC } from 'react';
import { Store } from 'antd/lib/form/interface';
import { Form, Input, Button, Spin, Card } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { ILoginRequestPayload } from 'redux/reducers/auth/types';
import { TRegistrationComponentProps } from './types';

// ==========================================:
const View: FC<TRegistrationComponentProps> = (props) => {
	const { registrationRequest, isLoading, animationStatus, changePosition, position } = props;

	const onFinish = (values: ILoginRequestPayload) => {
		const registrationValue = {
			email: values.email,
			password: values.password,
		};

		registrationRequest(registrationValue);
	};

	const onFinishFailed = (errorInfo: Store) => {
		// eslint-disable-next-line no-console
		console.error('Failed:', errorInfo);
	};

	const handleChangeForm = () => {
		animationStatus(true);
		changePosition(!position);
	};

	return (
		<Card
			title="Регистрация:"
			className={`auth-form-wrapper auth-form-wrapper--regitrstion ${
				position ? 'active-sx' : 'inactive-sx'
			}`}
			bordered={false}
		>
			<Spin tip="Загрузка..." spinning={isLoading}>
				<Form
					className="registration-form"
					name="user-login"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<div className="auth-form-wrapper__content">
						<Form.Item
							name="email"
							validateTrigger={['onChange']}
							hasFeedback
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
							<Input
								prefix={<MailOutlined className="site-form-item-icon" />}
								placeholder="Email"
							/>
						</Form.Item>

						<Form.Item
							name="password"
							hasFeedback
							rules={[
								{ required: true, message: 'Пожалуйста, введите ваш пароль!' },
								{
									min: 3,
									message: 'Пароль должен быть не меньше 3-х символов!',
								},
								{
									max: 16,
									message: 'Пароль должен быть не больше 12 символов!',
								},
							]}
						>
							<Input.Password
								prefix={<LockOutlined className="site-form-item-icon" />}
								placeholder="Пароль"
							/>
						</Form.Item>

						<Form.Item
							name="confirm"
							dependencies={['password']}
							hasFeedback
							rules={[
								{ required: true, message: 'Пожалуйста, введите ваш пароль!' },
								{
									min: 3,
									message: 'Пароль должен быть не меньше 3-х символов!',
								},
								{
									max: 16,
									message: 'Пароль должен быть не больше 16 символов!',
								},
								({ getFieldValue }) => ({
									validator(_, value) {
										if (!value || getFieldValue('password') === value) {
											return Promise.resolve();
										}

										return Promise.reject(new TypeError('Пароли не совпадают!'));
									},
								}),
							]}
						>
							<Input.Password
								prefix={<LockOutlined className="site-form-item-icon" />}
								placeholder="Подтвердите пароль"
							/>
						</Form.Item>
					</div>
					<Form.Item className="auth-button-wrapper">
						<Button
							size="large"
							onClick={handleChangeForm}
							className="auth-btn-type-2"
							type="primary"
							htmlType="button"
						>
							Войти
						</Button>
						<Button size="large" className="auth-btn-type-1" type="primary" htmlType="submit">
							Отправить
						</Button>
					</Form.Item>
				</Form>
			</Spin>
		</Card>
	);
};

export { View };

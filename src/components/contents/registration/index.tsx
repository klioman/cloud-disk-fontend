import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Store } from 'antd/lib/form/interface';
import { Form, Input, Button, Spin } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { registrationRequest } from 'redux/reducers/auth/reducer';
import { ILoginRequestPayload } from 'redux/reducers/auth/types';
import { IStoreState } from 'redux/types';
import { getAuthIsLoad } from 'redux/reducers/auth/selectors';
import {
	IRegistrationIMapStateToProps,
	IRegistrationMapDispatchToProps,
	TRegistrationComponentProps,
} from './types';

// ===================================================
const View: FC<TRegistrationComponentProps> = (props) => {
	const { registrationRequest, isLoading, animationStatus, changePosition, position } = props;

	const onFinish = (values: ILoginRequestPayload) => {
		registrationRequest(values);
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
		<div
			className={`auth-form-wrapper auth-form-wrapper--regitrstion ${
				position ? 'active-sx' : 'inactive-sx'
			}`}
		>
			<h3 className="auth-form-wrapper__title">Регистрация:</h3>
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
		</div>
	);
};

// ==================== Container: ====================
const mapStateToProps = (store: IStoreState): IRegistrationIMapStateToProps => {
	return { isLoading: getAuthIsLoad(store) };
};
const mapDispatchToProps: IRegistrationMapDispatchToProps = { registrationRequest };
const Registration = connect(mapStateToProps, mapDispatchToProps)(View);

export default Registration;

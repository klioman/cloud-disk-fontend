import React, { FC } from 'react';
import { Form, Input, Spin, Button, Checkbox, Card } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Store } from 'antd/lib/form/interface';
import { getAuthIsLoad } from 'redux/reducers/auth/selectors';
import { loginRequest } from 'redux/reducers/auth/reducer';
import { IStoreState } from 'redux/types';
import { ILoginRequestPayload } from 'redux/reducers/auth/types';
import { ILoginIMapStateToProps, ILoginMapDispatchToProps, TLoginComponentProps } from './types';

// ===================================================
const View: FC<TLoginComponentProps> = (props) => {
	const { loginRequest, isLoading, animationStatus, changePosition, position } = props;

	const onFinish = (values: ILoginRequestPayload) => {
		loginRequest(values);
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
			title="Вход:"
			className={`auth-form-wrapper auth-form-wrapper--login ${
				position ? 'inactive-dx' : 'active-dx'
			}`}
			bordered={false}
		>
			<Spin tip="Загрузка..." spinning={isLoading}>
				{/* <h3 className="auth-form-wrapper__title">Вход:</h3> */}
				<Form
					className="login-form"
					name="user-login"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<div className="auth-form-wrapper__content">
						<Form.Item
							name="email"
							hasFeedback
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
							]}
						>
							<Input.Password
								prefix={<LockOutlined className="site-form-item-icon" />}
								placeholder="Пароль"
							/>
						</Form.Item>
						<Form.Item className="auth-forgot-wrapper">
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox>Запомнить меня</Checkbox>
							</Form.Item>

							<a href="http://">Забыли пароль?</a>
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
							Регистрация
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

// ================= Container: =================
const mapStateToProps = (state: IStoreState): ILoginIMapStateToProps => {
	return { isLoading: getAuthIsLoad(state) };
};
const mapDispatchToProps: ILoginMapDispatchToProps = { loginRequest };
const Login = connect(mapStateToProps, mapDispatchToProps)(View);

export default Login;

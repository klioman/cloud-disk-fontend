import React, { FC } from 'react';
import { Form, Input, Spin, Button } from 'antd';
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
		<div
			className={`auth-form-wrapper auth-form-wrapper--login ${
				position ? 'inactive-dx' : 'active-dx'
			}`}
		>
			<h3 className="auth-form-wrapper__title">Вход:</h3>
			<Spin tip="Загрузка..." spinning={isLoading}>
				<Form
					className="login-form"
					name="user-login"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<div className="auth-form-wrapper__content">
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
		</div>
	);
};

// ================= Container: =================
const mapStateToProps = (store: IStoreState): ILoginIMapStateToProps => {
	return { isLoading: getAuthIsLoad(store) };
};
const mapDispatchToProps: ILoginMapDispatchToProps = { loginRequest };
const Login = connect(mapStateToProps, mapDispatchToProps)(View);

export default Login;

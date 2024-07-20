import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { login, register } from '~/services/authService';

const cx = classNames.bind(styles);

function Login() {
    const nav = useNavigate()
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState(null);

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };
    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        });
    };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(loginData);
            console.log('User logged in successfully:', response);
            alert('Đăng nhập thành công');
            setError(null);
            // Tạo object chứa thông tin người dùng và accessToken
            const userData = {
                user: response.data, 
                accessToken: response.accessToken,
            };
            // Lưu object này vào localStorage
            localStorage.setItem('user', JSON.stringify(userData));
            if (response.data.role === 'admin') {
                nav('/admin');
            } else {
                nav('/');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) {
            alert('Mật khẩu không khớp!');
            return;
        }
        try {
            const response = await register(registerData);
            console.log('User registered successfully:', response);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login-inner')}>
                    <span id={cx('or-text')}>Or</span>
                    <div className={cx('login')}>
                        <h4>Đăng nhập</h4>
                        <form onSubmit={handleLoginSubmit}>
                            <label htmlFor="username">
                                Tên đăng nhập <span className={cx('required')}>*</span>
                            </label>
                            <input
                                id="UserName"
                                name="username"
                                type="text"
                                value={loginData.username}
                                onChange={handleLoginChange}
                                required
                            />
                            <label htmlFor="password">
                                Mật khẩu <span className={cx('required')}>*</span>
                            </label>
                            <input
                                id="Password"
                                name="password"
                                type="password"
                                value={loginData.password}
                                onChange={handleLoginChange}
                                required
                            />
                            <button className={cx('login-btn')} type="submit">
                                Đăng nhập
                            </button>
                        </form>
                        {error && <p className={cx('error')}>{error}</p>}
                        <span className={cx('forgotpassword')}>
                            <Link>Quên mật khẩu?</Link>
                        </span>
                        <div className={cx('social-network')}>
                            <div className={cx('social-network-content')}>
                                <div className={cx('social-network-line')}></div>
                                <span className={cx('social-network-title')}>Hoặc</span>
                                <div className={cx('social-network-line')}></div>
                            </div>
                        </div>
                        <div className={cx('social-network-login')}>
                            <Link className={cx('social-network-btn')}>
                                <div className={cx('social-btn')}>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <div>Facebook</div>
                            </Link>
                            <Link className={cx('social-network-btn')}>
                                <div className={cx('social-btn')}>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </div>
                                <div>Google</div>
                            </Link>
                        </div>
                        <div className={cx('clear')}></div>
                        <div className={cx('note')}>
                            <p>Nếu Quý khách có vấn đề gì thắc mắc hoặc cần hỗ trợ gì thêm có thể liên hệ:</p>
                            <ul>
                                <li>
                                    <Link>Hotline: 1900.633.349</Link>
                                </li>
                                <li>
                                    <Link to={'https://www.facebook.com/letiendat912'}>Hoặc Inbox Facebook</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('register')}>
                        <h4>Đăng kí</h4>
                        <form onSubmit={handleRegisterSubmit}>
                            <label htmlFor="username">
                                Tên đăng nhập <span className={cx('required')}>*</span>
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="UserName"
                                value={registerData.username}
                                onChange={handleRegisterChange}
                                required
                            />
                            <label htmlFor="email">
                                Email <span className={cx('required')}>*</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="Email"
                                value={registerData.email}
                                onChange={handleRegisterChange}
                                required
                            />
                            <label htmlFor="password">
                                Mật khẩu <span className={cx('required')}>*</span>
                            </label>
                            <div className={cx('relative')}>
                                <input
                                    id="Password"
                                    name="password"
                                    className={cx('password-strength')}
                                    type="password"
                                    value={registerData.password}
                                    onChange={handleRegisterChange}
                                    required
                                />
                            </div>
                            <label htmlFor="confirmPassword">
                                Nhắc lại mật khẩu <span className={cx('required')}>*</span>
                            </label>
                            <div className={cx('relative')}>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className={cx('password-strength')}
                                    type="password"
                                    value={registerData.confirmPassword}
                                    onChange={handleRegisterChange}
                                    required
                                />
                            </div>
                            <div className={cx('clear')}></div>
                            <button className={cx('submit')} type="submit">
                                Đăng ký
                            </button>
                        </form>
                        {error && <p className={cx('error')}>{error}</p>}
                        <div className={cx('clear')}></div>
                        <div className={cx('note')}>
                            <p>
                                Thông tin cá nhân của bạn sẽ được dùng để điền vào hóa đơn, giúp bạn thanh toán nhanh
                                chóng và dễ dàng.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

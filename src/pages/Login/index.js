import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login-inner')}>
                    <span id={cx('or-text')}>Or</span>
                    <div className={cx('login')}>
                        <h4>Đăng nhập</h4>
                        <label htmlFor="username">
                            Tên đăng nhập <span className={cx('required')}>*</span>
                        </label>
                        <input id="UserName" type="text" />
                        <label htmlFor="username">
                            Mật khẩu <span className={cx('required')}>*</span>
                        </label>
                        <input id="Password" type="text" />
                        <button className={cx('login-btn')} type="submit" value="Đăng Nhập">
                            Đăng nhập
                        </button>
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
                        {/*login mobi hide*/}
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
                        <label htmlFor="UserName">
                            Tên đăng nhập <span className={cx('required')}>*</span>
                        </label>
                        <input type="text" name="UserName" id="UserName" required={true} />

                        <label htmlFor="FullName">
                            Số điện thoại <span className={cx('required')}>*</span>
                        </label>
                        <input type="text" name="Phone" id="Phone" required={true} />

                        <label htmlFor="Password">
                            Mật khẩu <span className={cx('required')}>*</span>
                        </label>
                        <div className={cx('relative')}>
                            <input id="Password" name="Password" className={cx('password-strength')} type="password" />
                        </div>
                        <label htmlFor="Passworddk">
                            Nhắc lại mật khẩu <span className={cx('required')}>*</span>
                        </label>
                        <div className={cx('relative')}>
                            <input
                                id="PasswordConfirm"
                                name="PasswordConfirm"
                                className={cx('password-strength')}
                                type="password"
                            />
                        </div>
                        <div className={cx('clear')}></div>
                        <button className={cx('submit')}>Đăng ký</button>

                        <div className={cx('clear')}></div>
                        <div className={cx('note')}>
                            <p>
                                Thông tin cá nhân của bạn sẽ được dùng để điền vào hóa đơn, giúp bạn thanh toán nhanh
                                chóng và dễ dàng
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

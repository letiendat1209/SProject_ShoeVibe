import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faChartLine, faLocationCrosshairs, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const userData = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className={cx('header')}>
            <div className={cx('top-nav')}>
                <div className={cx('nav-content-left')}>
                    <button className={cx('hide')}>
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                    </button>
                    <div className={cx('search-form')}>
                        <FontAwesomeIcon icon={faSearch} className={cx('s')} />
                        <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                    </div>
                </div>
                <div className={cx('nav-content-right')}>
                    <ul className={cx('nav-left-item')}>
                        <li className={cx('r-item')}>
                            <div className={cx('unfold')}>
                                <FontAwesomeIcon icon={faBell} />
                            </div>
                        </li>
                        <li className={cx('r-item')}>
                            <div className={cx('unfold')}>
                                <FontAwesomeIcon icon={faLocationCrosshairs} />
                            </div>
                        </li>
                        <li className={cx('r-item')}>
                            <div className={cx('unfold')}>
                                <FontAwesomeIcon icon={faChartLine} />
                            </div>
                        </li>
                        <li className={cx('r-item')}>
                            <div className={cx('unfold2')}>
                                <div className={cx('avatar')} onClick={toggleMenu}>
                                    <img
                                        src={
                                            userData
                                                ? userData.user.avatar
                                                : 'https://www.mwc.com.vn/Assets/App/images/user.png'
                                        }
                                        alt="avatar"
                                        className={cx('avatar-img')}
                                    />
                                    {menuVisible && (
                                        <div className={cx('dropdown-menu')}>
                                            <div className={cx('dropdown-header')}>
                                                <img
                                                    src={
                                                        userData
                                                            ? userData.user.avatar
                                                            : 'https://www.mwc.com.vn/Assets/App/images/user.png'
                                                    }
                                                    alt="avatar"
                                                    className={cx('dropdown-avatar')}
                                                />
                                                <div className={cx('dropdown-user-info')}>
                                                    <strong>{userData.user.fullname}</strong>
                                                    <p>{userData.user.email}</p>
                                                </div>
                                            </div>
                                            <div className={cx('dropdown-body')}>
                                                <div className={cx('dropdown-item')}>Set status</div>
                                                <div className={cx('dropdown-item')}>Profile & account</div>
                                                <div className={cx('dropdown-item')}>Settings</div>
                                            </div>
                                            <div className={cx('dropdown-footer')}>
                                                <div className={cx('dropdown-item')}>
                                                    <strong>Htmlstream PRO</strong>
                                                    <p>hs.example.com</p>
                                                </div>
                                                <div className={cx('dropdown-item')}>Customization</div>
                                                <div className={cx('dropdown-item')}>Manage team</div>
                                                <div className={cx('dropdown-item')} onClick={logout}>
                                                    Sign out
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

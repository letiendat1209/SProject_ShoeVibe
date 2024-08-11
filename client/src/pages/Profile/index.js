import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { Link, useNavigate } from 'react-router-dom';
import { Path } from '~/assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart, faPowerOff, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';
import WishList from './favorite';
import LocationSelector from '~/components/LocationSelector';

const cx = classNames.bind(styles);

function Profile() {
    const [activeTab, setActiveTab] = useState('profile');
    const userData = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const dateOfBirth = new Date(userData.user.dateofbirth);
    const formattedDateOfBirth = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;
    const [location, setLocation] = useState({ cityId: '', districtId: '', wardId: '' });

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };
    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
    };

    return (
        <div className={cx('Wrapper')}>
            <section className={cx('page-breadcumb')}>
                <div className={cx('container')}>
                    <nav className={cx('breadcumb')}>
                        <Link to="/">Trang chủ</Link>
                        <span className={cx('breadcumb-item')}>Thành viên</span>
                    </nav>
                </div>
            </section>
            <div className={cx('User-page')}>
                <div className={cx('container')}>
                    <div className={cx('profile-layout')}>
                        <div className={cx('profile-sidebar')}>
                            <div className={cx('sidebar-user')}>
                                <Link to="/profile">
                                    <div className={cx('user-avt')}>
                                        <img
                                            src={
                                                userData
                                                    ? userData.user.avatar
                                                    : 'https://www.mwc.com.vn/Assets/App/images/user.png'
                                            }
                                            alt=""
                                        />
                                    </div>
                                </Link>
                                <div className={cx('sidebar-info')}>
                                    <div className={cx('sidebar-info-name')}>
                                        {userData ? userData.user.username : 'Người dùng'}
                                    </div>
                                    <div>
                                        <Link>
                                            <Path /> <p className={cx('sidebar-fix-name')}>Sửa hồ sơ</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('sidebar-menu')}>
                                <div className={cx('startdust-drop')}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <button onClick={() => setActiveTab('profile')}>Tài khoản của tôi</button>
                                    <ul>
                                        <li
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveTab('profile');
                                            }}
                                        >
                                            Hồ sơ
                                        </li>
                                        <li
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveTab('password');
                                            }}
                                        >
                                            Đổi mật khẩu
                                        </li>
                                    </ul>
                                </div>
                                <div className={cx('startdust-drop')} onClick={() => setActiveTab('voucher')}>
                                    <FontAwesomeIcon icon={faTicket} />
                                    <button>Voucher</button>
                                </div>
                                <div className={cx('startdust-drop')} onClick={() => setActiveTab('notification')}>
                                    <FontAwesomeIcon icon={faBell} />
                                    <button>Thông báo</button>
                                </div>
                                <div className={cx('startdust-drop')} onClick={() => setActiveTab('wishlist')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <button>Danh sách yêu thích</button>
                                </div>
                                <div className={cx('startdust-drop')} onClick={logout}>
                                    <FontAwesomeIcon icon={faPowerOff} />
                                    <button>Đăng xuất</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('profile-main')}>
                            {activeTab === 'profile' && (
                                <div className={cx('main-account')}>
                                    <div className={cx('account-header')}>
                                        <h2>Hồ sơ của tôi</h2>
                                        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                                    </div>
                                    <div className={cx('account-body')}>
                                        <div className={cx('body-info-left')}>
                                            <div className={cx('form-group')}>
                                                <div className={cx('group-items')}>
                                                    <div className={cx('form-label')}>
                                                        <label htmlFor="">Tên đăng nhập</label>
                                                    </div>
                                                    <div className={cx('form-input')}>
                                                        <input type="text" value={userData.user.username} readOnly />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <div className={cx('group-items')}>
                                                    <div className={cx('form-label')}>
                                                        <label htmlFor="">Tên</label>
                                                    </div>
                                                    <div className={cx('form-input')}>
                                                        <input
                                                            type="text"
                                                            value={userData.user.fullname || userData.user.username}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <div className={cx('group-items')}>
                                                    <div className={cx('form-label')}>
                                                        <label htmlFor="">Email</label>
                                                    </div>
                                                    <div className={cx('form-input')}>
                                                        <input type="text" value={userData.user.email} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <div className={cx('group-items')}>
                                                    <div className={cx('form-label')}>
                                                        <label htmlFor="">Số điện thoại</label>
                                                    </div>
                                                    <div className={cx('form-input')}>
                                                        <input type="text" value={userData.user.telephone} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <div className={cx('group-items')}>
                                                    <div className={cx('form-label')}>
                                                        <label htmlFor="">Giới tính</label>
                                                    </div>
                                                    <div className={cx('form-input')}>
                                                        <input id="gender" type="text" value={userData.user.gender} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <div className={cx('group-items')}>
                                                    <div className={cx('form-label')}>
                                                        <label htmlFor="">Ngày sinh</label>
                                                    </div>
                                                    <div className={cx('form-input')}>
                                                        <input type="text" value={formattedDateOfBirth} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('form-group')}>
                                                <h1>Thông tin nhận hàng</h1>
                                            </div>
                                            <LocationSelector onLocationChange={handleLocationChange} />
                                        </div>
                                        <div className={cx('body-info-right')}>
                                            <div className={cx('right-avatar')}>
                                                <div className={cx('avatar-thumb')}>
                                                    <img
                                                        src={
                                                            userData
                                                                ? userData.user.avatar
                                                                : 'https://www.mwc.com.vn/Assets/App/images/user.png'
                                                        }
                                                        alt=""
                                                    />
                                                </div>
                                                <input
                                                    id="fileImport"
                                                    type="file"
                                                    name="file"
                                                    accept=".jpg,.jpeg,.png"
                                                />
                                                <button type="button">Chọn ảnh</button>
                                                <div className={cx('note-upload')}>
                                                    <p>Dụng lượng file tối đa 1 MB</p>
                                                    <p>Định dạng:.JPEG, .PNG</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'password' && (
                                <div className={cx('main-account')}>
                                    <div className={cx('account-header')}>
                                        <h2>Đổi mật khẩu</h2>
                                        <p>Quản lý bảo mật tài khoản</p>
                                    </div>
                                    <div className={cx('account-body')}>
                                        <div className={cx('body-info-left', 're-custom')}>
                                            <form>
                                                <div className={cx('form-group')}>
                                                    <div className={cx('group-items')}>
                                                        <div className={cx('form-label')}>
                                                            <label htmlFor="">Mật khẩu hiện tại</label>
                                                        </div>
                                                        <div className={cx('form-input')}>
                                                            <input
                                                                type="password"
                                                                placeholder="Mật khẩu hiện tại"
                                                                value={currentPassword}
                                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('form-group')}>
                                                    <div className={cx('group-items')}>
                                                        <div className={cx('form-label')}>
                                                            <label htmlFor="">Mật khẩu mới</label>
                                                        </div>
                                                        <div className={cx('form-input')}>
                                                            <input
                                                                type="password"
                                                                placeholder="Mật khẩu mới"
                                                                value={newPassword}
                                                                onChange={(e) => setNewPassword(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('form-group')}>
                                                    <div className={cx('group-items')}>
                                                        <div className={cx('form-label')}>
                                                            <label htmlFor="">Xác nhận mật khẩu</label>
                                                        </div>
                                                        <div className={cx('form-input')}>
                                                            <input
                                                                type="password"
                                                                placeholder="Xác nhận mật khẩu"
                                                                value={confirmPassword}
                                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('form-group')}>
                                                    <div className={cx('group-items')}>
                                                        <div className={cx('form-label')}></div>
                                                        <div className={cx('form-input')}>
                                                            <button type="submit" className={cx('btn')}>
                                                                Xác nhận
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'voucher' && (
                                <div className={cx('main-voucher')}>
                                    <h1>Voucher của tôi</h1>
                                </div>
                            )}
                            {activeTab === 'notification' && (
                                <div className={cx('main-notification')}>
                                    <h1>Thông báo của tôi</h1>
                                </div>
                            )}
                            {activeTab === 'wishlist' && <WishList />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { Link, useNavigate } from 'react-router-dom';
import { Path } from '~/assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPowerOff, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Profile() {
    // lấy thông tin người dùng từ localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const dateOfBirth = new Date(userData.user.dateofbirth);
    const formattedDateOfBirth = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;

    const logout = () => {
        // Xóa thông tin người dùng khỏi localStorage
        localStorage.removeItem('user');
        // Điều hướng người dùng về trang đăng nhập
        navigate('/login');
    };

    return (
        <div className={cx('Wrapper')}>
            <section className={cx('page-breadcumb')}>
                <div className={cx('container')}>
                    <nav className={cx('breadcumb')}>
                        <Link to="/">Trang chủ</Link>
                        <span className={cx('breadcumb-item')}> Thành viên</span>
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
                                        <Link to="/profile/edit">
                                            <Path /> <p className={cx('sidebar-fix-name')}>Sửa hồ sơ</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('sidebar-menu')}>
                                <div className={cx('startdust-drop')}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <button>Tài khoản của tôi</button>
                                    <ul>
                                        <li>Hồ sơ</li>
                                        <li>Đổi mật khẩu</li>
                                    </ul>
                                </div>
                                <div className={cx('startdust-drop')}>
                                    <FontAwesomeIcon icon={faTicket} />
                                    <button>Voucher</button>
                                </div>
                                <div className={cx('startdust-drop')}>
                                    <FontAwesomeIcon icon={faBell} />
                                    <button>Thông báo</button>
                                </div>
                                <div className={cx('startdust-drop')}>
                                    <FontAwesomeIcon icon={faPowerOff} />
                                    <button onClick={logout}>Đăng xuất</button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('profile-main')}>
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
                                                        value={
                                                            userData ? userData.user.fullname : userData.user.username
                                                        }
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
                                        <div className={cx('form-group')}>
                                            <div className={cx('group-items')}>
                                                <div className={cx('form-label')}>
                                                    <label htmlFor="">Tỉnh/Thành phố</label>
                                                </div>
                                                <div className={cx('form-input')}>
                                                    <select name="" id="">
                                                        <option value="">-- Chọn tỉnh --</option>
                                                        <option value="">22</option>
                                                        <option value="">233</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('form-group')}>
                                            <div className={cx('group-items')}>
                                                <div className={cx('form-label')}>
                                                    <label htmlFor="">Quận/huyện</label>
                                                </div>
                                                <div className={cx('form-input')}>
                                                    <select name="" id="">
                                                        <option value="">-- Chọn Quận/huyện --</option>
                                                        <option value="">22</option>
                                                        <option value="">233</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('form-group')}>
                                            <div className={cx('group-items')}>
                                                <div className={cx('form-label')}>
                                                    <label htmlFor="">Phường/Xã</label>
                                                </div>
                                                <div className={cx('form-input')}>
                                                    <select name="" id="">
                                                        <option value="">-- Chọn Phường/Xã --</option>
                                                        <option value="">22</option>
                                                        <option value="">233</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('form-group')}>
                                            <div className={cx('group-items')}>
                                                <div className={cx('form-label')}>
                                                    <label htmlFor="">Địa chỉ</label>
                                                </div>
                                                <div className={cx('form-input')}>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                        </div>
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
                                            <input id="fileImport" type="file" name="file" accept=".jpg,.jpeg,.png" />
                                            <button type="button">Chọn ảnh</button>
                                            <div className={cx('note-upload')}>
                                                <p>Dụng lượng file tối đa 1 MB</p>
                                                <p>Định dạng:.JPEG, .PNG</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

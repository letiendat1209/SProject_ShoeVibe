import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { Link, useNavigate } from 'react-router-dom';
import { Path } from '~/assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart, faPowerOff, faTicket, faUser } from '@fortawesome/free-solid-svg-icons';
import { getWishList } from '~/services/wishListService';

const cx = classNames.bind(styles);

const colorMap = {
    BẠC: '#C0C0C0', // Silver
    KEM: '#FFFDD0', // Cream
    NÂU: '#8B4513', // Saddle Brown
    DA: '#F5F5DC', // Beige
    ĐẤT: '#D2691E', // Chocolate
    XANHLA: '#32CD32', // Lime Green
    XÁM: '#808080', // Gray
    ĐEN: '#000000', // Black
    TRẮNG: '#FFFFFF', // White
    ĐỎ: '#FF0000', // Red
    XANHDUONG: '#0000FF', // Blue
    VÀNG: '#FFFF00', // Yellow
    HỒNG: '#FFC0CB', // Pink
    TÍM: '#800080', // Purple
    CAM: '#FFA500', // Orange
};

const getColorHex = (colorName) => {
    return colorMap[colorName] || '#000000'; // Mặc định là đen nếu không tìm thấy
};

function Profile() {
    const [activeTab, setActiveTab] = useState('profile');
    const userData = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const dateOfBirth = new Date(userData.user.dateofbirth);
    const formattedDateOfBirth = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
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
                                        <Link to="/profile/edit">
                                            <Path /> <p className={cx('sidebar-fix-name')}>Sửa hồ sơ</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('sidebar-menu')}>
                                <div className={cx('startdust-drop')} onClick={() => setActiveTab('profile')}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <button>Tài khoản của tôi</button>
                                    <ul>
                                        <li onClick={() => setActiveTab('profile')}>Hồ sơ</li>
                                        <li onClick={() => setActiveTab('password')}>Đổi mật khẩu</li>
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
                                        </div>
                                        <div className={cx('body-info-right')}>
                                            <div className={cx('avatar-upload')}>
                                                <input id="uploadAvt" hidden type="file" accept="image/*" />
                                                <label className={cx('uploadAvtBtn')} htmlFor="uploadAvt">
                                                    Chọn ảnh
                                                </label>
                                                <div className={cx('upload-note')}>
                                                    Dụng lượng file tối đa 1 MB. Định dạng:.JPEG, .PNG
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'password' && (
                                <div className={cx('main-password')}>
                                    <h1>Đổi mật khẩu</h1>
                                    <form action="">
                                        <div className={cx('form-group')}>
                                            <div className={cx('group-items')}>
                                                <div className={cx('form-label')}>
                                                    <label htmlFor="">Mật khẩu hiện tại</label>
                                                </div>
                                                <div className={cx('form-input')}>
                                                    <input type="password" placeholder="Mật khẩu hiện tại" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('form-group')}>
                                            <div className={cx('group-items')}>
                                                <div className={cx('form-label')}>
                                                    <label htmlFor="">Mật khẩu mới</label>
                                                </div>
                                                <div className={cx('form-input')}>
                                                    <input type="password" placeholder="Mật khẩu mới" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('form-group')}>
                                            <div className={cx('group-items')}>
                                                <div className={cx('form-label')}>
                                                    <label htmlFor="">Xác nhận mật khẩu</label>
                                                </div>
                                                <div className={cx('form-input')}>
                                                    <input type="password" placeholder="Xác nhận mật khẩu" />
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
                            {activeTab === 'wishlist' && (
                                <div className={cx('main-account')}>
                                    <div className={cx('account-header')}>
                                        <h2>Danh sách yêu thích</h2>
                                        {/* Nội dung wishlist */}
                                    </div>
                                    <div className={cx('account-body')}>
                                        {/* Danh sách sản phẩm yêu thích */}
                                        <div className={cx('row')}>
                                            <div
                                                className={cx(
                                                    'col-12 col-xs-custom-6 col-sm-4 col-lg-4 mb-32px',
                                                    'mb32',
                                                )}
                                            >
                                                <div className={cx('product-item')}>
                                                    <div className={cx('product-img')}>
                                                        <div className={cx('wish-list')}>
                                                            <FontAwesomeIcon icon={faHeart} />
                                                        </div>
                                                        <img
                                                            src={
                                                                'https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/07/31/z5684827104044_f809db2c46b3515bba00380514e0dab8.jpg'
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                    <Link>
                                                        <div className={cx('product-info')}>
                                                            <p className={cx('product-title')}>
                                                                {
                                                                    'Giày Cao Gót MWC 4470 - Giày Cao Gót Bít MũI, Quai Mảnh Chéo Đính Viền Đá Sang Chảnh, Cao Gót Đế Trụ Nhỏ Cao 7cm Thanh Lịch, Thời Trang.'
                                                                }
                                                            </p>
                                                            <p className={cx('product-price')}>
                                                                <span>{'250.000 đ'}</span>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <div className={cx('product-variant-color')}>
                                                        <ul>
                                                            <li>
                                                                <Link>
                                                                    <div
                                                                        className={cx('block-color')}
                                                                        style={{
                                                                            backgroundColor: getColorHex(),
                                                                        }}
                                                                    ></div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

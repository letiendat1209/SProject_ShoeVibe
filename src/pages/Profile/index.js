import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { Path } from '~/assets/icons';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('Wrapper')}>
            <section className={cx('page-breadcumb')}>
                <div className={cx('container')}>
                    <nav className={cx('breadcumb')}>
                        <Link>Trang chủ</Link>
                        <span className={cx('breadcumb-item')}> Thành viên</span>
                    </nav>
                </div>
            </section>
            <div className={cx('User-page')}>
                <div className={cx('container')}>
                    <div className={cx('profile-layout')}>
                        <div className={cx('profile-sidebar')}>
                            <div className={cx('sidebar-user')}>
                                <Link>
                                    <div className={cx('user-avt')}>
                                        <img src={images.user} alt="" />
                                    </div>
                                </Link>
                                <div className={cx('sidebar-info')}>
                                    <div className={cx('sidebar-info-name')}>Đạt</div>
                                    <div>
                                        <Link>
                                            <Path /> <p className={cx('sidebar-fix-name')}>Sửa hồ sơ</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('sidebar-menu')}></div>
                        </div>
                        <div className={cx('profile-main')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

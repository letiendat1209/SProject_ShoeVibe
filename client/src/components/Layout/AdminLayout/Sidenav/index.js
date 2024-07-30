import classNames from 'classnames/bind';
import styles from './Sidenav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHome, faCog, faTag, faPen, faUsers, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import { useState } from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidenav() {
    const [activeMenu, setActiveMenu] = useState('');

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? '' : menu);
    };

    return (
        <aside className={cx('side-menu')}>
            <div className={cx('container')}>
                <div className={cx('nav-brand')}>
                    <a href={'/admin'}>
                        <div className={cx('logo')}>
                            <img src={images.logo} className={cx('img-logo')} alt="MWC" />
                        </div>
                    </a>
                </div>
                <div className={cx('vertical-content')}>
                    <div
                        className={cx('menu-item', { active: activeMenu === 'dashboard' })}
                        onClick={() => toggleMenu('dashboard')}
                    >
                        <FontAwesomeIcon icon={faHome} className={cx('icon')} />
                        <Link to={'/admin'}>
                            <span className={cx('label')}>Dashboards</span>
                        </Link>
                    </div>
                    <div className={cx('menu-item')}>
                        <span className={cx('label')}>PAGES</span>
                    </div>
                    <div
                        className={cx('menu-item', { active: activeMenu === 'users' })}
                        onClick={() => toggleMenu('users')}
                    >
                        <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                        <span className={cx('label')}>Users</span>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('icon')} />
                    </div>
                    {activeMenu === 'users' && (
                        <ul className={cx('submenu')}>
                            <li className={cx('submenu-item')}>Overview</li>
                            <li className={cx('submenu-item')}>LeaderBoard</li>
                            <li className={cx('submenu-item')}>My Profile</li>
                            <li className={cx('submenu-item')}>Add User</li>
                        </ul>
                    )}

                    <div
                        className={cx('menu-item', { active: activeMenu === 'products' })}
                        onClick={() => toggleMenu('products')}
                    >
                        <FontAwesomeIcon icon={faTag} className={cx('icon')} />
                        <span className={cx('label')}>Products</span>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('icon')} />
                    </div>
                    {activeMenu === 'products' && (
                        <ul className={cx('submenu')}>
                            <Link to={'/admin/product'}>
                                <li className={cx('submenu-item')}>Products</li>
                            </Link>
                            <Link to={'/admin/createProduct'}>
                                <li className={cx('submenu-item')}>Add Product</li>
                            </Link>
                        </ul>
                    )}
                    <div
                        className={cx('menu-item', { active: activeMenu === 'orders' })}
                        onClick={() => toggleMenu('orders')}
                    >
                        <FontAwesomeIcon icon={faPen} className={cx('icon')} />
                        <span className={cx('label')}>Orders</span>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('icon')} />
                    </div>
                    {activeMenu === 'orders' && (
                        <ul className={cx('submenu')}>
                            <Link to={'/admin/order-list'}>
                                <li className={cx('submenu-item')}>Orders</li>
                            </Link>
                        </ul>
                    )}
                    <div
                        className={cx('menu-item', { active: activeMenu === 'Customers' })}
                        onClick={() => toggleMenu('customers')}
                    >
                        <FontAwesomeIcon icon={faUsers} className={cx('icon')} />
                        <span className={cx('label')}>Customers</span>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('icon')} />
                    </div>
                    {activeMenu === 'customers' && (
                        <ul className={cx('submenu')}>
                            <Link to={'/admin/customer-list'}>
                                <li className={cx('submenu-item')}>Customers</li>
                            </Link>
                            <li className={cx('submenu-item')}>Add Customers</li>
                        </ul>
                    )}
                    <div
                        className={cx('menu-item', { active: activeMenu === 'account' })}
                        onClick={() => toggleMenu('account')}
                    >
                        <span className={cx('label')}>Account</span>
                    </div>
                    <div
                        className={cx('menu-item', { active: activeMenu === 'authendication' })}
                        onClick={() => toggleMenu('authendications')}
                    >
                        <FontAwesomeIcon icon={faLock} className={cx('icon')} />
                        <span className={cx('label')}>Authendication</span>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('icon')} />
                    </div>
                    {activeMenu === 'authendications' && (
                        <ul className={cx('submenu')}>
                            <li className={cx('submenu-item')}>Reset Password</li>
                        </ul>
                    )}
                    <div
                        className={cx('menu-item', { active: activeMenu === 'more' })}
                        onClick={() => toggleMenu('more')}
                    >
                        <span className={cx('label')}>More</span>
                    </div>
                    <div
                        className={cx('menu-item', { active: activeMenu === 'more2' })}
                        onClick={() => toggleMenu('more2')}
                    >
                        <FontAwesomeIcon icon={faBars} className={cx('icon')} />
                        <span className={cx('label')}> Others</span>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('icon')} />
                    </div>
                    {activeMenu === 'more2' && (
                        <ul className={cx('submenu')}>
                            <li className={cx('submenu-item')}>New Categories</li>
                            <li className={cx('submenu-item')}>New Collection</li>
                            <li className={cx('submenu-item')}>Add more Size</li>
                            <li className={cx('submenu-item')}>Add more new Variant</li>
                            <li className={cx('submenu-item')}>New Coupon</li>
                        </ul>
                    )}
                    <div className={cx('menu-item')}>
                        <span className={cx('label')}>Apps</span>
                        <span className={cx('badge')}>Hot</span>
                    </div>
                </div>
                <div className={cx('vertical-footer')}>
                    <FontAwesomeIcon icon={faCog} className={cx('icon')} />
                    <span className={cx('label')}>Settings</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidenav;

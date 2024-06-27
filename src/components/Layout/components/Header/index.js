import classNames from 'classnames/bind';
//font

import styles from './Header.module.scss';
import images from '~/assets/images';
import { AccountIcon, CartIcon, SearchIcon } from '~/assets/icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header({ toggleCart }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={'/'}>
                        <img src={images.logo} className={cx('img-logo')} alt="MWC"></img>
                    </Link>
                </div>
                <div className={cx('menu')}>
                    <ul className={cx('menu-list')}>
                        <li>
                            <a href="">GIÁ ƯU ĐÃI</a>
                        </li>
                        <li>
                            <a href="">GIÀY NỮ</a>
                        </li>
                        <li>
                            <a href="">GIÀY NAM</a>
                        </li>
                        <li>
                            <a href="">GIÀY CẶP</a>
                        </li>
                        <li>
                            <a href="">BALO - TÚI</a>
                        </li>
                        <li>
                            <a href="">SALE 50%</a>
                        </li>
                        <li>
                            <a href="">SẢN PHẨM BÁN CHẠY</a>
                        </li>
                        <li>
                            <a href="">PHỤ KIỆN</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('search')}>
                    <div className={cx('search-box')}>
                        <input placeholder="Tìm kiếm" spellCheck={false}></input>
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <button className={cx('login')}>
                        <AccountIcon />
                    </button>
                    <button className={cx('cart')} onClick={toggleCart}>
                        <CartIcon />

                        <span className={cx('count-holder')}>
                            <p>2</p>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;

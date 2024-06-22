import classNames from 'classnames/bind';
//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

// import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="">
                        <img src={images.logo} className={cx('img-logo')} alt="MWC"></img>
                    </a>
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
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <button className={cx('login')}>
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button className={cx('cart')}>
                        <FontAwesomeIcon icon={faCartShopping} />
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

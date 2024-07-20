import classNames from 'classnames/bind';
//font

import styles from './Header.module.scss';
import images from '~/assets/images';
import { AccountIcon, CartIcon, SearchIcon } from '~/assets/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategory } from '~/services/categoryService';

const cx = classNames.bind(styles);

function Header({ toggleCart }) {
    // Danh sách danh mục
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategory();
                // Truy cập vào thuộc tính data của đối tượng trả về
                if (response && Array.isArray(response.data)) {
                    setCategories(response.data);
                } else {
                    console.error('Data is not an array:', response);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
    const handleAccountClick = () => {
        const user = localStorage.getItem('user');
        if (user) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    };

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
                        {Array.isArray(categories) &&
                            categories.map((category) => (
                                <li key={category.id}>
                                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                                </li>
                            ))}
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
                    <button onClick={handleAccountClick} className={cx('login')}>
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
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { getWishList } from '~/services/wishListService';
import { Link } from 'react-router-dom';

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

function WishList() {
    const [wishListItems, setWishListItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWishList = async () => {
            try {
                const userData = JSON.parse(localStorage.getItem('user'));
                if (userData && userData.user && userData.user.id) {
                    const response = await getWishList(userData.user.id);
                    setWishListItems(response);
                }
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch wishlist:', error);
                setLoading(false);
            }
        };

        fetchWishList();
    }, []);

    return (
        <div className={cx('content')}>
            <div className={cx('main-account')}>
                <div className={cx('account-header')}>
                    <h2>Danh sách yêu thích</h2>
                </div>
                <div className={cx('account-body')}>
                    <div className={cx('row')}>
                        {wishListItems.length > 0 ? (
                            wishListItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={cx('col-12 col-xs-custom-6 col-sm-4 col-lg-4 mb-32px', 'mb32')}
                                >
                                    <div className={cx('product-item')}>
                                        <div className={cx('product-img')}>
                                            <div className={cx('wish-list')}>
                                                <FontAwesomeIcon icon={faHeart} />
                                            </div>
                                            <img
                                                src={item.Product?.ProductImages[0]?.image_url || 'default_image_url'}
                                                alt={item.Product?.name || 'Product Image'}
                                            />
                                        </div>
                                        <Link to={`/product/${item.product_id}`}>
                                            <div className={cx('product-info')}>
                                                <p className={cx('product-title')}>
                                                    {item.Product?.name || 'Product Name'}
                                                </p>
                                                <p className={cx('product-price')}>
                                                    <span>
                                                        {new Intl.NumberFormat('vi-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(item.Product.price)}
                                                    </span>
                                                </p>
                                            </div>
                                        </Link>
                                        <div className={cx('product-variant-color')}>
                                            <ul>
                                                {item.Product?.ProductVariants &&
                                                    item.Product.ProductVariants.map((variant, index) => (
                                                        <li key={index}>
                                                            <Link>
                                                                <div
                                                                    className={cx('block-color')}
                                                                    style={{
                                                                        backgroundColor: getColorHex(
                                                                            variant.ProductColor?.color_name || 'ĐEN',
                                                                        ),
                                                                    }}
                                                                ></div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Danh sách yêu thích của bạn hiện đang trống.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishList;

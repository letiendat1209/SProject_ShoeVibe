import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CategoryItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CategoryItem({ data }) {
    const getColorHex = (colorName) => {
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
            // Thêm các màu khác ở đây
        };
        return colorMap[colorName] || '#000000'; // Mặc định là đen nếu không tìm thấy
    };

    // Loại bỏ các màu trùng lặp
    const uniqueColors = [...new Set(data.colors)];

    return (
        <div className={cx('col-12 col-xs-custom-6 col-sm-4 col-lg-4 mb-32px', 'mb32')}>
            <div className={cx('product-item')}>
                <Link to={`/product/${data.id}`}>
                    <div className={cx('product-img')}>
                        <div className={cx('wish-list')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <img src={data.imageUrl} alt="" />
                    </div>
                    <div className={cx('product-info')}>
                        <p className={cx('product-title')}>{data.title}</p>
                        <p className={cx('product-price')}>
                            <span>{data.price}</span>
                        </p>
                    </div>
                </Link>
                <div className={cx('product-variant-color')}>
                    <ul>
                        {uniqueColors.map((color, index) => (
                            <li key={index}>
                                <Link>
                                    <div
                                        className={cx('block-color')}
                                        style={{ backgroundColor: getColorHex(color) }}
                                    ></div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

CategoryItem.propTypes = {
    data: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default CategoryItem;

import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CategoryItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CategoryItem({ data }) {
    return (
        <div className={cx('col-12 col-xs-custom-6 col-sm-4 col-lg-4 mb-32px', 'mb32')}>
            <div className={cx('product-item')}>
                <div className={cx('product-img')}>
                <div className={cx('wish-list')}>
                    <FontAwesomeIcon icon={faHeart}/>
                </div>
                    <img src={data.imageUrl} alt="" />
                </div>
                <Link>
                    <div className={cx('product-info')}>
                        <p className={cx('product-title')}>{data.title}</p>
                        <p className={cx('product-price')}>
                            <span>{data.price}</span>
                        </p>
                    </div>
                </Link>
                <div className={cx('product-variant-color')}>
                    <ul>
                        {data.colors.map((color, index) => (
                            <li key={index}>
                                <Link>
                                    <div className={cx('block-color')} style={{ backgroundColor: color }}></div>
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

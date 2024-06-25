import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../../pages/Product_Section/ProductSection.module.scss';


const cx = classNames.bind(styles);

const ProductItem = ({ data }) => {
    return (
        <div className={cx('col-md-3', 'col-sm-6')}>
            <div className={cx('product-item')}>
                <div className={cx('product-img')}>
                    <img src={data.imageUrl} alt={data.title} />
                </div>
                <a href={data.link}>
                    <div className={cx('product-info')}>
                        <p className={cx('product-title')}>{data.title}</p>
                        <p className={cx('product-price')}>
                            <span>{data.price}</span>
                        </p>
                    </div>
                </a>
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
};

ProductItem.propTypes = {
    data: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ProductItem;
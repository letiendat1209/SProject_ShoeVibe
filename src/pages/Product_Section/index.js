import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ProductSection.module.scss';

const cx = classNames.bind(styles);

function ProductSection() {
    return (
        <div className={cx('home-section')}>
            <div className={cx('container-fluid')}>
                <div className={cx('box-item')}>
                    <h2 className={cx('section-title')}>
                        <Link> SẢN PHẨM BÁN CHẠY</Link>
                    </h2>
                    <div className={cx('section-inner')}>
                        <div className={cx('row')}>
                            <div className={cx('col')}>
                                <div className={cx('product-item')}>
                                    <div className={cx('product-img')}>
                                        <img
                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <Link>
                                        <div className={cx('product-info')}>
                                            <p className={cx('product-title')}>
                                                Giày Thể Thao Nữ MWC A160 - Giày Thể Thao Nữ Cao 4cm, Kiểu Dáng Sneaker
                                                Năng Động, Trẻ Trung, Thời Trang.
                                            </p>
                                            <p className={cx('product-price')}>
                                                <span>275,000đ</span>
                                            </p>
                                        </div>
                                    </Link>
                                    <div className={cx('product-variant-color')}>
                                        <ul>
                                            <li>
                                                <Link>
                                                    <div className={cx('block-color')}></div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link>
                                                    <div className={cx('block-color')}></div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col')}>
                                <div className={cx('product-item')}>
                                    <div className={cx('product-img')}>
                                        <img
                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <a href="">
                                        <div className={cx('product-info')}>
                                            <p className={cx('product-title')}>
                                                Giày Thể Thao Nữ MWC A160 - Giày Thể Thao Nữ Cao 4cm, Kiểu Dáng Sneaker
                                                Năng Động, Trẻ Trung, Thời Trang.
                                            </p>
                                            <p className={cx('product-price')}>
                                                <span>275,000đ</span>
                                            </p>
                                        </div>
                                    </a>
                                    <div className={cx('product-variant-color')}>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className={cx('block-color')}></div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className={cx('block-color')}></div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col')}>
                                <div className={cx('product-item')}>
                                    <div className={cx('product-img')}>
                                        <img
                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <a href="">
                                        <div className={cx('product-info')}>
                                            <p className={cx('product-title')}>
                                                Giày Thể Thao Nữ MWC A160 - Giày Thể Thao Nữ Cao 4cm, Kiểu Dáng Sneaker
                                                Năng Động, Trẻ Trung, Thời Trang.
                                            </p>
                                            <p className={cx('product-price')}>
                                                <span>275,000đ</span>
                                            </p>
                                        </div>
                                    </a>
                                    <div className={cx('product-variant-color')}>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className={cx('block-color')}></div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className={cx('block-color')}></div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col')}>
                                <div className={cx('product-item')}>
                                    <div className={cx('product-img')}>
                                        <img
                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <a href="">
                                        <div className={cx('product-info')}>
                                            <p className={cx('product-title')}>
                                                Giày Thể Thao Nữ MWC A160 - Giày Thể Thao Nữ Cao 4cm, Kiểu Dáng Sneaker
                                                Năng Động, Trẻ Trung, Thời Trang.
                                            </p>
                                            <p className={cx('product-price')}>
                                                <span>275,000đ</span>
                                            </p>
                                        </div>
                                    </a>
                                    <div className={cx('product-variant-color')}>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <div className={cx('block-color')}></div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className={cx('block-color')}></div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('view-more')}>
                        <Link>XEM TẤT CẢ</Link>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    );
}

export default ProductSection;

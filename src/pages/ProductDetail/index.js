import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import InfoFooter from '../InfoFooter';
import Footer from '../Footer';

const cx = classNames.bind(styles);

function ProductDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('site-content')}>
                <div className={cx('product-detail-layout')}>
                    <div className={cx('container-fluid', 'pd12')}>
                        <div className={cx('product-detail')}>
                            <div className={cx('product-detail-thumb')}>
                                <div className={cx('product-main-thumb')}>
                                    <div className={cx('thumb-tag')}>
                                        <div className={cx('wish-list')}></div>
                                        <div className={cx('sale-tag')}></div>
                                        <div className={cx('main-thumb-img')}>
                                            <img
                                                src="https://img.mwc.com.vn/giay-thoi-trang?w=1150&h=0&FileInput=/Resources/Product/2024/06/14/z5537265618984_5009ea12713c7e7b9692fe070ae78c26.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('product-mini-thumb')}>
                                    <div className={cx('slick-slider')}>
                                        <div className={cx('slick-list')}>
                                            <div className={cx('slick-item')}>
                                                <div className={cx('item-thumb')}>
                                                    <Link>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                                <div className={cx('item-thumb')}>
                                                    <Link>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                                <div className={cx('item-thumb')}>
                                                    <Link>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                                <div className={cx('item-thumb')}>
                                                    <Link>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                                <div className={cx('item-thumb')}>
                                                    <Link>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('product-detail-main')}>
                                <h1 className={cx('product-name')}>
                                    Dép cao gót MWC G050 - Dép Cao Gót Đế Đúc, Guốc Cao Gót 8cm Bản Ngang Đính Khóa Thời
                                    Trang
                                </h1>
                                <div className={cx('product-top-info')}>
                                    <div className={cx('product-rating')}>
                                        <div className={cx('star')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className={cx('star')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className={cx('star')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className={cx('star')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className={cx('star')}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </div>
                                    <div className={cx('product-review')}>124 Đánh giá</div>
                                    <div className={cx('product-like')}>917 Số lượng thích</div>
                                </div>
                                <p className={cx('product-price')}>195.000 đ</p>
                                <p className={cx('sale-des')}></p>
                                <div className={cx('detail-main-bottom')}>
                                    <div className={cx('product-bottom-info')}>
                                        <div className={cx('product-option')}>
                                            <div className={cx('option-label')}>Màu</div>
                                            <div className={cx('color-option')}>
                                                <ul></ul>
                                            </div>
                                        </div>
                                        <div className={cx('product-option')}>
                                            <div className={cx('option-label')}>Kích thước</div>
                                            <div className={cx('size-option')}>
                                                <a href="">35</a>
                                                <a href="">36</a>
                                                <a href="">37</a>
                                                <a href="">38</a>
                                                <a href="">39</a>
                                            </div>
                                        </div>
                                        <div className={cx('size-guide-link')} href="">
                                            Hướng dẫn tính size
                                        </div>
                                        {/*ở đây web gốc có bảng hướng dẫn tính size khi click vào thẻ a ở trên*/}
                                        <div className={cx('fild-local-store')} to={'/'}>
                                            {/*icon*/}
                                            Tìm kiếm sản phẩm tại showroom
                                        </div>
                                        <div className={cx('product-cart-action')}>
                                            <button className={cx('btn-buy')}>Mua ngay</button>
                                            <button className={cx('btn-add-to-cart')}>Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('product-policy')}>
                                    <div className={cx('box-policy')}>
                                        <div className={cx('policy-item')}>
                                            <div className={cx('policy-icon')}>
                                                <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                            </div>
                                            <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                        </div>
                                        <div className={cx('policy-item')}>
                                            <div className={cx('policy-icon')}>
                                                <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                            </div>
                                            <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                        </div>
                                        <div className={cx('policy-item')}>
                                            <div className={cx('policy-icon')}>
                                                <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                            </div>
                                            <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                        </div>
                                        <div className={cx('policy-item')}>
                                            <div className={cx('policy-icon')}>
                                                <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                            </div>
                                            <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                        </div>
                                        <div className={cx('policy-item')}>
                                            <div className={cx('policy-icon')}>
                                                <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                            </div>
                                            <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                        </div>
                                        <div className={cx('policy-item')}>
                                            <div className={cx('policy-icon')}>
                                                <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                            </div>
                                            <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('row')}></div>
                        <div className={cx('row')}></div>
                    </div>
                </div>
            </div>
            <InfoFooter />
            <Footer />
        </div>
    );
}

export default ProductDetail;

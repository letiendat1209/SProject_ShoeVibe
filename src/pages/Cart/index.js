import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('page-breadcumb')}>
                <div className={cx('container')}>
                    <nav className={cx('breadcumb')}>
                        <Link>Trang chủ</Link>
                        <span className={cx('breadcumb-item')}> Giỏ hàng</span>
                    </nav>
                </div>
            </section>
            <div className={cx('cart-page')}>
                <div className={cx('container pd12')}>
                    <div className={cx('cart-list')}>
                        <div className={cx('cart-list-header')}>
                            <div className={cx('header-title')}>Sản phẩm</div>
                            <div className={cx('header-price')}>Đơn giá</div>
                            <div className={cx('header-quantity')}>Số lượng</div>
                            <div className={cx('header-amount')}>Số tiền</div>
                            <div className={cx('header-action')}>Thao tác</div>
                        </div>
                        <div className={cx('cart-item-outer')}>
                            <div className={cx('cart-item-body')}>
                                <div className={cx('cart-item')}>
                                    <div className={cx('cart-inner')}>
                                        <div className={cx('item-product')}>
                                            <div className={cx('product-img')}>
                                                <img
                                                    src="https://img.mwc.com.vn/giay-thoi-trang?w=80&h=80&FileInput=/Resources/Product/2023/11/17/z4888729003157_6ac53a7ad5c1fc9f9c1729c08856f524.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className={cx('product-info')}>
                                                <Link className={cx('product-name')}>
                                                    Giày Thể Thao Nam MWC NATT- M668 Giày Thể Thao Nam Vải Dệt Thoáng
                                                    Khí, Sneaker Nam Cổ Thấp Năng Động Cá Tính
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={cx('product-options')}>
                                            <p>Màu: xám, Kích thước: 40</p>
                                        </div>
                                        <div className={cx('item-prices')}>
                                            <div>
                                                <span className={cx('price-old')}>345.000 đ</span>
                                                <span className={cx('price')}>310.000 đ</span>
                                            </div>
                                        </div>
                                        <div className={cx('item-quantity')}>
                                            <div className={cx('quantity-options')}>
                                                <button className={cx('btn-minus')}>-</button>
                                                <input type="text" className={cx('btn-input')}></input>
                                                <button className={cx('btn-plus')}>+</button>
                                            </div>
                                        </div>
                                        <div className={cx('item-total')}>
                                            <span>310.500 đ</span>
                                        </div>
                                        <div className={cx('item-action')}>
                                            <button>Xóa</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('cart-item-body')}>
                                <div className={cx('cart-item')}>
                                    <div className={cx('cart-inner')}>
                                        <div className={cx('item-product')}>
                                            <div className={cx('product-img')}>
                                                <img
                                                    src="https://img.mwc.com.vn/giay-thoi-trang?w=80&h=80&FileInput=/Resources/Product/2023/11/17/z4888729003157_6ac53a7ad5c1fc9f9c1729c08856f524.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className={cx('product-info')}>
                                                <Link className={cx('product-name')}>
                                                    Giày Thể Thao Nam MWC NATT- M668 Giày Thể Thao Nam Vải Dệt Thoáng
                                                    Khí, Sneaker Nam Cổ Thấp Năng Động Cá Tính
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={cx('product-options')}>
                                            <p>Màu: xám, Kích thước: 40</p>
                                        </div>
                                        <div className={cx('item-prices')}>
                                            <div>
                                                <span className={cx('price-old')}>345.000 đ</span>
                                                <span className={cx('price')}>310.000 đ</span>
                                            </div>
                                        </div>
                                        <div className={cx('item-quantity')}>
                                            <div className={cx('quantity-options')}>
                                                <button className={cx('btn-minus')}>-</button>
                                                <input type="text" className={cx('btn-input')}></input>
                                                <button className={cx('btn-plus')}>+</button>
                                            </div>
                                        </div>
                                        <div className={cx('item-total')}>
                                            <span>310.500 đ</span>
                                        </div>
                                        <div className={cx('item-action')}>
                                            <button>Xóa</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('line-space')}></div>
                    <div className={cx('row cart-total')}>
                        <div className={cx('col-6')}>
                            <div>
                                <div className={cx('final-top')}>
                                    <FontAwesomeIcon icon={faTicket} color="red" />
                                    <p>Mã coupon</p>
                                    <div className={cx('top-space')}></div>
                                    <span className={cx('top-code')}>
                                        <select className={cx('form-select')}>
                                            <option>--Chọn--</option>
                                        </select>
                                    </span>
                                </div>
                                <div className={cx('final-bottom')}>
                                    <FontAwesomeIcon icon={faTicket} color="red" />
                                    <p className={cx('mg')}>Sử dụng điểm (Điểm của bạn: )</p>
                                    <div className={cx('top-space')}></div>
                                    <span className={cx('top-code')}>
                                        <input type="text" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-6')}>
                            <div className={cx('total-price')}>
                                <span>Tổng tiền hàng</span>
                                <span>423.000 đ</span>
                            </div>
                            <div className={cx('total-price')}>
                                <span>Giảm giá sản phẩm</span>
                                <span>- 00 đ</span>
                            </div>
                            <div className={cx('total-price')}>
                                <span>Giảm giá coupon</span>
                                <span>- 0 đ</span>
                            </div>
                            <div className={cx('total-price')}>
                                <span>Phí vận chuyển</span>
                                <span>00 đ</span>
                            </div>
                            <div className={cx('line-space', 'pd')} />
                            <div className={cx('total-price')}>
                                <span className={cx('red')}>TỔNG </span>
                                <span className={cx('red')}>0 đ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col-12')}>
                            <strong> THÔNG TIN VẬN CHUYỂN </strong>
                            <Link>
                                <p className={cx('change-address')}>Thay đổi thông tin nhận hàng</p>
                            </Link>
                        </div>
                    </div>
                    <div className={cx('infor-user')}>
                        <div className={cx('r-iu')}>
                            <span>Người nhận: </span>
                            <span></span>
                        </div>
                        <div className={cx('r-iu')}>
                            <span>Điện thoại: </span>
                            <span></span>
                        </div>
                        <div className={cx('r-iu')}>
                            <span>Địa chỉ :</span>
                            <span></span>
                        </div>
                    </div>
                    <div className={cx('address-gues')}></div>
                    <div className={cx('Order')}>
                        <button className={cx('btn-order')}>
                            <span>Đặt hàng</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

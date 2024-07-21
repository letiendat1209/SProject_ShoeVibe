import React, { useState } from 'react';
import { useCart } from '~/services/CartContext'; // Adjust the path if necessary
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import LocationSelector from '~/components/LocationSelector'; // Import the new component

const cx = classNames.bind(styles);

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const [location, setLocation] = useState({ cityId: '', districtId: '', wardId: '' });

    const handleRemove = (uniqueId) => {
        removeFromCart(uniqueId);
    };

    const handleQuantityChange = (uniqueId, quantity) => {
        if (quantity > 0) {
            updateQuantity(uniqueId, quantity);
        } else {
            handleRemove(uniqueId);
        }
    };

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation);
    };

    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className={cx('wrapper')}>
            <section className={cx('page-breadcumb')}>
                <div className={cx('container')}>
                    <nav className={cx('breadcumb')}>
                        <Link to="/">Trang chủ</Link>
                        <span className={cx('breadcumb-item')}> Giỏ hàng</span>
                    </nav>
                </div>
            </section>
            <div className={cx('cart-page')}>
                <div className={cx('container', 'pd12')}>
                    <div className={cx('cart-list')}>
                        <div className={cx('cart-list-header')}>
                            <div className={cx('header-title')}>Sản phẩm</div>
                            <div className={cx('header-price')}>Đơn giá</div>
                            <div className={cx('header-quantity')}>Số lượng</div>
                            <div className={cx('header-amount')}>Số tiền</div>
                            <div className={cx('header-action')}>Thao tác</div>
                        </div>
                        {cart.map((item) => (
                            <div key={item.uniqueId} className={cx('cart-item-outer')}>
                                <div className={cx('cart-item-body')}>
                                    <div className={cx('cart-item')}>
                                        <div className={cx('cart-inner')}>
                                            <div className={cx('item-product')}>
                                                <div className={cx('product-img')}>
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <div className={cx('product-info')}>
                                                    <Link className={cx('product-name')}>{item.name}</Link>
                                                </div>
                                            </div>
                                            <div className={cx('product-options')}>
                                                <p>
                                                    Màu: {item.color}, Kích thước: {item.size}
                                                </p>
                                            </div>
                                            <div className={cx('item-prices')}>
                                                <div>
                                                    <span className={cx('price-old')}>{item.oldPrice} đ</span>
                                                    <span className={cx('price')}>
                                                        {new Intl.NumberFormat('vi-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(item.price)}{' '}
                                                        đ
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={cx('item-quantity')}>
                                                <div className={cx('quantity-options')}>
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(item.uniqueId, item.quantity - 1)
                                                        }
                                                        className={cx('btn-minus')}
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="text"
                                                        className={cx('btn-input')}
                                                        value={item.quantity}
                                                        readOnly
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(item.uniqueId, item.quantity + 1)
                                                        }
                                                        className={cx('btn-plus')}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('item-total')}>
                                                <span>
                                                    {new Intl.NumberFormat('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }).format(item.quantity * item.price)}
                                                </span>
                                            </div>
                                            <div className={cx('item-action')}>
                                                <button onClick={() => handleRemove(item.uniqueId)}>Xóa</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('line-space')}></div>
                    <div className={cx('row', 'cart-total')}>
                        <div className={cx('col-6')}>
                            <div>
                                <div className={cx('final-top')}>
                                    <FontAwesomeIcon icon={faTicket} color="red" />
                                    <p>Mã coupon</p>
                                    <div className={cx('top-space')}></div>
                                    <span className={cx('top-code')}>
                                        <select className={cx('form-select')}>
                                            <option>--Chọn--</option>
                                            <option>Trống</option>
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
                                <span>{totalPrice} đ</span>
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
                                <span className={cx('red')}>{totalPrice} đ</span>
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
                    <div className={cx('info-input', 'row')}>
                        <div className={cx('col-md-4')}>
                            <div className={cx('form-group')}>
                                <div className={cx('group-items')}>
                                    <div className={cx('form-input')}>
                                        <input type="text" placeholder="Họ tên" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-4')}>
                            <div className={cx('form-group')}>
                                <div className={cx('group-items')}>
                                    <div className={cx('form-input')}>
                                        <input type="text" placeholder="SĐT" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-12')}>
                            <div className={cx('form-group')}>
                                <div className={cx('group-items')}>
                                    <div className={cx('form-input')}>
                                        <textarea type="text" rows="4" cols="50" placeholder="Địa chỉ" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-4')}>
                            <div className={cx('form-group')}>
                                <div className={cx('group-items')}>
                                    <div className={cx('form-input')}>
                                        <LocationSelector onLocationChange={handleLocationChange} />
                                    </div>
                                </div>
                            </div>
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

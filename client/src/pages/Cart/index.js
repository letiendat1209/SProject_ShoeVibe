import React, { useState } from 'react';
import { useCart } from '~/services/CartContext';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import LocationSelector from '~/components/LocationSelector';
import { createOrder } from '~/services/order';

const cx = classNames.bind(styles);

// Helper function to safely format currency
const formatCurrency = (value) => {
    return (value || 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
    const [location, setLocation] = useState({ cityId: '', districtId: '', wardId: '' });
    const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', address: '' });
    const [coupon, setCoupon] = useState('');
    const [points, setPoints] = useState(0);
    const nav = useNavigate();

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

    const handleCustomerInfoChange = (e) => {
        setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const userId = userData ? userData.user.id : null;
            const orderData = {
                user_id: userId,
                items: cart.map((item) => ({
                    product_id: item.id,
                    color_id: item.color_id, // Sử dụng colorId thay vì color
                    size_id: item.size_id, // Sử dụng sizeId thay vì size
                    quantity: item.quantity,
                    price: item.price,
                })),
                shippingAddress: { ...customerInfo, ...location },
                coupon,
                points,
            };
            console.log('Order Data:', orderData); // Log data being sent
            const response = await createOrder(orderData);
            alert('Đặt hàng thành công!');
            clearCart();
            nav('/', { state: { orderId: response.orderId } });
        } catch (error) {
            console.error('Lỗi khi đặt hàng:', error);
            alert('Đặt hàng thất bại: ' + (error.response?.data?.details || 'Vui lòng thử lại sau.'));
        }
    };

    const totalPrice = cart.reduce((total, item) => total + (item.quantity || 0) * (item.price || 0), 0);
    const discount = 0; // Calculate based on coupon and points
    const shippingFee = 0; // Calculate based on location and total price
    const finalTotal = totalPrice - discount + shippingFee;

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
                                                    <span className={cx('price-old')}>
                                                        {formatCurrency(item.oldPrice)}
                                                    </span>
                                                    <span className={cx('price')}>{formatCurrency(item.price)}</span>
                                                </div>
                                            </div>
                                            <div className={cx('item-quantity')}>
                                                <div className={cx('quantity-options')}>
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                item.uniqueId,
                                                                (item.quantity || 0) - 1,
                                                            )
                                                        }
                                                        className={cx('btn-minus')}
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="text"
                                                        className={cx('btn-input')}
                                                        value={item.quantity || 0}
                                                        readOnly
                                                    />
                                                    <button
                                                        onClick={() =>
                                                            handleQuantityChange(
                                                                item.uniqueId,
                                                                (item.quantity || 0) + 1,
                                                            )
                                                        }
                                                        className={cx('btn-plus')}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={cx('item-total')}>
                                                <span>{formatCurrency((item.quantity || 0) * (item.price || 0))}</span>
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
                                        <input
                                            type="text"
                                            value={coupon}
                                            onChange={(e) => setCoupon(e.target.value)}
                                            placeholder="Nhập mã coupon"
                                        />
                                    </span>
                                </div>
                                <div className={cx('final-bottom')}>
                                    <FontAwesomeIcon icon={faTicket} color="red" />
                                    <p className={cx('mg')}>Sử dụng điểm (Điểm của bạn: 1000)</p>
                                    <div className={cx('top-space')}></div>
                                    <span className={cx('top-code')}>
                                        <input
                                            type="number"
                                            value={points}
                                            onChange={(e) => setPoints(Number(e.target.value))}
                                            max={1000}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-6')}>
                            <div className={cx('total-price')}>
                                <span>Tổng tiền hàng</span>
                                <span>{formatCurrency(totalPrice)}</span>
                            </div>
                            <div className={cx('total-price')}>
                                <span>Giảm giá sản phẩm</span>
                                <span>- {formatCurrency(discount)}</span>
                            </div>
                            <div className={cx('total-price')}>
                                <span>Phí vận chuyển</span>
                                <span>{formatCurrency(shippingFee)}</span>
                            </div>
                            <div className={cx('line-space', 'pd')} />
                            <div className={cx('total-price')}>
                                <span className={cx('red')}>TỔNG </span>
                                <span className={cx('red')}>{formatCurrency(finalTotal)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col-12')}>
                            <strong> THÔNG TIN VẬN CHUYỂN </strong>
                        </div>
                    </div>
                    <div className={cx('info-input', 'row')}>
                        <div className={cx('col-md-4')}>
                            <div className={cx('form-group')}>
                                <div className={cx('group-items')}>
                                    <div className={cx('form-input')}>
                                        <input
                                            type="text"
                                            name="name"
                                            value={customerInfo.name}
                                            onChange={handleCustomerInfoChange}
                                            placeholder="Họ tên"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-4')}>
                            <div className={cx('form-group')}>
                                <div className={cx('group-items')}>
                                    <div className={cx('form-input')}>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={customerInfo.phone}
                                            onChange={handleCustomerInfoChange}
                                            placeholder="SĐT"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col-md-12')}>
                            <div className={cx('form-group')}>
                                <div className={cx('group-items')}>
                                    <div className={cx('form-input')}>
                                        <textarea
                                            name="address"
                                            value={customerInfo.address}
                                            onChange={handleCustomerInfoChange}
                                            rows="4"
                                            cols="50"
                                            placeholder="Địa chỉ / Số nhà"
                                        />
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
                    <div className={cx('Order')}>
                        <button className={cx('btn-order')} onClick={handlePlaceOrder}>
                            <span>Đặt hàng</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

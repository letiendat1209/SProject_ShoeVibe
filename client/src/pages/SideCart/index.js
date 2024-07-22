import classNames from 'classnames/bind';
import styles from './SideCart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CartItem from '~/components/CartItem';
import { useCart } from '~/services/CartContext';

const cx = classNames.bind(styles);

function SideCart({ isCartOpen, toggleCart }) {
    const { cart, removeFromCart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className={cx('wrapper', { open: isCartOpen })}>
            <div className={cx('side-cart')}>
                <div className={cx('heading')}>
                    <span className={cx('heading-title')}>Giỏ Hàng</span>
                    <div className={cx('heading-close')} onClick={toggleCart}>
                        <Link>
                            <FontAwesomeIcon icon={faClose} /> Đóng
                        </Link>
                    </div>
                </div>
                <div className={cx('shopping-cart')}>
                    <div className={cx('shopping-cart-content')}>
                        {cart.map((item) => (
                            <CartItem key={item.uniqueId} item={item} onRemove={removeFromCart} />
                        ))}

                        <div className={cx('sub-total')}>
                            <strong>Tạm tính: </strong>
                            <span>{totalPrice.toLocaleString()}đ</span>
                        </div>
                        <div className={cx('menu-cart')}>
                            <Link to={'/cart'}>
                                <span className={cx('to-cart')}>Xem giỏ hàng</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isCartOpen && <div className={cx('overlay')} onClick={toggleCart}></div>}
        </div>
    );
}

export default SideCart;

import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);

function CartItem({ item, onRemove }) {
    const { name, image, size, color, quantity, price } = item;
    const totalItems = Math.ceil(quantity * price);
    return (
        <div className={cx('cart-item')}>
            <div className={cx('product-img')}>
                <img src={image} alt="" />
            </div>
            <div className={cx('product-name')}>
                <span className={cx('item-name')}>{name}</span>
                <ul className={cx('variation')}>
                    <li className={cx('size')}>
                        <span>Kích cỡ:</span>
                        <span> {size}</span>
                    </li>
                    <li className={cx('color')}>
                        <span>Màu sắc:</span>
                        <span> {color}</span>
                    </li>
                </ul>
            </div>
            <div className={cx('product-price')}>
                <span className={cx('quantily')}>
                    {quantity} x{' '}
                    <span className={cx('price-amount')}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalItems)}
                    </span>
                </span>
            </div>
            <button className={cx('product-remove')} onClick={() => onRemove(item.uniqueId)}>
                <FontAwesomeIcon icon={faClose} />
            </button>
        </div>
    );
}

export default CartItem;

import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CartItem() {
    return (
        <div className={cx('cart-item')}>
            <div className={cx('product-img')}>
                <img
                    src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/05/15/z5442546927024_ef02fc487da56dbbb75586b28e68771e.jpg"
                    alt=""
                />
            </div>
            <div className={cx('product-name')}>
                <span className={cx('item-name')}>
                    Giày cao gót MWC G055 - Sandal Cao Gót 5cm Quai Dây Mãnh Ngang Chéo Thanh Lịch, Thời Trang.
                </span>
                <ul className={cx('variation')}>
                    <li className={cx('size')}>
                        <span>Kích cỡ:</span>
                        <span> 35</span>
                    </li>
                    <li className={cx('color')}>
                        <span>Màu sắc:</span>
                        <span> Đen</span>
                    </li>
                </ul>
            </div>
            <div className={cx('product-price')}>
                <span className={cx('quantily')}>
                    1 x <span className={cx('price-amount')}>134.000đ</span>
                </span>
            </div>
            <div className={cx('product-remove')}>
                <FontAwesomeIcon icon={faClose} />
            </div>
        </div>
    );
}

export default CartItem;

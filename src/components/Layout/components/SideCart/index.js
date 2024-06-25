import classNames from 'classnames/bind';
import styles from './SideCart.module.scss';

const cx = classNames.bind(styles);

function SideCart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('Title')}> Chưa biết làm giỏ mini =((</div>
        </div>
    );
}

export default SideCart;

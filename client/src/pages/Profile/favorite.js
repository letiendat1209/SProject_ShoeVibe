import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function WishList() {
    return (
        <div className={cx('content')}>
            <h2>Wish List</h2>
        </div>
    );
}

export default WishList;

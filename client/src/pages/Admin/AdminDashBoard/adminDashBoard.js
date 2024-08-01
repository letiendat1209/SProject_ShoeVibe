import classNames from 'classnames/bind';
import styles from './adminDashBoard.module.scss';

const cx = classNames.bind(styles);

function AdminDashboard() {
    return (
        <div className={cx('content')}>
            <div className={cx('header')}>
                <h2>DashBoard</h2>
            </div>
            <div className={cx('body')}>
                
            </div>
        </div>
    );
}

export default AdminDashboard;

import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';

import Header from './Header';
import Sidenav from './Sidenav';

const cx = classNames.bind(styles);
function AdminLayout({ children }) {
    return (
        <div>
            <Sidenav />
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}
export default AdminLayout;

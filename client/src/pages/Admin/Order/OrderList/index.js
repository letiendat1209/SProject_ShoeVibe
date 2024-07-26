import classNames from 'classnames/bind';
import styles from './OrderList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DataTable from './Datatable/DataTable';

const cx = classNames.bind(styles);

function OrderList() {
    return (
        <div className={cx('content')}>
            <div className={cx('page-header')}>
                <div className={cx('row', 'custom-row')}>
                    <div className={cx('col-sm', 'custom-col')}>
                        <h1 className={cx('page-header-title')}>
                            Orders
                            <span className={cx('badge-custom')}>102,251</span>
                        </h1>
                        <h4>
                            <a href="">
                                <FontAwesomeIcon icon={faDownload} color="#677788" /> Export
                            </a>
                            <a href=""> More option </a>
                        </h4>
                    </div>
                </div>
                <div className={cx('nav-scroller')}>
                    <ul className={cx('nav-tabs')}>
                        <li className={cx('nav-items')}>
                            <Link className={cx('nav-link')}>All Orders</Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link className={cx('nav-link')}>Paid</Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link className={cx('nav-link')}>UnPaid</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('data-table')}>
                <div className={cx('page-content')}>
                    <div className={cx('content-header')}></div>
                    <div className={cx('table')}>
                        <DataTable /> {/* Include DataTable component */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderList;

import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CustomerList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import DataTable from './Datatable/DataTable';
import { getAllUsers } from '~/services/userServices';

const cx = classNames.bind(styles);

function CustomerList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const totalUsers = Math.ceil(data.length);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllUsers();
                setData(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);
    return (
        <div className={cx('content')}>
            <div className={cx('page-header')}>
                <div className={cx('row', 'custom-row')}>
                    <div className={cx('col-sm', 'custom-col')}>
                        <h1 className={cx('page-header-title')}>
                            Customer
                            <span className={cx('badge-custom')}>{totalUsers}</span>
                        </h1>
                        <h4>
                            <Link>
                                <FontAwesomeIcon icon={faDownload} color="#677788" /> Export
                            </Link>
                            <Link> More option </Link>
                        </h4>
                    </div>
                </div>
                <div className={cx('nav-scroller')}>
                    <ul className={cx('nav-tabs')}>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'all' })}
                                onClick={() => handleFilterChange('all')}
                            >
                                All Users
                            </Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'admin' })}
                                onClick={() => handleFilterChange('admin')}
                            >
                                Admin
                            </Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'seller' })}
                                onClick={() => handleFilterChange('seller')}
                            >
                                Seller
                            </Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'customer' })}
                                onClick={() => handleFilterChange('customer')}
                            >
                                Customer
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('data-table')}>
                <div className={cx('page-content')}>
                    <div className={cx('content-header')}></div>
                    <div className={cx('table')}>
                        <DataTable filter={filter} />
                        {/* Include DataTable component with filter prop */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerList;

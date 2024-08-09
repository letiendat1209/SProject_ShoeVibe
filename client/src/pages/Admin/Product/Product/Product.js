import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport, faFileImport } from '@fortawesome/free-solid-svg-icons';
import DataTable from './DataTable/DataTable'; // Assume DataTable component is correctly imported
import { useEffect, useState } from 'react';
import { getProduct } from '~/services/productService';

const cx = classNames.bind(styles);

function Product() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const totalProducts = Math.ceil(data.length);
    const [filter, setFilter] = useState('all');
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getProduct();
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
                <div className={cx('row', 'c-row')}>
                    <div className={cx('col-md-10')}>
                        <h1 className={cx('page-header-title')}>
                            Products <span className={cx('badge')}>Tổng {totalProducts}</span>
                        </h1>
                        <div className={cx('mt-2')}>
                            <Link className={cx('mt-item')}>
                                <FontAwesomeIcon icon={faFileExport} /> Export
                            </Link>
                            <Link className={cx('mt-item')}>
                                <FontAwesomeIcon icon={faFileImport} /> Import
                            </Link>
                        </div>
                    </div>
                    <div className={cx('col-md-2', 'c-col')}>
                        <Link to={'/admin/createProduct'}>
                            <button className={cx('btn')}>Add product</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('nav-scroller')}>
                    <ul className={cx('nav-tabs')}>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'all' })}
                                onClick={() => handleFilterChange('all')}
                            >
                                All Orders
                            </Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'GIÀY NAM' })}
                                onClick={() => handleFilterChange('GIÀY NAM')}
                            >
                                GIÀY NAM
                            </Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'GIÀY NỮ' })}
                                onClick={() => handleFilterChange('GIÀY NỮ')}
                            >
                                GIÀY NỮ
                            </Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'GIÀY CẶP' })}
                                onClick={() => handleFilterChange('GIÀY CẶP')}
                            >
                                GIÀY CẶP
                            </Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'BALO-TÚI' })}
                                onClick={() => handleFilterChange('BALO-TÚI')}
                            >
                                BALO-TÚI
                            </Link>
                        </li>
                        <li className={cx('nav-items')}>
                            <Link
                                className={cx('nav-link', { active: filter === 'PHỤ KIỆN' })}
                                onClick={() => handleFilterChange('PHỤ KIỆN')}
                            >
                                PHỤ KIỆN
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('thinking...')}></div>
            </div>
            <div className={cx('page-content')}>
                <div className={cx('content-header')}></div>
                <div className={cx('table')}>
                    <DataTable filter={filter} /> {/* Include DataTable component */}
                </div>
            </div>
        </div>
    );
}

export default Product;

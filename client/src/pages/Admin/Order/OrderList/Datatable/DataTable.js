import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../../../Product/Product/DataTable/DataTable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faArchive, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { getProduct } from '~/services/productService';

const cx = classNames.bind(styles);

function DataTable() {
    const [actionsVisible, setActionsVisible] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

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

    const toggleActions = (id) => {
        setActionsVisible(actionsVisible === id ? null : id);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={cx('data-table')}>
            <div className={cx('header')}>
                <input type="text" placeholder="Search products" className={cx('search')} />
            </div>
            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>ORDER</th>
                        <th>DATE</th>
                        <th>CUSTOMER</th>
                        <th>PAYMENTSTATUS</th>
                        <th>PAYMENT METHOD</th>
                        <th>TOTAL</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td className={cx('product-name')}>
                                #123123
                            </td>
                            <td>{item.ProductCategory ? item.ProductCategory.name : 'Unknown Category'}</td>
                            <td>
                                <label className={cx('switch')}>
                                    <input type="checkbox" checked={!item.stock} readOnly={true} />
                                    <span className={cx('slider')}></span>
                                </label>
                            </td>
                            <td>
                                {item.ProductVariants && item.ProductVariants.length > 0
                                    ? item.ProductVariants[0].sku
                                    : 'N/A'}
                            </td>
                            <td>
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                    item.price,
                                )}
                            </td>
                            <td>{item.ProductVariants ? item.ProductVariants.length : 0} variants</td>
                            <td>
                                <div className={cx('actions')}>
                                    <button className={cx('edit-button')} onClick={() => toggleActions(item.id)}>
                                        <FontAwesomeIcon icon={faEdit} /> Edit
                                    </button>
                                    {actionsVisible === item.id && (
                                        <div className={cx('dropdown')}>
                                            <div className={cx('dropdown-item')}>
                                                <FontAwesomeIcon icon={faTrash} /> Delete
                                            </div>
                                            <div className={cx('dropdown-item')}>
                                                <FontAwesomeIcon icon={faArchive} /> Archive
                                            </div>
                                            <div className={cx('dropdown-item')}>
                                                <FontAwesomeIcon icon={faEye} /> Publish
                                            </div>
                                            <div className={cx('dropdown-item')}>
                                                <FontAwesomeIcon icon={faEyeSlash} /> Unpublish
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav aria-label="Page navigation" className={cx('navigation')}>
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                            Previous
                        </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default DataTable;

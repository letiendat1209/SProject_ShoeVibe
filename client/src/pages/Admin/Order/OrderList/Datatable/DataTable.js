import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../../../Product/Product/DataTable/DataTable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEdit,
    faEye,
    faCancel,
    faTruckFast,
    faCheck,
    faClipboardList,
    faSortAlphaAsc,
    faSortAlphaDesc,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { getAllOrders, updateOrderStatus } from '~/services/order';
import { format } from 'date-fns';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

const isValidJSON = (str) => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};

function DataTable({ filter }) {
    const [actionsVisible, setActionsVisible] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
    const itemsPerPage = 5;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAllOrders();
                setData(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
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

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortedData = (data) => {
        if (!sortConfig.key) return data;

        return [...data].sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    };

    const filteredData = getSortedData(
        data
            .filter((order) => {
                if (filter === 'paid') {
                    return order.payment_status === 'paid';
                } else if (filter === 'unpaid') {
                    return order.payment_status === 'unpaid';
                } else if (filter === 'processing') {
                    return order.status === 'processing';
                } else if (filter === 'shipped') {
                    return order.status === 'shipped';
                } else if (filter === 'delivered') {
                    return order.status === 'delivered';
                } else if (filter === 'canceled') {
                    return order.status === 'cancelled';
                }
                return true; // 'all' filter
            })
            .filter(
                (order) =>
                    order.id.toString().includes(searchTerm) ||
                    (order.shipping_address && order.shipping_address.toLowerCase().includes(searchTerm.toLowerCase())),
            ),
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleUpdateOrderStatus = async (orderId, status) => {
        try {
            await updateOrderStatus(orderId, status);
            setData((prevData) => prevData.map((order) => (order.id === orderId ? { ...order, status } : order)));
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={cx('data-table')}>
            <div className={cx('header')}>
                <input
                    type="text"
                    placeholder="Search Order"
                    className={cx('search')}
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>ORDER</th>
                        <th onClick={() => handleSort('created_at')}>
                            DATE
                            <FontAwesomeIcon
                                icon={
                                    sortConfig.key === 'created_at'
                                        ? sortConfig.direction === 'asc'
                                            ? faSortAlphaAsc
                                            : faSortAlphaDesc
                                        : faSortAlphaAsc
                                }
                            />
                        </th>
                        <th>CUSTOMER</th>
                        <th>PAYMENT STATUS</th>
                        <th>PAYMENT METHOD</th>
                        <th onClick={() => handleSort('total_amount')}>
                            TOTAL
                            <FontAwesomeIcon
                                icon={
                                    sortConfig.key === 'total_amount'
                                        ? sortConfig.direction === 'asc'
                                            ? faSortAlphaAsc
                                            : faSortAlphaDesc
                                        : faSortAlphaAsc
                                }
                            />
                        </th>
                        <th>
                            <Tippy
                                content={
                                    <div className={cx('notice-status')}>
                                        <span>Pending : Chờ xử lý</span>
                                        <span>Processing : Đang chuẩn bị</span>
                                        <span>Shipped : Đã vận chuyển</span>
                                        <span>Delivered : Đã giao</span>
                                        <span>Cancelled : Hủy đơn</span>
                                    </div>
                                }
                            >
                                <span>STATUS</span>
                            </Tippy>
                        </th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => {
                        let shippingAddress = {};
                        let customerName = '';

                        if (isValidJSON(item.shipping_address)) {
                            shippingAddress = JSON.parse(item.shipping_address);
                            customerName = shippingAddress.name || 'Unknown';
                        } else {
                            console.error('Invalid shipping address JSON:', item.shipping_address);
                            customerName = 'Unknown';
                        }

                        const formattedDate = format(new Date(item.created_at), 'dd/MM/yyyy');

                        return (
                            <tr key={item.id}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td className={cx('product-name')}>
                                    <Link to={`/admin/orders/${item.id}`}>#DH{item.id}</Link>
                                </td>
                                <td>{formattedDate}</td>
                                <td>{customerName}</td>
                                <td>{item.payment_status}</td>
                                <td>{item.payment_method}</td>
                                <td>
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        item.total_amount,
                                    )}
                                </td>
                                <td>{item.status}</td>
                                <td>
                                    <div className={cx('actions')}>
                                        <button className={cx('edit-button')} onClick={() => toggleActions(item.id)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                            Action
                                        </button>
                                        {actionsVisible === item.id && (
                                            <div className={cx('dropdown')}>
                                                <div className={cx('dropdown-item')}>
                                                    <Link to={`/admin/orders/${item.id}`}>
                                                        <FontAwesomeIcon icon={faEye} /> Watch
                                                    </Link>
                                                </div>
                                                <div
                                                    className={cx('dropdown-item')}
                                                    onClick={() => handleUpdateOrderStatus(item.id, 'processing')}
                                                >
                                                    <FontAwesomeIcon icon={faClipboardList} /> Processing
                                                </div>
                                                <div
                                                    className={cx('dropdown-item')}
                                                    onClick={() => handleUpdateOrderStatus(item.id, 'shipped')}
                                                >
                                                    <FontAwesomeIcon icon={faTruckFast} /> Shipped
                                                </div>
                                                <div
                                                    className={cx('dropdown-item')}
                                                    onClick={() => handleUpdateOrderStatus(item.id, 'delivered')}
                                                >
                                                    <FontAwesomeIcon icon={faCheck} /> Delivered
                                                </div>
                                                <div
                                                    className={cx('dropdown-item')}
                                                    onClick={() => handleUpdateOrderStatus(item.id, 'cancelled')}
                                                >
                                                    <FontAwesomeIcon icon={faCancel} /> Cancelled
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
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

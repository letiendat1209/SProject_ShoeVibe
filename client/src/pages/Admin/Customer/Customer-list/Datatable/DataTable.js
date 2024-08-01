import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from '../../../Product/Product/DataTable/DataTable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getAllUsers } from '~/services/userServices';

const cx = classNames.bind(styles);

function DataTable({ filter }) {
    const [actionsVisible, setActionsVisible] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 5;

    useEffect(() => {
        async function fetchData() {
            setLoading(true); // Set loading to true at the beginning
            try {
                const response = await getAllUsers();
                if (response && response.data) {
                    setData(response.data);
                } else {
                    console.error('No data received');
                }
            } catch (error) {
                console.error('Error fetching customer:', error);
            } finally {
                setLoading(false); // Ensure loading is set to false after fetch
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

    const filteredData = data
        .filter((user) => {
            if (filter === 'admin') {
                return user.role === 'admin';
            } else if (filter === 'seller') {
                return user.role === 'seller';
            } else if (filter === 'customer') {
                return user.role === 'customer';
            }
            return true; // 'all' filter
        })
        .filter((user) => {
            const idMatch = user.id.toString().includes(searchTerm);
            const usernameMatch = user.username
                ? user.username.toLowerCase().includes(searchTerm.toLowerCase())
                : false;
            const fullnameMatch = user.fullname
                ? user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
                : false;

            return idMatch || usernameMatch || fullnameMatch;
        });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
                        <th>Account Role</th>
                        <th>Orders</th>
                        <th>Total spend</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td className={cx('product-name','custom-product-name')}>
                                    <Link       >
                                        <img
                                            src={
                                                item.avatar ||
                                                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
                                            }
                                            alt="User Avatar"
                                        />
                                        <strong>{item.fullname || item.username}</strong>
                                    </Link>
                                </td>
                                <td>{item.email}</td>
                                <td>{item.telephone || 'None'}</td>
                                <td>{item.role}</td>
                                <td></td>
                                <td></td>
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

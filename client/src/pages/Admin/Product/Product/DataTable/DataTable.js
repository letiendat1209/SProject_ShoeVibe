import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './DataTable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEdit,
    faTrash,
    faArchive,
    faEye,
    faEyeSlash,
    faCodeMerge,
    faSortAlphaAsc,
    faSortAlphaDesc,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getProduct } from '~/services/productService';
import * as XLSX from 'xlsx';

const cx = classNames.bind(styles);

function DataTable({ filter }) {
    const [actionsVisible, setActionsVisible] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortColumn, setSortColumn] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

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

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('asc');    
        }
    };

    const sortedData = [...data].sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (a[sortColumn] > b[sortColumn]) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const filteredData = sortedData
        .filter((product) => {
            if (filter === 'GIÀY NAM') {
                return product.ProductCategory.name === 'GIÀY NAM';
            } else if (filter === 'GIÀY NỮ') {
                return product.ProductCategory.name === 'GIÀY NỮ';
            } else if (filter === 'GIÀY CẶP') {
                return product.ProductCategory.name === 'GIÀY CẶP';
            } else if (filter === 'BALO-TÚI') {
                return product.ProductCategory.name === 'BALO-TÚI';
            } else if (filter === 'PHỤ KIỆN') {
                return product.ProductCategory.name === 'PHỤ KIỆN';
            }
            return true;
        })
        .filter(
            (product) =>
                product.id.toString().includes(searchTerm) ||
                (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (product.ProductCategory &&
                    product.ProductCategory.name.toLowerCase().includes(searchTerm.toLowerCase())),
        );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
        XLSX.writeFile(workbook, 'products.xlsx');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={cx('data-table')}>
            <div className={cx('header')}>
                <input
                    type="text"
                    placeholder="Search products"
                    className={cx('search')}
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button onClick={exportToExcel} className={cx('export-button')}>
                    Export to Excel
                </button>
            </div>
            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th onClick={() => handleSort('name')}>
                            PRODUCT{' '}
                            <FontAwesomeIcon
                                icon={sortColumn === 'name' && sortOrder === 'asc' ? faSortAlphaAsc : faSortAlphaDesc}
                            />
                        </th>
                        <th onClick={() => handleSort('ProductCategory.name')}>
                            CATEGORY{' '}
                            <FontAwesomeIcon
                                icon={
                                    sortColumn === 'ProductCategory.name' && sortOrder === 'asc'
                                        ? faSortAlphaAsc
                                        : faSortAlphaDesc
                                }
                            />
                        </th>
                        <th>STOCK</th>
                        <th>SKU</th>
                        <th onClick={() => handleSort('price')}>
                            PRICE{' '}
                            <FontAwesomeIcon
                                icon={sortColumn === 'price' && sortOrder === 'asc' ? faSortAlphaAsc : faSortAlphaDesc}
                            />
                        </th>
                        <th>VARIANTS</th>
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
                                <Link to={`/admin/product-detail/${item.id}`}>
                                    <img
                                        src={
                                            item.ProductImages && item.ProductImages.length > 0
                                                ? item.ProductImages[0].image_url
                                                : 'default_image_url.jpg'
                                        }
                                        alt={item.name}
                                        className={cx('product-image')}
                                    />
                                    {item.name}
                                </Link>
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

import classNames from 'classnames/bind';
import styles from './OrderDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOrderDetails, updateOrderPaymentStatus } from '~/services/order'; // Import hàm cập nhật trạng thái

const cx = classNames.bind(styles);

const isValidJSON = (str) => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

function OrderDetail() {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        getOrderDetails(orderId).then((response) => {
            console.log(response.order);
            setOrderDetails(response.order);
        });
    }, [orderId]);

    if (!orderDetails) {
        return <div>Loading...</div>;
    }

    let shippingAddress = {};
    let customerName = '';
    let addressDetails = '';
    let sdt = '';

    if (isValidJSON(orderDetails.shippingAddress)) {
        shippingAddress = JSON.parse(orderDetails.shippingAddress);
        customerName = shippingAddress.name || 'Unknown';
        addressDetails = `${shippingAddress.address}, ${shippingAddress.wardName}, ${shippingAddress.districtName}, ${shippingAddress.cityName}`;
        sdt = shippingAddress.phone || 'Unknown';
    } else {
        console.error('Invalid shipping address JSON:', orderDetails.shippingAddress);
        customerName = 'Unknown';
        addressDetails = 'Unknown';
    }

    const handleUpdatePaymentStatus = async (status) => {
        try {
            await updateOrderPaymentStatus(orderId, status);
            setOrderDetails((prevDetails) => ({ ...prevDetails, paymentStatus: status }));
        } catch (error) {
            console.error('Error updating payment status:', error);
        }
    };

    return (
        <div className={cx('content')}>
            <div className={cx('page-header')}>
                <div className={cx('row', 'custom-row')}>
                    <div className={cx('col-sm')}>
                        <div className={cx('breadcrumbs')}>
                            <ul>
                                <li>Orders</li>/<li>Order Details</li>
                            </ul>
                        </div>
                        <div className={cx('page-header-title')}>
                            <h4>Order #DH{orderDetails.id}</h4>
                            <span className={cx(orderDetails.paymentStatus === 'paid' ? 'paid' : 'unpaid')}>
                                {orderDetails.paymentStatus === 'paid' ? ' - Paid' : ' - Unpaid'}
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCalendar} />{' '}
                                {new Date(orderDetails.createdAt).toLocaleString()}
                            </span>
                        </div>
                        <h4 className={cx('mt2')}>
                            <Link>
                                <FontAwesomeIcon icon={faDownload} color="#677788" /> Export
                            </Link>
                            <Link> More option </Link>
                        </h4>
                    </div>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-lg-8')}>
                    <div className={cx('card', 'card-custom')}>
                        <div className={cx('card-header')}>
                            <h4>
                                Order details <span>{orderDetails.items.length}</span>
                            </h4>
                        </div>
                        <div className={cx('card-body')}>
                            {orderDetails.items.map((item) => (
                                <div key={item.id} className={cx('media')}>
                                    <div className={cx('avatar')}>
                                        <img src={item.product.image} alt={item.product.name} />
                                    </div>
                                    <div className={cx('media-body')}>
                                        <div className={cx('row', 'dflex')}>
                                            <div className={cx('col-md-6 mb3 mb-md-0', 'custom-col')}>
                                                <Link to={`/product/${item.product.id}`} className={cx('custom-w')}>
                                                    {item.product.name}
                                                </Link>
                                                <span>
                                                    Color: <strong>{item.product.color}</strong>
                                                </span>
                                                <span>
                                                    Size: <strong>{item.product.size}</strong>
                                                </span>
                                            </div>
                                            <div className={cx('col col-md-2', 'df')}>
                                                <h5>{formatCurrency(item.price)}</h5>
                                            </div>
                                            <div className={cx('col col-md-2', 'df')}>
                                                <h5>{item.quantity}</h5>
                                            </div>
                                            <div className={cx('col col-md-2', 'df')}>
                                                <h5>{formatCurrency(item.price * item.quantity)}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <hr />
                            <div className={cx('row')}>
                                <div className={cx('col-md-8 col-lg-7')}>
                                    <dl className="row text-sm-right">
                                        <dt className="col-sm-6">Tổng:</dt>
                                        <dd className="col-sm-6">
                                            <strong>{formatCurrency(orderDetails.totalAmount)}</strong>
                                        </dd>
                                        <dt className="col-sm-6">Phí ship:</dt>
                                        <dd className="col-sm-6">0đ</dd>
                                        <dt className="col-sm-6">Thuế:</dt>
                                        <dd className="col-sm-6">0đ</dd>
                                        <dt className="col-sm-6">Tổng cộng:</dt>
                                        <dd className="col-sm-6">
                                            <strong>{formatCurrency(orderDetails.totalAmount)}</strong>
                                        </dd>
                                        <dt className="col-sm-6">Số tiền đã trả:</dt>
                                        <dd className="col-sm-6">
                                            <strong>
                                                {orderDetails.paymentStatus === 'paid'
                                                    ? formatCurrency(orderDetails.totalAmount)
                                                    : '0đ'}
                                            </strong>
                                        </dd>
                                    </dl>
                                </div>
                                <div className={cx('col-md-4')}>
                                    <div
                                        className={cx(
                                            'btn-custom',
                                            orderDetails.paymentStatus === 'paid' ? 'btn-paid' : '',
                                        )}
                                        onClick={() => handleUpdatePaymentStatus('paid')}
                                    >
                                        PAID
                                    </div>
                                    <div
                                        className={cx(
                                            'btn-custom',
                                            orderDetails.paymentStatus === 'unpaid' ? 'btn-unpaid' : '',
                                        )}
                                        onClick={() => handleUpdatePaymentStatus('unpaid')}
                                    >
                                        UNPAID
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('col-lg-4')}>
                    <div className={cx('card', 'card-custom')}>
                        <div className={cx('card-header')}>
                            <h4>Customer</h4>
                        </div>
                        <div className={cx('card-body')}>
                            <div className={cx('media')}>
                                <div className={cx('avatar-circle')}>
                                    <img
                                        src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/07/04/z5601193632293-f1caffebf1ec2514e6286779cea8aa0fe7afe58c-ac02-4ead-ac2b-633c81c3e921.jpg"
                                        alt="Customer"
                                    />
                                </div>
                                <div className={cx('media-body')}>
                                    <div className={cx('name')}>
                                        <h5>{customerName}</h5>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('address')}>
                                <span>Contact info</span>
                                <p>Email: Adu@gmail.com</p>
                                <p>SĐT: {sdt}</p>
                                <hr />
                                <span>Shipping address - (Địa chỉ giao hàng)</span>
                                <p>{addressDetails}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;

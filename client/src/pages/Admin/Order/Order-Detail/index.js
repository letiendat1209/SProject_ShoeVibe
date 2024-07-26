import classNames from 'classnames/bind';
import styles from './OrderDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function OrderDetail() {
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
                            <h4> Order #121312</h4>
                            <span className={cx('paid')}> - Paid</span>
                            <span className={cx('unpaid')}> - Unpaid</span>
                            <span>
                                <FontAwesomeIcon icon={faCalendar} /> Aug 17, 2020, 5:48 (ET)
                            </span>
                        </div>
                        <h4 className={cx('mt2')}>
                            <a href="">
                                <FontAwesomeIcon icon={faDownload} color="#677788" /> Export
                            </a>
                            <a href=""> More option </a>
                        </h4>
                    </div>
                </div>
            </div>
            <div className={cx('row')}>
                <div className={cx('col-lg-8')}>
                    <div className={cx('card', 'card-custom')}>
                        <div className={cx('card-header')}>
                            <h4>
                                Order details
                                <span>4</span>
                            </h4>
                        </div>
                        <div className={cx('card-body')}>
                            <div className={cx('media')}>
                                <div className={cx('avatar')}>
                                    <img
                                        src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/07/04/z5601193632293-f1caffebf1ec2514e6286779cea8aa0fe7afe58c-ac02-4ead-ac2b-633c81c3e921.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx('media-body')}>
                                    <div className={cx('row', 'dflex')}>
                                        <div className={cx('col-md-6 mb3 mb-md-0', 'custom-col')}>
                                            <a href="">Topman shoe in green Topman shoe in green </a>
                                            <span>
                                                Color : <strong>Green</strong>
                                            </span>
                                            <span>
                                                Size : <strong>35</strong>
                                            </span>
                                        </div>
                                        <div className={cx('col col-md-2')}>
                                            <h5>210.000đ</h5>
                                        </div>
                                        <div className={cx('col col-md-2')}>
                                            <h5> 2 </h5>
                                        </div>
                                        <div className={cx('col col-md-2')}>
                                            <h5>420.000đ</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('media')}>
                                <div className={cx('avatar')}>
                                    <img
                                        src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/07/04/z5601193632293-f1caffebf1ec2514e6286779cea8aa0fe7afe58c-ac02-4ead-ac2b-633c81c3e921.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx('media-body')}>
                                    <div className={cx('row', 'dflex')}>
                                        <div className={cx('col-md-6 mb3 mb-md-0', 'custom-col')}>
                                            <a href="">Topman shoe in green Topman shoe in green </a>
                                            <span>
                                                Color : <strong>Green</strong>
                                            </span>
                                            <span>
                                                Size : <strong>35</strong>
                                            </span>
                                        </div>
                                        <div className={cx('col col-md-2')}>
                                            <h5>210.000đ</h5>
                                        </div>
                                        <div className={cx('col col-md-2')}>
                                            <h5> 2 </h5>
                                        </div>
                                        <div className={cx('col col-md-2')}>
                                            <h5>420.000đ</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className={cx('row')}>
                                <div className={cx('col-md-8 col-lg-7')}>
                                    <dl class="row text-sm-right">
                                        <dt class="col-sm-6">Subtotal:</dt>
                                        <dd class="col-sm-6">$65.00</dd>
                                        <dt class="col-sm-6">Shipping fee:</dt>
                                        <dd class="col-sm-6">$0.00</dd>
                                        <dt class="col-sm-6">Tax:</dt>
                                        <dd class="col-sm-6">$7.00</dd>
                                        <dt class="col-sm-6">Total:</dt>
                                        <dd class="col-sm-6">$65.00</dd>
                                        <dt class="col-sm-6">Amount paid:</dt>
                                        <dd class="col-sm-6">$65.00</dd>
                                    </dl>
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
                                        alt=""
                                    />
                                </div>
                                <div className={cx('media-body')}>
                                    <div className={cx('name')}>
                                        <h5>John Doe</h5>
                                        <span>Customer Support</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('address')}>
                                <span> Contact info</span>
                                <p>Email : Adu@gmail.com</p>
                                <p>SĐT : 01283128312</p>
                                <hr />
                                <span> Shipping address</span>
                                <p>45 Roker Terrace Latheronwheel KW5 8NW, London UK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;

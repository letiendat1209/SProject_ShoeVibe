import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-detail-layout')}>
                <div className={cx('container-fluid', 'pd12')}>
                    <div className={cx('product-detail')}>
                        <div className={cx('product-detail-thumb')}>
                            <div className={cx('product-main-thumb')}>
                                <div className={cx('thumb-tag')}>
                                    <div className={cx('wish-list')}></div>
                                    <div className={cx('sale-tag')}></div>
                                    <div className={cx('main-thumb-img')}>
                                        <img
                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=1150&h=0&FileInput=/Resources/Product/2024/06/14/z5537265618984_5009ea12713c7e7b9692fe070ae78c26.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('product-mini-thumb')}>
                                <div className={cx('slick-slider')}>
                                    <div className={cx('slick-list')}>
                                        <div className={cx('slick-item')}>
                                            <div className={cx('item-thumb')}>
                                                <Link>
                                                    <img
                                                        src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <div className={cx('item-thumb')}>
                                                <Link>
                                                    <img
                                                        src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <div className={cx('item-thumb')}>
                                                <Link>
                                                    <img
                                                        src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <div className={cx('item-thumb')}>
                                                <Link>
                                                    <img
                                                        src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>
                                            <div className={cx('item-thumb')}>
                                                <Link>
                                                    <img
                                                        src="https://img.mwc.com.vn/giay-thoi-trang?w=480&h=0&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg"
                                                        alt=""
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('product-detail-main')}>
                            <h1 className={cx('product-name')}>
                                Dép cao gót MWC G050 - Dép Cao Gót Đế Đúc, Guốc Cao Gót 8cm Bản Ngang Đính Khóa Thời
                                Trang
                            </h1>
                            <div className={cx('product-top-info')}>
                                <div className={cx('product-rating')}>
                                    <div className={cx('star')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className={cx('star')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className={cx('star')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className={cx('star')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className={cx('star')}>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <div className={cx('product-review')}>124 Đánh giá</div>
                                <div className={cx('product-like')}>917 Số lượng thích</div>
                            </div>
                            <p className={cx('product-price')}>195.000 đ</p>
                            <p className={cx('sale-des')}></p>
                            <div className={cx('detail-main-bottom')}>
                                <div className={cx('product-bottom-info')}>
                                    <div className={cx('product-option')}>
                                        <div className={cx('option-label')}>Màu</div>
                                        <div className={cx('color-option')}>
                                            <ul></ul>
                                        </div>
                                    </div>
                                    <div className={cx('product-option')}>
                                        <div className={cx('option-label')}>Kích thước</div>
                                        <div className={cx('size-option')}>
                                            <Link>35</Link>
                                            <Link>36</Link>
                                            <Link>37</Link>
                                            <Link>38</Link>
                                            <Link>39</Link>
                                        </div>
                                    </div>
                                    <div className={cx('size-guide-link')} href="">
                                        Hướng dẫn tính size
                                    </div>
                                    {/*ở đây web gốc có bảng hướng dẫn tính size khi click vào thẻ a ở trên*/}
                                    <div className={cx('fild-local-store')} to={'/'}>
                                        {/*icon*/}
                                        Tìm kiếm sản phẩm tại showroom
                                    </div>
                                    <div className={cx('product-cart-action')}>
                                        <button className={cx('btn-buy')}>Mua ngay</button>
                                        <button className={cx('btn-add-to-cart')}>Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('product-policy')}>
                                <div className={cx('box-policy')}>
                                    <div className={cx('policy-item')}>
                                        <div className={cx('policy-icon')}>
                                            <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                        </div>
                                        <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                    </div>
                                    <div className={cx('policy-item')}>
                                        <div className={cx('policy-icon')}>
                                            <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                        </div>
                                        <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                    </div>
                                    <div className={cx('policy-item')}>
                                        <div className={cx('policy-icon')}>
                                            <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                        </div>
                                        <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                    </div>
                                    <div className={cx('policy-item')}>
                                        <div className={cx('policy-icon')}>
                                            <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                        </div>
                                        <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                    </div>
                                    <div className={cx('policy-item')}>
                                        <div className={cx('policy-icon')}>
                                            <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                        </div>
                                        <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                    </div>
                                    <div className={cx('policy-item')}>
                                        <div className={cx('policy-icon')}>
                                            <img src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="" />
                                        </div>
                                        <span className={cx('policy-title')}>Bảo hành keo vĩnh viễn</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'mb-32')}>
                            <ul className={cx('nav-tabs')}>
                                <li className={cx('nav-item')}>
                                    <button>Chi tiết sản sản phẩm</button>
                                </li>
                                <li className={cx('nav-item')}>
                                    <button>Bình luận</button>
                                </li>
                            </ul>
                            <div className={cx('tab-content')}>
                                <div className={cx('tab-pane', 'active show')}>
                                    <p>
                                        <span>MÔ TẢ SẢN PHẨM: Giày thể thao nữ MWC A160</span>
                                    </p>
                                    <ul>
                                        <li>
                                            Giày thiết kế kiểu thắt dây năng động, được sử dụng bằng chất liệu da tổng
                                            hợp cao cấp rất êm mềm và bền bỉ.
                                        </li>
                                        <li>
                                            Với kiểu dáng sneaker đế cao 4cm, có tính năng thoáng khí, dễ đi, dễ phối
                                            hợp với nhiều trang phục khác nhau từ chân váy, quần jeans, tây hay sooc,..
                                            đều rất hợp thời trang tạo nên vẻ đẹp cá tính rất riêng cho mỗi người mang.
                                        </li>
                                        <li>
                                            Form giày thon gọn kiểu dáng năng động trẻ trung, phù hợp đi lại trong môi
                                            trường hoàn cảnh khác nhau như đi làm, đi dạo phố, hay đi dã ngoại cùng bạn
                                            bè,... đều mang lại cảm giác thật sự thoải mái và tự tin cho người dùng.
                                        </li>
                                    </ul>
                                    <p>
                                        <span>CHI TIẾT SẢN PHẨM</span>
                                    </p>
                                    <ul>
                                        <li>Chiều cao: Khoảng 4cm</li>
                                        <li>Chất liệu: Da tổng hợp cao cấp</li>
                                        <li>Đế: Êm mềm, độ đàn hồi tốt, chống trơn trượt</li>
                                        <li>Kiểu dáng: Giày thể thao cổ thấp</li>
                                        <li>Màu sắc: Kem</li>
                                        <li>
                                            Do màn hình hiển thị khác nhau và ánh sáng khác nhau, hình ảnh có thể chênh
                                            lệch 5-10% màu sắc thật của sản phẩm.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'mb-32')}>
                            <div className={cx('filter-side-bar')}>
                                <div className={cx('combo-product')}>
                                    <div className={cx('product-title')}>Có thể bạn cũng thích</div>
                                    <div className={cx('product-content')}>
                                        <div className={cx('combo-product-grid')}>
                                            <div className={cx('product-grid-item')}>
                                                <div className={cx('product-thumb')}>
                                                    <Link>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/09/27/z4727917607321_1781353cfea9ae5977dc5606e3d01663.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                                <Link>
                                                    <div className={cx('product-info')}>
                                                        <p className={cx('grid-p-title')}>
                                                            Giày Thể Thao Nữ MWC A143 - Giày Thể Thao Nữ Dáng Sneaker,
                                                            Giày Đế Bằng Siêu Êm Chân Hot Trend, Thời Trang. Giày Thể
                                                            Thao Nữ MWC A143 - Giày Thể Thao Nữ Dáng Sneaker, Giày Đế
                                                            Bằng Siêu Êm Chân Hot Trend, Thời Trang.
                                                        </p>
                                                        <p className={cx('grid-p-price')}>250.000 đ</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={cx('product-grid-item')}>
                                                <div className={cx('product-thumb')}>
                                                    <Link>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/09/27/z4727917607321_1781353cfea9ae5977dc5606e3d01663.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                                <Link>
                                                    <div className={cx('product-info')}>
                                                        <p className={cx('grid-p-title')}>
                                                            Giày Thể Thao Nữ MWC A143 - Giày Thể Thao Nữ Dáng Sneaker,
                                                            Giày Đế Bằng Siêu Êm Chân Hot Trend, Thời Trang. Giày Thể
                                                            Thao Nữ MWC A143 - Giày Thể Thao Nữ Dáng Sneaker, Giày Đế
                                                            Bằng Siêu Êm Chân Hot Trend, Thời Trang.
                                                        </p>
                                                        <p className={cx('grid-p-price')}>250.000 đ</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={cx('product-grid-item')}>
                                                <div className={cx('product-thumb')}>
                                                    <Link>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/09/27/z4727917607321_1781353cfea9ae5977dc5606e3d01663.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                                <Link>
                                                    <div className={cx('product-info')}>
                                                        <p className={cx('grid-p-title')}>
                                                            Giày Thể Thao Nữ MWC A143 - Giày Thể Thao Nữ Dáng Sneaker,
                                                            Giày Đế Bằng Siêu Êm Chân Hot Trend, Thời Trang. Giày Thể
                                                            Thao Nữ MWC A143 - Giày Thể Thao Nữ Dáng Sneaker, Giày Đế
                                                            Bằng Siêu Êm Chân Hot Trend, Thời Trang.
                                                        </p>
                                                        <p className={cx('grid-p-price')}>250.000 đ</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={cx('product-grid-item')}>
                                                <div className={cx('product-thumb')}>
                                                    <Link>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/09/27/z4727917607321_1781353cfea9ae5977dc5606e3d01663.jpg"
                                                            alt=""
                                                        />
                                                    </Link>
                                                </div>
                                                <Link>
                                                    <div className={cx('product-info')}>
                                                        <p className={cx('grid-p-title')}>
                                                            Giày Thể Thao Nữ MWC A143 - Giày Thể Thao Nữ Dáng Sneaker,
                                                            Giày Đế Bằng Siêu Êm Chân Hot Trend, Thời Trang. Giày Thể
                                                            Thao Nữ MWC A143 - Giày Thể Thao Nữ Dáng Sneaker, Giày Đế
                                                            Bằng Siêu Êm Chân Hot Trend, Thời Trang.
                                                        </p>
                                                        <p className={cx('grid-p-price')}>250.000 đ</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;

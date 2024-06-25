import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import CategoryItem from '~/components/CategoryItem';

const cx = classNames.bind(styles);

const sampleData = [
    {
        imageUrl:
            'https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/06/14/z5537265577529-ce91775357cc0d531934680502a010bdb2d9da75-4d9b-4b92-af5f-d6750881a8b3.jpg',
        title: 'Giày Thể Thao Nữ MWC A160 - Giày Thể Thao Nữ Cao 4cm, Kiểu Dáng Sneaker Năng Động, Trẻ Trung, Thời Trang.',
        price: '275,000đ',
        link: '#',
        colors: ['#C0C0C0', '#FFEFD5', '#63B8FF'],
    },
    {
        imageUrl:
            'https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/05/03/z5405585287410-13977ac891c95973d9c02f8f8dbdb93d8386b3df-57a4-44d5-9ccd-8afde8b5844b.jpg',
        title: 'Giày cao gót MWC G052 - Sandal Cao Gót 9cm Quai Ngang Thanh Lịch Thời Trang',
        price: '159.000đ',
        link: '#',
        colors: ['#94AAD6', '#8C63A4', '#67BF7F'],
    },
    {
        imageUrl:
            'https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/05/15/z5442548349499_059ad7e5385089f8d4b3fd02c32d14cd.jpg',
        title: 'Dép cao gót MWC G050 - Dép Cao Gót Đế Đúc, Guốc Cao Gót 8cm Bản Ngang Đính Khóa Thời Trang',
        price: '195.000đ',
        link: '#',
        colors: ['#67BF7F', '#94AAD6', '#0020FF'],
    },
    {
        imageUrl:
            'https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/05/23/z5468236743977_4c26a04c5041cbfae385bf5a8afcf57d.jpg',
        title: 'Dép nữ MWC 8422 - Dép Sandal Cross Đế Cao 7cm Gắn Sticker Siêu Xinh, Trẻ Trung, Thời Trang.',
        price: '195.000đ',
        link: '#',
        colors: ['#FF120', '#67BF7F', '#94AAD6'],
    },
];
function Category() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid', 'pd12')}>
                <div className={cx('section-pd')}>
                    <div className={cx('row')}>
                        <div className={cx('col-12', 'col-lg-9')}>
                            <div className={cx('category-info')}>
                                <h2 className={cx('category-title')}>GIÁ ƯU ĐÃI</h2>
                                <div className={cx('toolbar-mode')}>
                                    <div className={cx('filter-collection-left')}>
                                        <Link>
                                            <div className={cx('toggglelines-btn')}>
                                                <FontAwesomeIcon icon={faBars} />
                                            </div>
                                            <div className={cx('filter-text')}>
                                                <span> BỘ LỌC</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={cx('toolbar-right')}>
                                        <div className={cx('browse-tags')}>
                                            <span> Sắp xếp theo</span>
                                            <div className={cx('sort-by')}>
                                                <div className={cx('sort-menu')}>Tùy chọn</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('category-product-list')}>
                                <div className={cx('row')}>
                                    {sampleData.map((product, index) => (
                                        <CategoryItem key={index} data={product} />
                                    ))}
                                    {sampleData.map((product, index) => (
                                        <CategoryItem key={index} data={product} />
                                    ))}
                                    {sampleData.map((product, index) => (
                                        <CategoryItem key={index} data={product} />
                                    ))}
                                </div>
                            </div>
                            <div className={cx('section-view-more')}></div>
                        </div>
                        <div className={cx('col-12', 'col-lg-3')}>
                            <div className={cx('filter-sidebar-body')}>
                                <h4 className={cx('filter-sidebar-title')}>
                                    <span>SẢN PHẨM BÁN CHẠY</span>
                                    <div className={cx('trigger-newslide-btn')}>
                                        <Link>
                                            <FontAwesomeIcon icon={faAngleLeft} />
                                        </Link>
                                        <Link>
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </Link>
                                    </div>
                                </h4>
                                <div className={cx('filter-sidebar-group-content')}>
                                    <div className={cx('category-product-list')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col', 'mb32')}>
                                                <div className={cx('product-item')}>
                                                    <div className={cx('product-img')}>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/11/09/z4782672760200_e8e8910f47ba13427e37a4ad29d56e96.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <Link>
                                                        <div className={cx('product-info')}>
                                                            <p className={cx('product-title')}>
                                                                Giày Thể Thao Nữ MWC A160 - Giày Thể Thao Nữ Cao 4cm,
                                                                Kiểu Dáng Sneaker Năng Động, Trẻ Trung, Thời Trang.
                                                            </p>
                                                            <p className={cx('product-price')}>
                                                                <span>275,000đ</span>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <div className={cx('product-variant-color')}>
                                                        <ul>
                                                            <li>
                                                                <Link>
                                                                    <div className={cx('block-color')}></div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    <div className={cx('block-color')}></div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('col', 'mb32')}>
                                                <div className={cx('product-item')}>
                                                    <div className={cx('product-img')}>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/11/09/z4782672760200_e8e8910f47ba13427e37a4ad29d56e96.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <Link>
                                                        <div className={cx('product-info')}>
                                                            <p className={cx('product-title')}>
                                                                Giày Thể Thao Nữ MWC A160 - Giày Thể Thao Nữ Cao 4cm,
                                                                Kiểu Dáng Sneaker Năng Động, Trẻ Trung, Thời Trang.
                                                            </p>
                                                            <p className={cx('product-price')}>
                                                                <span>275,000đ</span>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <div className={cx('product-variant-color')}>
                                                        <ul>
                                                            <li>
                                                                <Link>
                                                                    <div className={cx('block-color')}></div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    <div className={cx('block-color')}></div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('col', 'mb32')}>
                                                <div className={cx('product-item')}>
                                                    <div className={cx('product-img')}>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/11/09/z4782672760200_e8e8910f47ba13427e37a4ad29d56e96.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <Link>
                                                        <div className={cx('product-info')}>
                                                            <p className={cx('product-title')}>
                                                                Giày Thể Thao Nữ MWC A160 - Giày Thể Thao Nữ Cao 4cm,
                                                                Kiểu Dáng Sneaker Năng Động, Trẻ Trung, Thời Trang.
                                                            </p>
                                                            <p className={cx('product-price')}>
                                                                <span>275,000đ</span>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <div className={cx('product-variant-color')}>
                                                        <ul>
                                                            <li>
                                                                <Link>
                                                                    <div className={cx('block-color')}></div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    <div className={cx('block-color')}></div>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('col', 'mb32')}>
                                                <div className={cx('product-item')}>
                                                    <div className={cx('product-img')}>
                                                        <img
                                                            src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/11/09/z4782672760200_e8e8910f47ba13427e37a4ad29d56e96.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <Link>
                                                        <div className={cx('product-info')}>
                                                            <p className={cx('product-title')}>
                                                                Giày Thể Thao Nữ MWC A160 - Giày Thể Thao Nữ Cao 4cm,
                                                                Kiểu Dáng Sneaker Năng Động, Trẻ Trung, Thời Trang.
                                                            </p>
                                                            <p className={cx('product-price')}>
                                                                <span>275,000đ</span>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                    <div className={cx('product-variant-color')}>
                                                        <ul>
                                                            <li>
                                                                <Link>
                                                                    <div className={cx('block-color')}></div>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link>
                                                                    <div className={cx('block-color')}></div>
                                                                </Link>
                                                            </li>
                                                        </ul>
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
            </div>
        </div>
    );
}

export default Category;

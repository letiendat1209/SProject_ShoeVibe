import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ProductSection.module.scss';
import ProductItem from '~/components/ProductItem';

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

function ProductSection() {
    return (
        <div className={cx('home-section')}>
            <div className={cx('container-fluid')}>
                <div className={cx('box-item')}>
                    <h2 className={cx('section-title')}>
                        <Link> SẢN PHẨM BÁN CHẠY</Link>
                    </h2>
                    <div className={cx('section-inner')}>
                        <div className={cx('row')}>
                            {sampleData.map((product, index) => (
                                <ProductItem key={index} data={product} />
                            ))}
                        </div>
                    </div>
                    <div className={cx('view-more')}>
                        <Link>XEM TẤT CẢ</Link>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    );
}

export default ProductSection;

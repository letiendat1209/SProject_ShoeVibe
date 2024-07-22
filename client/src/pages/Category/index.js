import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import CategoryItem from '~/components/CategoryItem';
import { useEffect, useState } from 'react';
import { getProductsByCategory } from '~/services/productService';
import { getCategoryById } from '~/services/categoryService';

const cx = classNames.bind(styles);

function Category() {
    const { categoryId } = useParams(); // Lấy categoryId từ URL
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProductsByCategory(categoryId);
                const formattedProducts = productsData.map((product) => ({
                    id: product.id,
                    imageUrl: product.ProductImages[0]?.image_url,
                    title: product.name,
                    price: `${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                        product.price,
                    )}`,
                    link: '#',
                    colors: product.ProductVariants.map((variant) => variant.ProductColor?.color_name),
                }));
                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        const fetchCategory = async () => {
            try {
                const categoryData = await getCategoryById(categoryId);
                setCategory(categoryData);
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };
        fetchProducts();
        fetchCategory();
    }, [categoryId]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid', 'pd12')}>
                <div className={cx('section-pd')}>
                    <div className={cx('row')}>
                        <div className={cx('col-12', 'col-lg-9')}>
                            <div className={cx('category-info')}>
                                <h2 className={cx('category-title')}>{category ? category.name : 'Loading...'}</h2>
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
                                    {products.length > 0 ? (
                                        products.map((product) => <CategoryItem key={product.id} data={product} />)
                                    ) : (
                                        <p>Không có sản phẩm nào</p>
                                    )}
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

import classNames from 'classnames/bind';
import styles from '../Category/Category.module.scss';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';
import CategoryItem from '~/components/CategoryItem';
import { useEffect, useState } from 'react';
import { getProductsByCollection } from '~/services/productService';
import { getCollectionById } from '~/services/collectionService';

const cx = classNames.bind(styles);
const getColorHex = (colorName) => {
    const colorMap = {
        BẠC: '#C0C0C0', // Silver
        KEM: '#FFFDD0', // Cream
        NÂU: '#8B4513', // Saddle Brown
        DA: '#F5F5DC', // Beige
        ĐẤT: '#D2691E', // Chocolate
        XANHLA: '#32CD32', // Lime Green
        XÁM: '#808080', // Gray
        ĐEN: '#000000', // Black
        TRẮNG: '#FFFFFF', // White
        ĐỎ: '#FF0000', // Red
        XANHDUONG: '#0000FF', // Blue
        VÀNG: '#FFFF00', // Yellow
        HỒNG: '#FFC0CB', // Pink
        TÍM: '#800080', // Purple
        CAM: '#FFA500', // Orange
        // Thêm các màu khác ở đây
    };
    return colorMap[colorName] || '#000000'; // Mặc định là đen nếu không tìm thấy
};

function Collection() {
    const { collectionId } = useParams(); // Lấy CollectionId từ URL
    const [products, setProducts] = useState([]);
    const [collection, setCollection] = useState(null);
    const [bestSellingProducts, setBestSellingProducts] = useState([]); // Thêm state cho sản phẩm bán chạy
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProductsByCollection(collectionId);
                let sortedProducts = productsData;

                if (sortOption === 'priceLowToHigh') {
                    sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
                } else if (sortOption === 'priceHighToLow') {
                    sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
                } else if (sortOption === 'nameAZ') {
                    sortedProducts = sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                } else if (sortOption === 'nameZA') {
                    sortedProducts = sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
                }

                const formattedProducts = sortedProducts.map((product) => ({
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

        const fetchCollection = async () => {
            try {
                const collectionData = await getCollectionById(collectionId);
                setCollection(collectionData);
            } catch (error) {
                console.error('Error fetching collection:', error);
            }
        };

        const fetchBestSellingProducts = async () => {
            try {
                const productsData = await getProductsByCollection(3); // Lấy sản phẩm có collection_id là 3
                const formattedProducts = productsData.map((product) => {
                    const uniqueColors = [
                        ...new Set(product.ProductVariants.map((variant) => variant.ProductColor?.color_name)),
                    ];
                    return {
                        id: product.id,
                        imageUrl: product.ProductImages[0]?.image_url,
                        title: product.name,
                        price: `${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                            product.price,
                        )}`,
                        link: '#',
                        colors: uniqueColors, // Sử dụng màu duy nhất
                    };
                });
                setBestSellingProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching best selling products:', error);
            }
        };

        fetchProducts();
        fetchCollection();
        fetchBestSellingProducts(); // Gọi hàm để lấy sản phẩm bán chạy
    }, [collectionId, sortOption]);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-fluid', 'pd12')}>
                <div className={cx('section-pd')}>
                    <div className={cx('row')}>
                        <div className={cx('col-12', 'col-lg-9')}>
                            <div className={cx('category-info')}>
                                <h2 className={cx('category-title')}>{collection ? collection.name : 'Loading...'}</h2>
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
                                                <select
                                                    className={cx('sort-menu')}
                                                    onChange={handleSortChange}
                                                    value={sortOption}
                                                >
                                                    <option value="">Tùy chọn</option>
                                                    <option value="priceLowToHigh">
                                                        Sắp xếp theo giá - thấp đến cao
                                                    </option>
                                                    <option value="priceHighToLow">
                                                        Sắp xếp theo giá - cao đến thấp
                                                    </option>
                                                    <option value="nameAZ">Sắp xếp theo chữ cái - A đến Z</option>
                                                    <option value="nameZA">Sắp xếp theo chữ cái - Z đến A</option>
                                                </select>
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
                                        <p>Không có sản phẩm nào @@</p>
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
                                            {bestSellingProducts.length > 0 ? (
                                                bestSellingProducts.map((product) => (
                                                    <div key={product.id} className={cx('col', 'mb32')}>
                                                        <div className={cx('product-item')}>
                                                            <div className={cx('product-img')}>
                                                                <img src={product.imageUrl} alt={product.title} />
                                                            </div>
                                                            <Link to={`/product/${product.id}`}>
                                                                <div className={cx('product-info')}>
                                                                    <p className={cx('product-title')}>
                                                                        {product.title}
                                                                    </p>
                                                                    <p className={cx('product-price')}>
                                                                        <span>{product.price}</span>
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                            <div className={cx('product-variant-color')}>
                                                                <ul>
                                                                    {product.colors.map((color, index) => (
                                                                        <li key={index}>
                                                                            <Link>
                                                                                <div
                                                                                    className={cx('block-color')}
                                                                                    style={{
                                                                                        backgroundColor:
                                                                                            getColorHex(color),
                                                                                    }}
                                                                                ></div>
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>Không có sản phẩm bán chạy nào @@</p>
                                            )}
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

export default Collection;

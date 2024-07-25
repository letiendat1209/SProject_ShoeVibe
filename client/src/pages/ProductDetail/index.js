import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { getProductById } from '../../services/productService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import DOMPurify from 'dompurify';

import { useCart } from '~/services/CartContext';

const cx = classNames.bind(styles);

function ProductDetail() {
        const { addToCart } = useCart();
        const { id } = useParams();
        const [product, setProduct] = useState(null);
        const [selectedColor, setSelectedColor] = useState(null);
        const [selectedSize, setSelectedSize] = useState(null);
        const [selectedVariant, setSelectedVariant] = useState(null);

        const getColorHex = (colorName) => {
            const colorMap = {
                Tím: '#8A2BE2',
                Vàng: '#FFD700',
                Xám: '#808080',
                TrắngKem: '#FFF8DC',
                Nâu: '#A52A2A',
                Đen: '#000000',
                Đỏ: '#FF0000',
                XanhDương: '#0000FF',
                XanhLáCây: '#008000',
                VàngKim: '#FFC000',
                Hồng: '#FFC0CB',
                // Thêm các màu khác ở đây
            };
            return colorMap[colorName] || '#000000'; // Mặc định là đen nếu không tìm thấy
        };

        useEffect(() => {
            const fetchProduct = async () => {
                try {
                    const data = await getProductById(id);
                    setProduct(data.data);
                } catch (error) {
                    console.error('There was an error fetching the product data!', error);
                }
            };

            fetchProduct();
        }, [id]);

        if (!product) return <div>Loading...</div>;

        const sanitizedDescription = DOMPurify.sanitize(product.des);

        const handleAddToCart = () => {
            if (!selectedVariant) {
                alert('Vui lòng chọn màu và kích thước.');
                return;
            }

            addToCart({
                id: product.id,
                name: product.name,
                price: selectedVariant.price,
                image: product.ProductImages.find((image) => image.is_main).image_url,
                quantity: 1,
                color: selectedColor,
                size: selectedSize,
                color_id: selectedVariant.color_id,
                size_id: selectedVariant.size_id,
            });
        };

        const handleColorSelect = (color) => {
            setSelectedColor(color);
            setSelectedSize(null); // Reset kích thước khi chọn màu mới
        };

        const handleSizeSelect = (size) => {
            setSelectedSize(size);
            const variant = product.ProductVariants.find(
                (variant) =>
                    variant.ProductColor.color_name === selectedColor && variant.ProductSize.size_value === size,
            );
            setSelectedVariant(variant);
        };

        const getAvailableSizes = () => {
            if (!selectedColor) return [];
            return product.ProductVariants.filter((variant) => variant.ProductColor.color_name === selectedColor).map(
                (variant) => variant.ProductSize.size_value,
            );
        };

        const uniqueColors = Array.from(
            new Set(product.ProductVariants.map((variant) => variant.ProductColor.color_name)),
        );

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
                                            src={product.ProductImages.find((image) => image.is_main).image_url}
                                            alt={product.name}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('product-mini-thumb')}>
                                <div className={cx('slick-slider')}>
                                    <div className={cx('slick-list')}>
                                        <div className={cx('slick-item')}>
                                            {product.ProductImages.map((image) => (
                                                <div className={cx('item-thumb')} key={image.id}>
                                                    <img src={image.image_url} alt={product.name} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('product-detail-main')}>
                            <h1 className={cx('product-name')}>{product.name}</h1>
                            <div className={cx('product-top-info')}>
                                <div className={cx('product-rating')}>
                                    {[...Array(5)].map((_, i) => (
                                        <div className={cx('star')} key={i}>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    ))}
                                </div>
                                <div className={cx('product-review')}>124 Đánh giá</div>
                                <div className={cx('product-like')}>917 Số lượng thích</div>
                            </div>
                            <p className={cx('product-price')}>
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                    product.price,
                                )}
                            </p>
                            <p className={cx('sale-des')}></p>
                            <div className={cx('detail-main-bottom')}>
                                <div className={cx('product-bottom-info')}>
                                    <div className={cx('product-option')}>
                                        <div className={cx('option-label')}>Màu</div>
                                        <div className={cx('color-option')}>
                                            <ul>
                                                {uniqueColors.map((color, index) => (
                                                    <li
                                                        key={`${color}-${index}`}
                                                        className={cx({
                                                            selected: color === selectedColor,
                                                            'selected-option': color === selectedColor,
                                                        })}
                                                        style={{ backgroundColor: getColorHex(color) }}
                                                        onClick={() => handleColorSelect(color)}
                                                    ></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={cx('product-option')}>
                                        <div className={cx('option-label')}>Kích thước</div>
                                        <div className={cx('size-option')}>
                                            {getAvailableSizes().map((size, index) => (
                                                <span
                                                    key={`${size}-${index}`}
                                                    className={cx({
                                                        selected: size === selectedSize,
                                                        'selected-option': size === selectedSize,
                                                    })}
                                                    onClick={() => handleSizeSelect(size)}
                                                >
                                                    {size}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={cx('size-guide-link')} href="">
                                        Hướng dẫn tính size
                                    </div>
                                    <div className={cx('fild-local-store')} to={'/'}>
                                        Tìm kiếm sản phẩm tại showroom
                                    </div>
                                    <div className={cx('product-cart-action')}>
                                        <button className={cx('btn-buy')}>Mua ngay</button>
                                        <button className={cx('btn-add-to-cart')} onClick={handleAddToCart}>
                                            Thêm vào giỏ hàng
                                        </button>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col', 'mb-32')}>
                            <ul className={cx('nav-tabs')}>
                                <li className={cx('nav-item')}>
                                    <button>Chi tiết sản phẩm</button>
                                </li>
                                <li className={cx('nav-item')}>
                                    <button>Bình luận</button>
                                </li>
                            </ul>
                            <div className={cx('tab-content')}>
                                <div className={cx('tab-pane', 'active show')}>
                                    <ul>
                                        <p
                                            className="product-description"
                                            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                                        />
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
                                            {/* Render các sản phẩm khác tương tự */}
                                            <div className={cx('product-grid-item')}>
                                                <div className={cx('product-thumb')}>
                                                    <img
                                                        src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/09/27/z4727917607321_1781353cfea9ae5977dc5606e3d01663.jpg"
                                                        alt="product name"
                                                    />
                                                </div>
                                                <div className={cx('product-info')}>
                                                    <p className={cx('grid-p-title')}>
                                                        Giày Thể Thao Nữ MWC A143 - Giày Thể Thao Nữ Dáng Sneaker
                                                    </p>
                                                    <p className={cx('grid-p-price')}>250.000 đ</p>
                                                </div>
                                            </div>
                                            {/* Thêm các sản phẩm tương tự */}
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

import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ProductSection.module.scss';
import ProductItem from '~/components/ProductItem';
import { getProductsByCategory } from '~/services/productService';

const cx = classNames.bind(styles);

function ProductSection({ sectionName, categoryId }) {
    const [products, setProducts] = useState([]);

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

        fetchProducts();
    }, [categoryId]);

    return (
        <div className={cx('home-section')}>
            <div className={cx('container-fluid')}>
                <div className={cx('box-item')}>
                    <h2 className={cx('section-title')}>
                        <Link> {sectionName} </Link>
                    </h2>
                    <div className={cx('section-inner')}>
                        <div className={cx('row')}>
                            {products.slice(0, 4).map((product, index) => (
                                <ProductItem key={index} data={product} />
                            ))}
                        </div>
                    </div>
                    <div className={cx('view-more')}>
                        <Link to={`/category/${categoryId}`}>XEM TẤT CẢ</Link>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    );
}

export default ProductSection;

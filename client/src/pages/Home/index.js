import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SlideShow from '../Slider';
import ProductSection from '../../components/Product_Section';
import { getCategory } from '~/services/categoryService'; // Đảm bảo đường dẫn này chính xác

const cx = classNames.bind(styles);

function Home() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategory();
                if (response && response.data && Array.isArray(response.data)) {
                    setCategories(response.data);
                } else {
                    console.error('Dữ liệu nhận được không hợp lệ:', response);
                    setError('Dữ liệu danh mục không hợp lệ.');
                }
            } catch (err) {
                console.error('Lỗi khi lấy danh mục:', err);
                setError('Không thể tải danh mục. Vui lòng thử lại sau.');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <div className={cx('loading')}>Đang tải...</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <SlideShow />
                {error ? (
                    <p className={cx('error-message')}>{error}</p>
                ) : (
                    <>
                        {categories.map((category) => (
                            <ProductSection
                                key={category.id}
                                sectionName={category.name.toUpperCase()}
                                categoryId={category.id}
                            />
                        ))}
                    </>
                )}
                {/*block này là bài viết*/}
            </div>
        </div>
    );
}

export default Home;

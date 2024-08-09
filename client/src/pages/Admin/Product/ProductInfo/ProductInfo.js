import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductInfo.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getProductById, updateProductById } from '~/services/productService';
import { getCategory } from '~/services/categoryService';
import { getColor } from '~/services/colorService';
import { getSize } from '~/services/sizeService';

const cx = classNames.bind(styles);

function ProductInfo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [variants, setVariants] = useState([]);
    const [editingVariant, setEditingVariant] = useState(null);

    useEffect(() => {
        // Fetch product
        getProductById(id)
            .then((response) => {
                setProduct(response.data);
                setVariants(response.data.ProductVariants || []);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });

        // Fetch categories
        getCategory()
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });

        // Fetch colors
        getColor()
            .then((response) => {
                setColors(response.data);
            })
            .catch((error) => {
                console.error('Error fetching colors:', error);
            });

        // Fetch sizes
        getSize()
            .then((response) => {
                setSizes(response.data);
            })
            .catch((error) => {
                console.error('Error fetching sizes:', error);
            });
    }, [id]);

    const handleFieldChange = (field, value) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            [field]: value,
        }));
    };

    const handleAddVariant = () => {
        setVariants([...variants, { color_id: '', size_id: '', sku: '', price: '', quantity: '' }]);
    };

    const handleVariantChange = (index, field, value) => {
        const updatedVariants = variants.map((variant, i) => (i === index ? { ...variant, [field]: value } : variant));
        setVariants(updatedVariants);
    };

    const handleRemoveVariant = (index) => {
        setVariants(variants.filter((_, i) => i !== index));
    };

    const handleProductUpdate = async () => {
        try {
            const updatedProduct = { ...product, ProductVariants: variants };
            await updateProductById(product.id, updatedProduct);
            alert('Product updated successfully');
            navigate('/admin/product'); // Assuming you have a products list page
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Failed to update product. Please try again.');
        }
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className={cx('content')}>
            <div className={cx('button-submit')}>
                <div className={cx('row')}>
                    <div className={cx('col')}>
                        <button className={cx('btn-ghost-danger')} type="button">
                            Delete
                        </button>
                    </div>
                    <div className={cx('col-auto')}>
                        <button className={cx('btn-ghost-light')} type="button">
                            Discard
                        </button>
                        <button className={cx('btn-primary')} type="button" onClick={handleProductUpdate}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('page-header')}>
                <div className={cx('row', 'c-row')}>
                    <div className={cx('col-md-12')}>
                        <h1 className={cx('page-header-title')}>Product Details</h1>
                        <div className={cx('mt-2')}>
                            <Link className={cx('mt-item')}>
                                <FontAwesomeIcon icon={faCopy} /> Duplicate
                            </Link>
                            <Link className={cx('mt-item')}>
                                <FontAwesomeIcon icon={faEye} /> View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('page-content')}>
                <div className={cx('row')}>
                    <div className={cx('col-md-8')}>
                        <div className={cx('card', 'cus-card')}>
                            <div className={cx('card-header')}>
                                <h4>Product Information</h4>
                            </div>
                            <div className={cx('card-body')}>
                                <div className={cx('form-group')}>
                                    <label htmlFor="product-name">Product Name</label>
                                    <input
                                        id="product-name"
                                        type="text"
                                        value={product.name}
                                        onChange={(e) => handleFieldChange('name', e.target.value)}
                                    />
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-md-6')}>
                                        <div className={cx('form-group')}>
                                            <label htmlFor="product-category">Product Category</label>
                                            <select
                                                id="product-category"
                                                value={product.category_id || ''}
                                                onChange={(e) => handleFieldChange('category_id', e.target.value)}
                                            >
                                                <option value="">Select Category</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className={cx('col-md-6')}>
                                        <div className={cx('form-group')}>
                                            <label htmlFor="product-brand">Brand</label>
                                            <input
                                                id="product-brand"
                                                type="text"
                                                value={product.brand}
                                                onChange={(e) => handleFieldChange('brand', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="product-description">Description</label>
                                    <ReactQuill
                                        value={product.des}
                                        onChange={(value) => handleFieldChange('des', value)}
                                        modules={ProductInfo.modules}
                                        formats={ProductInfo.formats}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('col-md-4')}>
                        <div className={cx('card')}>
                            <div className={cx('card-header')}>
                                <h4>Pricing</h4>
                            </div>
                            <div className={cx('card-body')}>
                                <div className={cx('form-group')}>
                                    <label htmlFor="product-price">Price</label>
                                    <div className={cx('row')}>
                                        <div className={cx('col-md-8')}>
                                            <input
                                                id="product-price"
                                                type="number"
                                                value={product.price}
                                                onChange={(e) => handleFieldChange('price', e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('col-md-4', 'ac')}>
                                            <div className={cx('unit')}>VNĐ</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="product-discount">Discount</label>
                                    <input
                                        id="product-discount"
                                        type="text"
                                        value={product.discount_id || ''}
                                        onChange={(e) => handleFieldChange('discount_id', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Media section */}
                <div className={cx('row')}>
                    <div className={cx('col-md-8')}>
                        <div className={cx('card', 'cus-card')}>
                            <div className={cx('card-header')}>
                                <h4>Media</h4>
                            </div>
                            <div className={cx('card-body')}>
                                <div className={cx('media-gallery')}>
                                    {product.ProductImages.map((image) => (
                                        <div className={cx('col-md-3', 'pd')} key={image.id}>
                                            <div className={cx('card card-sm', 'bd')}>
                                                <img className={cx('card-img-top')} src={image.image_url} alt="" />
                                                <div className={cx('card-body', 'cbm')}>
                                                    <div className={cx('row')}>
                                                        <div className={cx('col', 'tc')}>
                                                            <FontAwesomeIcon icon={faEye} />
                                                        </div>
                                                        <div className={cx('col', 'tc')}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Variant section */}
                <div className={cx('row')}>
                    <div className={cx('col-md-8')}>
                        <div className={cx('card', 'cus-card')}>
                            <div className={cx('card-header')}>
                                <h4>Variants</h4>
                                <button type="button" onClick={handleAddVariant} className={cx('btn-add-variant')}>
                                    + Add Variant
                                </button>
                            </div>
                            <div className={cx('card-body')}>
                                {variants.map((variant, index) => (
                                    <div key={index} className={cx('variant-row')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col-md-2')}>
                                                <div className={cx('form-group')}>
                                                    <label htmlFor={`color-${index}`}>Color</label>
                                                    <select
                                                        id={`color-${index}`}
                                                        value={variant.color_id}
                                                        onChange={(e) =>
                                                            handleVariantChange(index, 'color_id', e.target.value)
                                                        }
                                                    >
                                                        <option value="">Select color</option>
                                                        {colors.map((color) => (
                                                            <option key={color.id} value={color.id}>
                                                                {color.color_name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className={cx('col-md-2')}>
                                                <div className={cx('form-group')}>
                                                    <label htmlFor={`size-${index}`}>Size</label>
                                                    <select
                                                        id={`size-${index}`}
                                                        value={variant.size_id}
                                                        onChange={(e) =>
                                                            handleVariantChange(index, 'size_id', e.target.value)
                                                        }
                                                    >
                                                        <option value="">Select size</option>
                                                        {sizes.map((size) => (
                                                            <option key={size.id} value={size.id}>
                                                                {size.size_value}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className={cx('col-md-2')}>
                                                <div className={cx('form-group')}>
                                                    <label htmlFor={`sku-${index}`}>SKU</label>
                                                    <input
                                                        id={`sku-${index}`}
                                                        type="text"
                                                        value={variant.sku}
                                                        onChange={(e) =>
                                                            handleVariantChange(index, 'sku', e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx('col-md-2')}>
                                                <div className={cx('form-group')}>
                                                    <label htmlFor={`price-${index}`}>Price</label>
                                                    <input
                                                        id={`price-${index}`}
                                                        type="number"
                                                        value={variant.price}
                                                        onChange={(e) =>
                                                            handleVariantChange(index, 'price', e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx('col-md-2')}>
                                                <div className={cx('form-group')}>
                                                    <label htmlFor={`quantity-${index}`}>Quantity</label>
                                                    <input
                                                        id={`quantity-${index}`}
                                                        type="number"
                                                        value={variant.quantity}
                                                        onChange={(e) =>
                                                            handleVariantChange(index, 'quantity', e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx('col-md-2', 'action')}>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveVariant(index)}
                                                    className={cx('btn-remove-variant')}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} /> Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductInfo.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
    ],
};

ProductInfo.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
];

export default ProductInfo;

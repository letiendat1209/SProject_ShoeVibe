import classNames from 'classnames/bind';
import styles from '../ProductInfo/ProductInfo.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEye } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import { useState, useEffect } from 'react';

import { createProduct } from '~/services/productService';
import { getSize } from '~/services/sizeService';
import { getColor } from '~/services/colorService';
import { getCategory } from '~/services/categoryService';

const cx = classNames.bind(styles);

function CreateProduct() {
    const [description, setDescription] = useState('');
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [images, setImages] = useState([{ image_url: '', is_main: false, image_order: 1 }]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [variants, setVariants] = useState([{ color_id: '', size_id: '', sku: '', price: '', quantity: '' }]);
    const [productTypes, setProductTypes] = useState([]);

    useEffect(() => {
        // Fetch product types
        getCategory()
            .then((response) => {
                setProductTypes(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product types:', error);
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
    }, []);

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const handleAddImage = () => {
        setImages([...images, { image_url: '', is_main: false, image_order: images.length + 1 }]);
    };

    const handleImageChange = (index, field, value) => {
        const updatedImages = [...images];
        updatedImages[index][field] = value;
        setImages(updatedImages);
    };

    const handleAddVariant = () => {
        setVariants([...variants, { color_id: '', size_id: '', sku: '', price: '', quantity: '' }]);
    };

    const handleVariantChange = (index, field, value) => {
        const updatedVariants = [...variants];
        updatedVariants[index][field] = value;
        setVariants(updatedVariants);
    };

    const handleSubmit = () => {
        const payload = {
            name: productName,
            des: description,
            category_id: parseInt(productType),
            brand: brand,
            price: parseFloat(price),
            discount_id: discount ? parseInt(discount) : null,
            images: images,
            variants: variants.map((variant) => ({
                color_id: parseInt(variant.color_id),
                size_id: parseInt(variant.size_id),
                sku: variant.sku,
                price: parseFloat(variant.price),
                quantity: parseInt(variant.quantity),
            })),
        };

        createProduct(payload)
            .then((response) => {
                console.log('Product created successfully:', response.data);
            })
            .catch((error) => {
                console.error('There was an error creating the product!', error);
            });
    };

    return (
        <div className={cx('content')}>
            {/*Submit button*/}
            <div className={cx('button-submit')}>
                <div className={cx('row')}>
                    <div className={cx('col-auto')}>
                        <button className={cx('btn-ghost-light')} type="button">
                            Discard
                        </button>
                        <button className={cx('btn-primary')} type="button" onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('page-header')}>
                <div className={cx('row', 'c-row')}>
                    <div className={cx('col-md-12')}>
                        <h1 className={cx('page-header-title')}>Create New Product</h1>
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
                                    <label htmlFor="">Tên sản phẩm </label>
                                    <input
                                        type="text"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                    />
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-md-6')}>
                                        <div className={cx('form-group')}>
                                            <label htmlFor="">Loại Sản Phẩm </label>
                                            <select
                                                value={productType}
                                                onChange={(e) => setProductType(e.target.value)}
                                            >
                                                <option value="">Loại sản phẩm</option>
                                                {productTypes.map((type) => (
                                                    <option key={type.id} value={type.id}>
                                                        {type.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className={cx('col-md-6')}>
                                        <div className={cx('form-group')}>
                                            <label htmlFor="">Brand </label>
                                            <input
                                                type="text"
                                                value={brand}
                                                onChange={(e) => setBrand(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="">Description ( Thông tin sản phẩm )</label>
                                    <ReactQuill
                                        value={description}
                                        onChange={handleDescriptionChange}
                                        modules={CreateProduct.modules}
                                        formats={CreateProduct.formats}
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
                                    <label htmlFor="">Giá Bán </label>
                                    <div className={cx('row')}>
                                        <div className={cx('col-md-8')}>
                                            <input
                                                type="text"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('col-md-4', 'ac')}>
                                            <div className={cx('unit')}>VNĐ</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="">Discount </label>
                                    <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-md-8')}>
                        <div className={cx('card', 'cus-card')}>
                            <div className={cx('card-header')}>
                                <h4>Images</h4>
                                <button type="button" onClick={handleAddImage}>
                                    + Add Image
                                </button>
                            </div>
                            <div className={cx('card-body')}>
                                {images.map((image, index) => (
                                    <div key={index} className={cx('form-group')}>
                                        <label htmlFor="">Image URL</label>
                                        <input
                                            type="text"
                                            value={image.image_url}
                                            onChange={(e) => handleImageChange(index, 'image_url', e.target.value)}
                                        />
                                        <label htmlFor="">
                                            <input
                                                type="checkbox"
                                                checked={image.is_main}
                                                onChange={(e) => handleImageChange(index, 'is_main', e.target.checked)}
                                            />
                                            IS MAIN <strong>*</strong>
                                        </label>
                                        <label htmlFor="">Image Order</label>
                                        <input
                                            type="number"
                                            value={image.image_order}
                                            onChange={(e) => handleImageChange(index, 'image_order', e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-md-8')}>
                        <div className={cx('card', 'cus-card')}>
                            <div className={cx('card-header')}>
                                <h4>Variants</h4>
                                <button type="button" onClick={handleAddVariant}>
                                    + Add Variant
                                </button>
                            </div>
                            <div className={cx('card-body')}>
                                {variants.map((variant, index) => (
                                    <div key={index} className={cx('row')}>
                                        <div className={cx('col-md-3')}>
                                            <div className={cx('form-group')}>
                                                <label htmlFor="">Color</label>
                                                <select
                                                    value={variant.color_id}
                                                    onChange={(e) =>
                                                        handleVariantChange(index, 'color_id', e.target.value)
                                                    }
                                                >
                                                    <option value="">Chọn màu sắc</option>
                                                    {colors.map((color) => (
                                                        <option key={color.id} value={color.id}>
                                                            {color.color_name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className={cx('col-md-3')}>
                                            <div className={cx('form-group')}>
                                                <label htmlFor="">Size</label>
                                                <select
                                                    value={variant.size_id}
                                                    onChange={(e) =>
                                                        handleVariantChange(index, 'size_id', e.target.value)
                                                    }
                                                >
                                                    <option value="">Chọn Size</option>
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
                                                <label htmlFor="">SKU</label>
                                                <input
                                                    type="text"
                                                    value={variant.sku}
                                                    onChange={(e) => handleVariantChange(index, 'sku', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('col-md-2')}>
                                            <div className={cx('form-group')}>
                                                <label htmlFor="">Price</label>
                                                <input
                                                    type="text"
                                                    value={variant.price}
                                                    onChange={(e) =>
                                                        handleVariantChange(index, 'price', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('col-md-2')}>
                                            <div className={cx('form-group')}>
                                                <label htmlFor="">Quantity</label>
                                                <input
                                                    type="text"
                                                    value={variant.quantity}
                                                    onChange={(e) =>
                                                        handleVariantChange(index, 'quantity', e.target.value)
                                                    }
                                                />
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

CreateProduct.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
    ],
};

CreateProduct.formats = [
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
    'link',
    'image',
    'video',
];

export default CreateProduct;

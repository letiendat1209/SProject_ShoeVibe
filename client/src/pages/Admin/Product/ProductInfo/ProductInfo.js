import classNames from 'classnames/bind';
import styles from './ProductInfo.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import { useState } from 'react';
const cx = classNames.bind(styles);

function ProductInfo() {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };
    return (
        <div className={cx('content')}>
            {/*Submit button*/}
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
                        <button className={cx('btn-primary')} type="button">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx('page-header')}>
                <div className={cx('row', 'c-row')}>
                    <div className={cx('col-md-12')}>
                        <h1 className={cx('page-header-title')}>Products Details</h1>
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
                                <h4>Product Infomation</h4>
                            </div>
                            <div className={cx('card-body')}>
                                <div className={cx('form-group')}>
                                    <label htmlFor="">Tên sản phẩm </label>
                                    <input type="text" />
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-md-6')}>
                                        <div className={cx('form-group')}>
                                            <label htmlFor="">Loại Sản Phẩm </label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className={cx('col-md-6')}>
                                        <div className={cx('form-group')}>
                                            <label htmlFor="">Brand </label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="">Description ( Thông tin sản phẩm )</label>
                                    <ReactQuill
                                        value={description}
                                        onChange={handleDescriptionChange}
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
                                    <label htmlFor="">Giá Bán </label>
                                    <div className={cx('row')}>
                                        <div className={cx('col-md-8')}>
                                            <input type="text" />
                                        </div>
                                        <div className={cx('col-md-4', 'ac')}>
                                            <div className={cx('unit')}>VNĐ</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-group')}>
                                    <label htmlFor="">Discount </label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* New Card for Media */}
                <div className={cx('row')}>
                    <div className={cx('col-md-8')}>
                        <div className={cx('card', 'cus-card')}>
                            <div className={cx('card-header')}>
                                <h4>Media</h4>
                            </div>
                            <div className={cx('card-body')}>
                                <div className={cx('media-gallery')}>
                                    <div className={cx('col-md-3', 'pd')}>
                                        <div className={cx('card card-sm', 'bd')}>
                                            <img
                                                className={cx('card-img-top')}
                                                src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                                                alt=""
                                            />
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
                                    <div className={cx('col-md-3', 'pd')}>
                                        <div className={cx('card card-sm', 'bd')}>
                                            <img
                                                className={cx('card-img-top')}
                                                src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                                                alt=""
                                            />
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
                                    <div className={cx('col-md-3', 'pd')}>
                                        <div className={cx('card card-sm', 'bd')}>
                                            <img
                                                className={cx('card-img-top')}
                                                src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                                                alt=""
                                            />
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
                                    <div className={cx('col-md-3', 'pd')}>
                                        <div className={cx('card card-sm', 'bd')}>
                                            <img
                                                className={cx('card-img-top')}
                                                src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                                                alt=""
                                            />
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
                                </div>
                                <div className={cx('row')}>
                                    <div className={cx('col-md-6')}>
                                        <div className={cx('card', 'main-img')}>
                                            <img
                                                src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('col-md-6')}>
                                        <div className={cx('acctachFile')}>
                                            <div className={cx('custom-file')}>
                                                <img src="" alt="" />
                                                <h5>Choose file to upload</h5>
                                                <p>or</p>
                                                <span className={'btn btn-primary'}>Browse files</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('col-md-8')}>
                        <div className={cx('card', 'cus-card')}>
                            <div className={cx('card-header')}>
                                <h4>Variant</h4>
                                <div className={cx('add-variant')}>
                                    <button>+ Add Variant</button>
                                </div>
                            </div>
                            <div className={cx('card-body')}>
                                <table className={cx('table')}>
                                    <thead>
                                        <tr>
                                            <th style={{ width: '3%' }}>
                                                <input type="checkbox" />
                                            </th>
                                            <th style={{ width: '7%' }}></th>
                                            <th style={{ width: '10%' }}>SIZE</th>
                                            <th style={{ width: '10%' }}>COLOR</th>
                                            <th style={{ width: '10%' }}>PRICE</th>
                                            <th style={{ width: '10%' }}>QUANTITY</th>
                                            <th style={{ width: '20%' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <img
                                                    className={cx('product-image')}
                                                    src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
                                                    alt="error"
                                                />
                                            </td>
                                            <td>
                                                <input type="text" value="S" readOnly />
                                            </td>
                                            <td>
                                                <input type="text" value="White" readOnly />
                                            </td>
                                            <td>
                                                <input type="text" value="USD 45.00" readOnly />
                                            </td>
                                            <td className={cx('quantity-controls')}>
                                                <button>-</button>
                                                <input type="number" value="10" readOnly />
                                                <button>+</button>
                                            </td>
                                            <td>
                                                <div className={cx('actions')}>
                                                    <button className={cx('edit-button')}>
                                                        <FontAwesomeIcon icon={faEdit} /> Edit
                                                    </button>
                                                    <button className={cx('edit-button')}>
                                                        <FontAwesomeIcon icon={faTrash} /> Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="checkbox" />
                                            </td>
                                            <td>
                                                <img
                                                    className={cx('product-image')}
                                                    src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
                                                    alt="error"
                                                />
                                            </td>
                                            <td>
                                                <input type="text" value="S" />
                                            </td>
                                            <td>
                                                <input type="text" value="White" readOnly />
                                            </td>
                                            <td>
                                                <input type="text" value="USD 45.00" readOnly />
                                            </td>
                                            <td className={cx('quantity-controls')}>
                                                <button>-</button>
                                                <input type="number" value="10" readOnly />
                                                <button>+</button>
                                            </td>
                                            <td>
                                                <div className={cx('actions')}>
                                                    <button className={cx('edit-button')}>
                                                        <FontAwesomeIcon icon={faEdit} /> Edit
                                                    </button>
                                                    <button className={cx('edit-button')}>
                                                        <FontAwesomeIcon icon={faTrash} /> Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('content-section')}></div>
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

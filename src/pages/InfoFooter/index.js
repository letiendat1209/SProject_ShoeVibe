import classNames from 'classnames/bind';
import styles from './InfoFooter.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagramSquare, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function InfoFooter() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'clearfix')}>
                <hr className={cx('end-sec')} />
                <div className={cx('inner-footer-info', 'row')}>
                    <div className={cx('col', 'pd')}>
                        <h4>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</h4>
                        <div className={cx('info-content')}>
                            <p>
                                <span className={cx('titleHotline')}>1900.633.349</span>
                                <span className={cx('moreinfoFooter')}>
                                    Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
                                </span>
                            </p>
                        </div>
                        <h4 className={cx('info-feedback')}>GÓP Ý & KHIẾU NẠI (08:30 - 20:30)</h4>
                        <div className={cx('info-content')}>
                            <p>
                                <span className={cx('titleHotline')}>1900.633.349</span>
                                <span className={cx('moreinfoFooter')}>
                                    Tất cả các ngày trong tuần (Trừ tết Âm Lịch)
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={cx('col', 'pd')}>
                        <h4>THÔNG TIN</h4>
                        <ul>
                            <li className={cx('mft')}>
                                <a href="#">
                                    <FontAwesomeIcon icon={faAngleRight} /> Giới thiệu về SHOEVIBE
                                </a>
                            </li>
                            <li className={cx('mft')}>
                                <a href="#">
                                    <FontAwesomeIcon icon={faAngleRight} /> Than phiền và góp ý
                                </a>
                            </li>
                            <li className={cx('mft')}>
                                <a href="#">
                                    <FontAwesomeIcon icon={faAngleRight} /> Chính sách và quy định
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('col', 'pd')}>
                        <h4>FAQ</h4>
                        <ul>
                            <li className={cx('mft')}>
                                <a href="">
                                    <FontAwesomeIcon icon={faAngleRight} /> Vận chuyển
                                </a>
                            </li>
                            <li className={cx('mft')}>
                                <a href="">
                                    <FontAwesomeIcon icon={faAngleRight} /> Chính sách đổi trả
                                </a>
                            </li>
                            <li className={cx('mft')}>
                                <a href="">
                                    <FontAwesomeIcon icon={faAngleRight} /> Chính sách đổi trả bảo hành
                                </a>
                            </li>
                        </ul>
                        <ul className={cx('social-list')}>
                            <li className={cx('social')}>
                                <a href="">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li className={cx('social')}>
                                <a href="">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </a>
                            </li>
                            <li className={cx('social')}>
                                <a href="">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                            <li className={cx('social')}>
                                <a href="">
                                    <FontAwesomeIcon icon={faTiktok} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoFooter;

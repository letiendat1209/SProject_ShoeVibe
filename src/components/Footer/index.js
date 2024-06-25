import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'pd')}>
                <div className={cx('footer-inner')}>
                    <div className={cx('footer-middle')}>
                        <div className={cx('col-12')}>
                            <div className={cx('footer-section-title')}>
                                <p className={cx('footer-section-main')}>Hệ thống cửa hàng</p>
                                <p className={cx('footer-section-des')}>Xem địa chỉ các cửa hàng</p>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('col')}>
                                <div className={cx('footer-group')}>
                                    <div className={cx('footer-widget')}>
                                        <h4 className={cx('footer-widget-title')}> KHU VỰC MIỀN BẮC</h4>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faMapPin} /> Cơ sở 1 <span>Xem bản đồ</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faMapPin} /> Cơ sở 2 <span>Xem bản đồ</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col')}>
                                <div className={cx('footer-group')}>
                                    <div className={cx('footer-widget')}>
                                        <h4 className={cx('footer-widget-title')}>KHU VỰC MIỀN TRUNG</h4>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faMapPin} /> Cơ sở 1 <span>Xem bản đồ</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faMapPin} /> Cơ sở 2 <span>Xem bản đồ</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col')}>
                                <div className={cx('footer-group')}>
                                    <div className={cx('footer-widget')}>
                                        <h4 className={cx('footer-widget-title')}>KHU VỰC MIỀN NAM</h4>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faMapPin} /> Cơ sở 1 <span>Xem bản đồ</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <FontAwesomeIcon icon={faMapPin} /> Cơ sở 2 <span>Xem bản đồ</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('footer-bottom')}>
                        <div className={cx('row')}>
                            <div className={cx('col')}>
                                <p className={cx('footer-company-name')}>SHOP GIÀY SHOEVIBE</p>
                                <p className={cx('footer-company-add')}>
                                    Địa chỉ: VP: 214/14 Nguyễn Trãi, Phường Nguyễn Cư Trinh, Tp Hồ Chí Minh
                                </p>
                                <p className={cx('footer-company-tel')}>MST: 099776844</p>
                            </div>
                            <div className={cx('col', 'tct')}>
                                <div className={cx('btc-sign')}>
                                    <a href="">
                                        <img
                                            src="https://www.mwc.com.vn/Assets/App/images/general/bocongthuong.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

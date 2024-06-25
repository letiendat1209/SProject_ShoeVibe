import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import InfoFooter from '~/components/InfoFooter';
import Footer from '~/components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('wrapper')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <InfoFooter />
            <Footer />
        </div>
    );
}
export default DefaultLayout;

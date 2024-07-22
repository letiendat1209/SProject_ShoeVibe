import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import InfoFooter from '~/components/InfoFooter';
import Footer from '~/components/Footer';
import SideCart from '~/pages/SideCart';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className={cx('wrapper')}>
            <Header toggleCart={toggleCart} />
            <div className={cx('wrapper')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <SideCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
            <InfoFooter />
            <Footer />
        </div>
    );
}
export default DefaultLayout;

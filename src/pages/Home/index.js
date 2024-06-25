import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SlideShow from '../Slider';
import ProductSection from '../../components/Product_Section';
import InfoFooter from '../../components/InfoFooter';
import Footer from '../../components/Footer';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <SlideShow />
                <ProductSection />
                <ProductSection />
                <ProductSection />
                <ProductSection />
                <ProductSection />
                <ProductSection />
                {/*block này là bài viết*/}
            </div>
        </div>
    );
}

export default Home;

//Layouts
import AdminLayout from '~/components/Layout/AdminLayout';
import AdminDashboard from '~/pages/Admin/adminDashBoard';
import OrderDetail from '~/pages/Admin/Order/Order-Detail';
import OrderList from '~/pages/Admin/Order/OrderList';
import CreateProduct from '~/pages/Admin/Product/CreateProduct/CreateProduct';
import Product from '~/pages/Admin/Product/Product/Product';
import ProductInfo from '~/pages/Admin/Product/ProductInfo/ProductInfo';

import Blog from '~/pages/Blog';

import Cart from '~/pages/Cart';
import Category from '~/pages/Category';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ProductDetail from '~/pages/ProductDetail';
import Profile from '~/pages/Profile';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart },
    { path: '/product/:id', component: ProductDetail },
    { path: '/category/:categoryId', component: Category },
    { path: '/blog', component: Blog, layout: null },
];
// Private Routes
const privateRoutes = [
    { path: '/admin', component: AdminDashboard, layout: AdminLayout },
    { path: '/admin/product', component: Product, layout: AdminLayout },
    { path: '/admin/createProduct', component: CreateProduct, layout: AdminLayout },
    { path: '/admin/product-detail/:id', component: ProductInfo, layout: AdminLayout },
    { path: '/admin/order-list', component: OrderList, layout: AdminLayout },
    { path: '/admin/order-detail', component: OrderDetail, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };

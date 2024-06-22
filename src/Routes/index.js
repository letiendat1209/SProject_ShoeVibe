//Layouts
import { HeaderOnly } from '~/components/Layout';
import Blog from '~/pages/Blog';

import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/blog', component: Blog, layout: null },
];
// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };

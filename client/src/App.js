import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/Routes';
import { DefaultLayout } from './components/Layout';
import ProtectedRoute from './Routes/ProtectedRoutes';
import { CartProvider } from './services/CartContext';

function App() {
    const storedUserData = localStorage.getItem('user');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;

    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                        {privateRoutes.map((route, index) => {
                            const Page = route.component;

                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <ProtectedRoute
                                            isAllowed={userData && userData.user && userData.user.role === 'admin'}
                                        >
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </ProtectedRoute>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;

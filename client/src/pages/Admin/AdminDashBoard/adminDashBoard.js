import React from 'react';
import classNames from 'classnames/bind';
import styles from './adminDashBoard.module.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const cx = classNames.bind(styles);

const data = [
    { month: 'Jan', income: 4000, expenses: 2400 },
    { month: 'Feb', income: 3000, expenses: 1398 },
    { month: 'Mar', income: 2000, expenses: 9800 },
    { month: 'Apr', income: 2780, expenses: 3908 },
    { month: 'May', income: 1890, expenses: 4800 },
    { month: 'Jun', income: 2390, expenses: 3800 },
    { month: 'Jul', income: 3490, expenses: 4300 },
    { month: 'Aug', income: 4000, expenses: 2400 },
    { month: 'Sep', income: 3000, expenses: 1398 },
    { month: 'Oct', income: 2000, expenses: 9800 },
    { month: 'Nov', income: 2780, expenses: 3908 },
    { month: 'Dec', income: 1890, expenses: 4800 },
];

function AdminDashboard() {
    return (
        <div className={cx('content')}>
            <div className={cx('header')}>
                <h2>DashBoard</h2>
            </div>
            <div className={cx('body')}>
                <div className={cx('cards')}>
                    <div className={cx('card')}>
                        <h3>Total Users</h3>
                        <p className={cx('number')}>72,540</p>
                        <span className={cx('percentage', 'up')}>12.5% from 70,104</span>
                        <div className={cx('chart')}>{/* Placeholder for chart */}</div>
                    </div>

                    <div className={cx('card')}>
                        <h3>Orders</h3>
                        <p className={cx('number')}>29.4%</p>
                        <span className={cx('percentage', 'up')}>1.7% from 29.1%</span>
                        <div className={cx('chart')}>{/* Placeholder for chart */}</div>
                    </div>

                    <div className={cx('card')}>
                        <h3>Total Monthly</h3>
                        <p className={cx('number')}>56.8%</p>
                        <span className={cx('percentage', 'down')}>-4.4% from 61.2%</span>
                        <div className={cx('chart')}>{/* Placeholder for chart */}</div>
                    </div>

                    <div className={cx('card')}>
                        <h3>Pageviews</h3>
                        <p className={cx('number')}>92,913</p>
                        <span className={cx('percentage', 'neutral')}>0.0% from 2,913</span>
                        <div className={cx('chart')}>{/* Placeholder for chart */}</div>
                    </div>
                </div>

                <div className={cx('chart-container')}>
                    <h3>Doanh thu theo tháng</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="income" stroke="#8884d8" />
                            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;

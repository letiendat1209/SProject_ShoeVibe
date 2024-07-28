import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './LocationSelector.module.scss';

const cx = classNames.bind(styles);

const LocationSelector = ({ onLocationChange }) => {
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
    const [selectedCityName, setSelectedCityName] = useState('');
    const [selectedDistrictName, setSelectedDistrictName] = useState('');
    const [selectedWardName, setSelectedWardName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
                );
                setCities(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleCityChange = (e) => {
        const cityId = e.target.value;
        const cityName = e.target.options[e.target.selectedIndex].text;
        setSelectedCity(cityId);
        setSelectedCityName(cityName);
        setDistricts([]);
        setWards([]);
        setSelectedDistrict('');
        setSelectedWard('');
        setSelectedDistrictName('');
        setSelectedWardName('');
        if (cityId) {
            const city = cities.find((c) => c.Id === cityId);
            setDistricts(city ? city.Districts : []);
        }
        onLocationChange({
            cityId,
            districtId: '',
            wardId: '',
            cityName,
            districtName: '',
            wardName: '',
        });
    };

    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        const districtName = e.target.options[e.target.selectedIndex].text;
        setSelectedDistrict(districtId);
        setSelectedDistrictName(districtName);
        setWards([]);
        setSelectedWard('');
        setSelectedWardName('');
        if (districtId) {
            const district = districts.find((d) => d.Id === districtId);
            setWards(district ? district.Wards : []);
        }
        onLocationChange({
            cityId: selectedCity,
            districtId,
            wardId: '',
            cityName: selectedCityName,
            districtName,
            wardName: '',
        });
    };

    const handleWardChange = (e) => {
        const wardId = e.target.value;
        const wardName = e.target.options[e.target.selectedIndex].text;
        setSelectedWard(wardId);
        setSelectedWardName(wardName);
        onLocationChange({
            cityId: selectedCity,
            districtId: selectedDistrict,
            wardId,
            cityName: selectedCityName,
            districtName: selectedDistrictName,
            wardName,
        });
    };

    return (
        <div className={cx('location-selector')}>
            <select
                className={cx('select', 'form-select', 'form-select-sm', 'mb-3')}
                value={selectedCity}
                onChange={handleCityChange}
                style={{ height: '40px', fontSize: '14px' }}
            >
                <option value="">--Chọn tỉnh thành--</option>
                {cities.map((city) => (
                    <option key={city.Id} value={city.Id}>
                        {city.Name}
                    </option>
                ))}
            </select>

            <select
                className={cx('select', 'form-select', 'form-select-sm', 'mb-3')}
                value={selectedDistrict}
                onChange={handleDistrictChange}
                style={{ height: '40px', fontSize: '14px' }}
            >
                <option value="">--Chọn quận huyện--</option>
                {districts.map((district) => (
                    <option key={district.Id} value={district.Id}>
                        {district.Name}
                    </option>
                ))}
            </select>

            <select
                className={cx('select', 'form-select', 'form-select-sm')}
                value={selectedWard}
                onChange={handleWardChange}
                style={{ height: '40px', fontSize: '14px' }}
            >
                <option value="">--Chọn phường/xã--</option>
                {wards.map((ward) => (
                    <option key={ward.Id} value={ward.Id}>
                        {ward.Name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LocationSelector;

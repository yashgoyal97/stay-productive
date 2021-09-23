import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../style/dashboard-header.css';

const DashboardHeader = (props) => {

    return (
        <header id="dashboardHeader">
            <h2>{props.name}</h2>
            <button id={props.btnId}>{props.btnName}</button>
        </header>
    );
};

export default DashboardHeader;
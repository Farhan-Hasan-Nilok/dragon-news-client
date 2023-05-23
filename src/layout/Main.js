import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../pages/Shared/RightSideNav/RightSideNav';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                       <LeftSideNav/>
                    </div>
                    <div className="col-md-7">
                        <Outlet/>
                    </div>
                    <div className="col-md-3">
                        <RightSideNav/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
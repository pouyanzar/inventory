import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
         return (
            <div className="sidebar">
                    <label>
                        <Link to={'/'} className="sidebar__LogoLinkBox">
                            <img src="../Assets/wordmark/wordmark.svg" className="sidebar__LogoLinkBox--topLogo"
                            alt='linkImg'/>
                        </Link>
                    </label>
                    <form className="sidebar__links">
                        <label className="sidebar__links--label">
                            <img src="../Assets/Icons/Inventory.svg" className="sidebar__links--img"
                            alt='linkImg'/>
                            <Link to={'/inventory'} className="sidebar__links--link" />
                        Inventory</label>
                        <label className="sidebar__links--label">
                            <img src="../Assets/Icons/Location.svg" className="sidebar__links--img"
                            alt='linkImg'/>
                            <Link to={'/warehouses'} className="sidebar__links--link" />
                        Locations</label>
                        <label className="sidebar__links--label">
                            <img src="../Assets/Icons/User.svg" className="sidebar__links--img"
                            alt='linkImg'/>
                        Users</label>
                    </form>
                    <div className="sidebar__bottomVersionText">Version 1.0</div>
            </div>
         )
    }
}

export default Sidebar;


import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {AiOutlineSetting, AiOutlineUser, AiOutlinePlusCircle, AiOutlineUnorderedList, AiOutlineFolder, AiOutlineLogout} from "react-icons/ai";
import {FiLayers} from "react-icons/fi";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="dashboard-nav">
                <div className="dashboard-nav-inner">
                    <ul>
                        <li className="active">
                            <NavLink to="/admin/dashboard">
                                <span className="mr-2"><AiOutlineSetting/></span>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/profile">
                                <span className="mr-2"><AiOutlineUser/></span>
                                Edit Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/addTour">
                                <span className="mr-2"><AiOutlinePlusCircle/></span>
                                Add Tour
                            </NavLink>
                        </li>
                        {/* className="active" */}
                        <li> 
                            <NavLink to="/admin/tourListing/active">
                                <span className="mr-2"><FiLayers/></span>
                                Tour Listing
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to="/admin/tourListing/active">
                                        Active <span className="nav-tag green">6</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/tourListing/pending">
                                        Pending <span className="nav-tag yellow">1</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/tourListing/expired">
                                        Expired <span className="nav-tag red">2</span>
                                    </NavLink>
                                </li>
                            </ul>   
                        </li>
                        <li>
                            <NavLink to="/admin/bookingListing">
                                <span className="mr-2"><AiOutlineUnorderedList/></span>
                                Booking List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/bookingHistory">
                                <span className="mr-2"><AiOutlineFolder/></span>
                                History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="">
                                <span className="mr-2"><AiOutlineLogout/></span>
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;
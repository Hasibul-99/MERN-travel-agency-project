import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../../../actions/auth';
import Yatra01 from  "../../../assets/images/Yatra-01.png";

const  HeaderNavbar = ({auth: {isAuthenticated, loading}, logout}) => {

    const authLinks = (
        <div className="login-btn float-right">
            <Link onClick={logout} to="#!"><i className="fa fa-unlock-alt"></i> Logout</Link>
        </div>
    );

    const guestLinks = (
        <div className="login-btn float-right">
            <Link to="/auth/login"><i className="fa fa-user-plus"></i> Register</Link>
            <Link to="/auth/login"><i className="fa fa-unlock-alt"></i> Login</Link>
        </div>
    );

    return (
        <>
        <header>
            <div className="upper-head clearfix">
                <div className="container">
                    <div className="contact-info">
                        <p><i className="flaticon-phone-call"></i> Phone: (012)-345-6789</p>
                        <p><i className="flaticon-mail"></i> Mail: tourntravel@testmail.com</p>
                    </div>
                    {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
                </div>
            </div>
        </header>
        <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
            <div className="container">
                <div className="logo float-left">
                    <Link to="/">
                        <img alt="" src={Yatra01}/>
                    </Link>
                </div>
                <div className="navbar-nav-wrapper float-right">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <Link to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/destination">DESTINATION</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs">BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

HeaderNavbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(HeaderNavbar);
import React, {useEffect, Fragment, useState} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getCurrentProfile} from '../../actions/profile';
import Spinner from "../../layouts/Spinner";
import userAvatar from "../../assets/images/user-avatar.jpg";

const DashboardMyProfile = ({ getCurrentProfile, auth, profile: {profile, loading} }) => {
    const [formData, setFromData] = useState({
        name: '',
        mobile: '',
        company: '',
        website: '',
        boi: '',
        youtube: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: '',

    });

    useEffect(() => {
        getCurrentProfile()
    }, []);

    return loading && profile === null ? ( <Spinner/> ) :(
    <Fragment>
        <div className="dashboard-content">
            <div className="dashboard-form">
                <div className="row">
                {/* <!-- Profile --> */}
                    <div className="col-lg-6 col-md-6 col-xs-12 padding-right-30">
                        <div className="dashboard-list-box">
                            <h4 className="gray">Profile Details</h4>
                            <div className="dashboard-list-box-static">
                                
                                {/* <!-- Avatar --> */}
                                <div className="edit-profile-photo">
                                    <img src={userAvatar} alt=""/>
                                    <div className="change-photo-btn">
                                        <div className="photoUpload">
                                            <span><i className="fa fa-upload"></i> Upload Photo</span>
                                            <input type="file" className="upload" />
                                        </div>
                                    </div>
                                </div>
            
                                {/* <!-- Details --> */}
                                <div className="my-profile">

                                    <label>Your Name *</label>
                                    <input type="text"/>

                                    <label>Phone Number *</label>
                                    <input type="text"/>

                                    <label>Company</label>
                                    <input type="text"/>

                                    <label>Website</label>
                                    <input type="text"/>

                                    <label>Your Bio *</label>
                                    <textarea name="notes" id="notes" cols="30" rows="10">
                                    </textarea>

                                    <label className="twitter-input"><i className="fa fa-twitter"></i> Twitter</label>
                                    <input placeholder="https://www.twitter.com/" type="text"/>

                                    <label className="fb-input"><i className="fa fa-facebook-square"></i> Facebook</label>
                                    <input placeholder="https://www.facebook.com/" type="text"/>

                                    <label className="fb-input"><i className="fa fa-instagram-square"></i> Instagram</label>
                                    <input placeholder="https://www.instagram.com/" type="text"/>

                                    <label className="fb-input"><i className="fa fa-linkedin-square"></i> Linkedin</label>
                                    <input placeholder="https://www.linkedin.com/" type="text"/>

                                    <label className="fb-input"><i className="fa fa-youtube-square"></i> YouTube</label>
                                    <input placeholder="https://www.youtube.com/" type="text"/>
                                </div>
            
                                <button className="button">Save Changes</button>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Change Password --> */}
                    <div className="col-lg-6 col-md-6 col-xs-12 padding-left-30">
                        <div className="dashboard-list-box margin-top-0">
                            <h4 className="gray">Your Address</h4>
                            <div className="dashboard-list-box-static">

                                {/* <!-- Change Password --> */}
                                <div className="my-profile">
                                    <label className="margin-top-0">Company Name</label>
                                    <input type="text"/>

                                    <label>Address *</label>
                                    <input type="text"/>

                                    <label>Zip Code *</label>
                                    <input type="text"/>

                                    <label>Country *</label>
                                    <input type="text"/>

                                    <label>City *</label>
                                    <input type="text"/>

                                    <label>Region/State *</label>
                                    <input type="text"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
};

DashboardMyProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(DashboardMyProfile);
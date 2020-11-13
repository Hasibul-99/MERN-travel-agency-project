import React, {useEffect, Fragment, useState} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {getCurrentProfile} from '../../actions/profile';
import Spinner from "../../layouts/Spinner";
import userAvatar from "../../assets/images/user-avatar.jpg";

const DashboardMyProfile = ({ getCurrentProfile, auth, profile: {profile, loading} }) => {
    const [formData, setFromData] = useState(null);
    const [formSocial, setFromSocial] = useState({});

    useEffect(() => {
        getCurrentProfile();
    }, []);

    useEffect(() => {
        if (profile) {
            setFromData(profile);
            if(profile && profile.social) {
                setFromSocial(profile.social)
            }
        }
    }, [profile]);


    const changeValue = (e) => {
        const { name, value } = e.target;

        setFromData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const changeSocialValue = (e) => {
        const { name, value } = e.target;

        setFromSocial(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveChanges = (e) => {
        e.preventDefault();

        let updateData = formData;
        updateData.social = formSocial;


        console.log("update", updateData);
    }

    return loading && profile === null ? ( <Spinner/> ) : (
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
                                    <img src={formData?.user?.avatar ? `http://localhost:5000/${formData.user.avatar}` : userAvatar} alt=""/>
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
                                    <input type="text" name="name" value={formData?.user?.name ? formData.user.name : ""} onChange={changeValue}/>

                                    <label>Phone Number *</label>
                                    <input type="text" name="mobile" value={formData?.mobile ? formData.mobile : ""} onChange={changeValue}/>

                                    <label>Company</label>
                                    <input type="text" name="company" value={formData?.company ? formData.company : ""} onChange={changeValue}/>

                                    <label>Website</label>
                                    <input type="text" name="website" value={formData?.website ? formData.website : ""} onChange={changeValue}/>

                                    <label>Your Bio *</label>
                                    <textarea name="notes" id="notes" cols="30" rows="10" name="boi" 
                                        value={formData?.bio} onChange={changeValue}></textarea>

                                    <label className="twitter-input"><i className="fa fa-twitter"></i> Twitter</label>
                                    <input value={formSocial?.twitter ? formSocial.twitter : ""} placeholder="https://www.twitter.com/" name="twitter" onChange={changeSocialValue} type="text"/>

                                    <label className="fb-input"><i className="fa fa-facebook-square"></i> Facebook</label>
                                    <input value={formSocial?.facebook ? formSocial.facebook : ""} placeholder="https://www.facebook.com/" name="facebook" onChange={changeSocialValue} type="text"/>

                                    <label className="fb-input"><i className="fa fa-instagram-square"></i> Instagram</label>
                                    <input value={formSocial?.instagram ? formSocial.instagram : ""} placeholder="https://www.instagram.com/" name="instagram" onChange={changeSocialValue} type="text"/>

                                    <label className="fb-input"><i className="fa fa-linkedin-square"></i> Linkedin</label>
                                    <input value={formSocial?.linkedin ? formSocial.linkedin : ""} placeholder="https://www.linkedin.com/" name="linkedin" onChange={changeSocialValue} type="text"/>

                                    <label className="fb-input"><i className="fa fa-youtube-square"></i> YouTube</label>
                                    <input value={formSocial?.youtube ? formSocial.youtube : ""} placeholder="https://www.youtube.com/" name="youtube" onChange={changeSocialValue} type="text"/>
                                </div>
            
                                <button className="button" onClick={saveChanges}>Save Changes</button>
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
                                    <label>Location *</label>
                                    <input type="text" name="address" name="location" onChange={changeValue} />

                                    {/* <label>Zip Code *</label>
                                    <input type="text" name="zipCode" onChange={changeValue}/> */}

                                    {/* <label>Country *</label>
                                    <input type="text" name="country" value="Bangladesh" onChange={changeValue} readOnly/>

                                    <label>City *</label>
                                    <input type="text" name="city" onChange={changeValue}/>

                                    <label>Region/State *</label>
                                    <input type="text" name="state" onChange={changeValue}/> */}
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
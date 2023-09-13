import React, {useState} from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import './ProfileTabs.css'
import PersonalData from "../ProfileContent/Personal Data/PersonalData";
import ChangePassword from "../ProfileContent/Change Password/ChangePassword";
import PrivacyPolicy from "../ProfileContent/Privacy Policy/PrivacyPolicy";
import TermsConditions from "../ProfileContent/TermsConditions/TermsConditions";
import Media from "../../Media/Media";

const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'tab1':
                return (
                    <Tab.Content>
                        <PersonalData/>
                    </Tab.Content>
                );
            case 'tab2':
                return (
                    <Tab.Content>
                        <ChangePassword/>
                    </Tab.Content>
                );
            case 'tab3':
                return (
                    <Tab.Content>
                        <PrivacyPolicy/>
                    </Tab.Content>
                );
            case 'tab4' :
                return (
                    <Tab.Content>
                        <TermsConditions/>
                    </Tab.Content>
                )
            default:
                return null;
        }
    }

    const renderTabTitle = (title, imageSrc) => (
        <div className="d-flex align-items-center">
            <Media
                type="img" src={imageSrc} alt="Tab Icon" className="me-3"/>
            {title}
        </div>
    );
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-lg-3 border-right">
                        <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="my-tabs"
                              className="tabs-btns d-block">
                            <Tab eventKey="tab1"
                                 title={renderTabTitle('personal Data', require('../../../assets/images/icons/User Rounded.png'))}/>
                            <Tab eventKey="tab2"
                                 title={renderTabTitle('Change Password', require('../../../assets/images/icons/Lock Keyhole.png'))}/>
                            <Tab eventKey="tab3"
                                 title={renderTabTitle('Privacy Policy', require('../../../assets/images/icons/Shield Warning.png'))}/>
                            <Tab eventKey="tab4"
                                 title={renderTabTitle('Terms & Conditions', require('../../../assets/images/icons/Notes.png'))}/>
                        </Tabs>
                    </div>
                    <div className="col-md-8 col-lg-9">
                        {renderTabContent()}
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProfileTabs;

import Chat from "../mainChat/Chats";
import NavTabs from "../mainChat/nav-tabs";
import NavItem from "../mainChat/navItem";
import TabContent from "../mainChat/TabContent";
import TabContentForRightDesktop from "../mainChat/TabContentForRightDesktop";
import TabPane from "../mainChat/TabPane";
import TabPaneRowStructure from "../mainChat/TabPaneRowStructure";
import Wrapper from "./Wrapper";

export default function Structure(){
    return (
        <div className="d-flex">
            <NavTabs>
                <NavItem className="nav-item active" type="button" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" role="tab" aria-controls="home-tab-pane" aria-selected="true" btnContent="us"/>
                <NavItem  className="nav-item" id="profile-tab" data-bs-toggle="tab" data-bs-target="#chat-tab-pane"
                role="tab" aria-controls="chat-tab-pane" aria-selected="false" btnContent="ch"/>
                <NavItem className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                    type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" btnContent="gr"/>
                <NavItem className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                    type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false" btnContent="con"/>
                <NavItem className="nav-link" id="setting-tab" data-bs-toggle="tab" data-bs-target="#setting-tab-pane"
                    type="button" role="tab" aria-controls="setting-tab-pane" aria-selected="false" btnContent="set"/>
                <NavItem className="logBtn" btnContent="Log"/>
            </NavTabs>

            {/* Tab Content */}
            <Wrapper>
                <TabContent>
                    {/* Profile */}
                    <TabPane className="tab-pane fade show active" id="home-tab-pane" aria-labelledby="home-tab">
                        {/* For User Profile */}
                        <TabPaneRowStructure>
                            arat khan
                            {/* <div class="row">
                                    <div class="col-12 mt-3 my-5">
                                        <h4 style="font-weight:600">My Profile</h4>
                                    </div>
                                </div> */}
                        </TabPaneRowStructure>
                    </TabPane>    
                    {/* test */}
                    <TabPane className="tab-pane fade" id="chat-tab-pane" aria-labelledby="test-tab" >
                        <TabPaneRowStructure>
                            khansss
                            {/* <div class="row">
                                    <div class="col-12 mt-3 my-5">
                                        <h4 style="font-weight:600">My Profile</h4>
                                    </div>
                                </div> */}
                        </TabPaneRowStructure>
                    </TabPane>    
                    {/* Group */}
                    <TabPane className="tab-pane fade" id="profile-tab-pane" aria-labelledby="profile-tab" />
                    {/* Contacts */}
                    <TabPane className="tab-pane fade" id="contact-tab-pane" aria-labelledby="contact-tab" />
                    {/*  */}
                    <TabPane className="tab-pane fade" id="setting-tab-pane" aria-labelledby="setting-tab" />
                </TabContent>
                {/* Chats Right for Desktop */}
                <Chat>
                    <TabContentForRightDesktop className="tab-content" id="v-pills-tabContent">
                        {/* <TabPane className="tab-pane fade show active" id="home-tab-pane" aria-labelledby="home-tab" /> */}
                        
                    </TabContentForRightDesktop>
                </Chat>
            </Wrapper>
        </div>    
    );
}
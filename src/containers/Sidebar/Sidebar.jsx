import React from 'react';
import SidebarBtn from '../../components/SidebarBtn/SidebarBtn';
import { Overview, Tickets, Ideas, Contacts, Agents, Articles, Settings, Subscription } from '../../assets/icons/Icons';
import SidebarLogo from "../../assets/images/logo.svg";
import "./sidebar.scss";
const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className='logo-holder'>
                <img src={SidebarLogo} alt="logo" className='site-logo' />
                <span>Dashboard Kit</span>
            </div>

            <SidebarBtn icon={<Overview />} title="Overview" />
            <SidebarBtn icon={<Tickets />} title="Tickets" />
            <SidebarBtn icon={<Ideas />} title="Ideas" />
            <SidebarBtn icon={<Contacts />} title="Contacts" />
            <SidebarBtn icon={<Agents />} title="Agents" />
            <SidebarBtn icon={<Articles />} title="Articles" />
            <SidebarBtn icon={<Settings />} title="Settings" />
            <SidebarBtn icon={<Subscription />} title="Subscription" />

        </div>
    );
}

export default Sidebar;

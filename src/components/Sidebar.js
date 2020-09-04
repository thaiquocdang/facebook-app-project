import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ForumIcon from '@material-ui/icons/Forum';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../API/StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleAltIcon} title='Friends' />
            <SidebarRow Icon={ForumIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={OndemandVideoIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreIcon} title='More' />

        </div>
    )
}

export default Sidebar

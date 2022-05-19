import React from 'react'
import "./SideBar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined"
//@ts-ignore
import profilePicture from "C:/Users/pc/Pictures/Camera Roll/FAMILY/IMG_20220101_171645_091 (3).jpg"
import SideBarChat from './SideBarChat'
function SideBar ()
{
    return (
        <div className='side_bar'>

            <div className='sideBar_header'>
                <Avatar src={profilePicture} />
                <div className='sideBar_header_right'>

                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>

            </div>
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>


                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>

                    <input type="text" placeholder='Search or Start a new chat' />
                </div>
            </div>
            <div className='sidebar_chats'>
                <SideBarChat room_name={"Rutagengwa Asante Bruce"} lastMessage={"Call me Spider Lotus"} />
                <SideBarChat room_name={"Rutagengwa Asante Bruce"} lastMessage={"Call me Spider Lotus"} />
                <SideBarChat room_name={"Rutagengwa Asante Bruce"} lastMessage={"Call me Spider Lotus"} />
                <SideBarChat room_name={"Rutagengwa Asante Bruce"} lastMessage={"Call me Spider Lotus"} />



            </div>
        </div>
    )
}

export default SideBar

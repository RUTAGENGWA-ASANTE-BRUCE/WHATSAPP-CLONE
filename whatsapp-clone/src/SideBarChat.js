import React from 'react'
import "./SideBarChat.css"
import Avatar from "@material-ui/core/Avatar"

function SideBarChat ({ room_name, lastMessage })
{
    return (
        <div className='sideBar_chat'>
            <Avatar />
            <div className='sideBar_chat_info'>
                <h2>{room_name}</h2>
                <p>{lastMessage}</p>
            </div>
        </div>
    )
}

export default SideBarChat

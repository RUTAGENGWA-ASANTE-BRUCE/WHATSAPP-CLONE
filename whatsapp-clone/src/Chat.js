import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { Avatar, IconButton } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import SearchIcon from "@material-ui/icons/Search"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import axios from './axios'

function Chat ()
{

    const [roomInfo, setRoomInfo] = useState([])
    useEffect(() =>
    {
        async function fetchRoomInfo ()
        {
            const req = await axios.get("/whatsapp/chatProfiles")
            setRoomInfo(req.data)
        }
        fetchRoomInfo()
    }, [])
    return (
        <div className='chat'>

            <div className='chat_header'>

                <Avatar />
                <div className='chat_headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className='chat_headerRright'>

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

            <div className='chat_body'>
                <p className='chat_message'>
                    <span className='chat_name'>Sonny</span>
                    This is a message
                    <span className='chat_timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat_message chat_receiver'>
                    <span className='chat_name'>Sonny</span>
                    This is a message
                    <span className='chat_timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat_message'>
                    <span className='chat_name'>Sonny</span>
                    This is a message
                    <span className='chat_timestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input type="text" placeholder='Type a message' />
                    <button type='submit'>Send a message</button>
                    <MicIcon />
                </form>
            </div>

        </div>
    )
}

export default Chat

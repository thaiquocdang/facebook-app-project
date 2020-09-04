import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RedoOutlinedIcon from '@material-ui/icons/RedoOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({ profilePic, userName, img, timestamp, message }) {
    const postTime =  new Date(timestamp?.toDate()).toUTCString();
    
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src={profilePic}/>
                <div className="post__topInfo">
                    <h3>{userName}</h3>
                    <p>{postTime}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__img">
                <img src={img} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpOutlinedIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <RedoOutlinedIcon />
                    <p>Share</p>
                </div>
                <div className="post__option account-confirm">
                    <AccountCircleIcon />
                    <ExpandMoreIcon className="post__option__expandMoreIcon"/>
                </div>
            </div>
                
        </div>
    )
}

export default Post

import React from 'react'
import {Avatar} from '@material-ui/core'
import './Story.css'

function Story({img, userAvatar, userName}) {
    return (
        <div style={{backgroundImage: `url(${img})`}} className="story">
            <Avatar src={userAvatar} />
            <h4>{userName}</h4>
        </div>
    )
}

export default Story

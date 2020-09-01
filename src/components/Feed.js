import React from 'react'
import './Feed.css'
import StoryCarousel from './StoryCarousel'
import CreatePost from './CreatePost'
import Post from './Post'


function Feed() {
    return (
        <div className="feed">
            <StoryCarousel />
            <CreatePost />
            <Post />
        </div>
    )
}

export default Feed

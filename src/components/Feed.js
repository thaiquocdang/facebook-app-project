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
            <Post 
                userAvatar='https://media.japanpowered.com/images/goku.png'
                timestamp='1h'
                message="I am Songoku super saiza."
                userName='Jack Dang'
                img="https://i.pinimg.com/originals/fb/03/6e/fb036eb2b2df44ab719f5f66b6e37d8f.jpg"
            />
            <Post 
                userAvatar='https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'
                timestamp='1 day'
                message="SpaceX reach the Moon at the first time"
                userName='Elon Musk'
                img="https://cdn.abcotvs.com/dip/images/6213148_052620-cc-ap-spacex-dragon-img.jpg?w=1600"    
            />
            <Post 
                userName="Unknown"
                timestamp='1h'
                message="Hi there, I'm nobody"
            />
        </div>
    )
}

export default Feed

import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryCarousel from './StoryCarousel'
import CreatePost from './CreatePost'
import Post from './Post'
import db from '../firebase'


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        )
    },[])

    return (
        <div className="feed">
            <StoryCarousel />
            <CreatePost />
            {posts.map((post) => (
                <Post  
                    key={post.id}
                    profilePic={post.data.profilePic}
                    userName={post.data.userName}
                    img = {post.data.img}
                    timestamp = {post.data.timestamp}
                    message = {post.data.message}
                />
            ))}

            
           
        </div>
    )
}

export default Feed

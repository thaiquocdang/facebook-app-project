import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import './CreatePost.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

function CreatePost() {
    const [input, setInput] = useState('')
    const [imgUrl, setImageUrl] = useState('')
    console.log(input);
    const handleSubmit = (e) => {
        e.preventDefault();

        setInput("");
        setImageUrl('')
    }
    return (
        <div className="createPost">
            <div className="createPost__top">
                <Avatar src="https://media.japanpowered.com/images/goku.png"/>
                <form>
                    <input 
                        value = {input}
                        onChange = {(e) => setInput(e.target.value)}
                        placeholder="What's on your mind, Jack" 
                        className="createPost__input"
                    />
                    <input 
                        value={imgUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder="Insert image (optional)"
                    />
                    <button onClick={handleSubmit}>Hidden Submit</button>
                </form>
            </div>
            <div className="createPost__bottom">
                <div className="createPost__option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h4>Live Video</h4>
                </div>
                <div className="createPost__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h4>Photo/Video</h4>
                </div>
                <div className="createPost__option">
                    <EmojiEmotionsOutlinedIcon style={{color: "orange"}}/>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
            
        </div>
    )
}

export default CreatePost

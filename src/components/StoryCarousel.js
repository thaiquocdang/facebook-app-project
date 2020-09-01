import React from 'react';
import Story from './Story'
import './StoryCarousel.css'

function StoryCarousel() {
    return (
        <div className="storycarousel">
            <Story 
                userName="Jack Dang " 
                userAvatar="https://media.japanpowered.com/images/goku.png" 
                img="https://i.pinimg.com/originals/fb/03/6e/fb036eb2b2df44ab719f5f66b6e37d8f.jpg" 
            />
            <Story 
                userName="Elon Musk" 
                userAvatar="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" 
                img="https://cdn.abcotvs.com/dip/images/6213148_052620-cc-ap-spacex-dragon-img.jpg?w=1600" 
            />
            <Story 
                userName="Thai Quoc Dang (Jack)" 
                userAvatar="https://media.japanpowered.com/images/goku.png" 
                img="https://i.pinimg.com/originals/fb/03/6e/fb036eb2b2df44ab719f5f66b6e37d8f.jpg" 
            />
            <Story 
                userName="Elon Musk" 
                userAvatar="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" 
                img="https://cdn.abcotvs.com/dip/images/6213148_052620-cc-ap-spacex-dragon-img.jpg?w=1600" 
            />
            <Story 
                userName="Jack Dang" 
                userAvatar="https://media.japanpowered.com/images/goku.png" 
                img="https://i.pinimg.com/originals/fb/03/6e/fb036eb2b2df44ab719f5f66b6e37d8f.jpg" 
            />
            <Story 
                userName="Elon Musk" 
                userAvatar="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" 
                img="https://cdn.abcotvs.com/dip/images/6213148_052620-cc-ap-spacex-dragon-img.jpg?w=1600" 
            />
        </div>
    )
}

export default StoryCarousel

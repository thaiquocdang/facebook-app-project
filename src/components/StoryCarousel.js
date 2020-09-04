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
                userName="Gohan" 
                userAvatar="https://cdn.shopify.com/s/files/1/1425/8892/products/FUN35081--Dragonball-Z-SS-Gohan-Youth-Pop_17e9e8c7-1e6c-439b-b6ef-fbe99de3f4a1.jpg?v=1597195459" 
                img="https://e7.pngegg.com/pngimages/900/453/png-clipart-dragon-ball-z-gohan-illustration-gohan-super-saiya-saiyan-dragon-ball-z-dokkan-battle-dragon-ball-purple-fictional-characters.png" 
            />
            <Story 
                userName="Mark Zuckerberg" 
                userAvatar="https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg" 
                img="https://i2.wp.com/sandboxworld.com/wp-content/uploads/2010/12/mark-zuckerberg-time2-e1293724593168.jpg?resize=500%2C670" 
            />
            <Story 
                userName="Bill Gates" 
                userAvatar="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg" 
                img="https://thumbs.dreamstime.com/z/man-charity-donation-icons-vector-illustration-design-man-charity-donation-icons-128731153.jpg" 
            />
            <Story 
                userName="Lan Ngoc" 
                userAvatar="https://luxury-inside.vn/data/uploads/2019/08/LanNgoc_hinhanh_1.jpg" 
                img="https://img.vtcnew.com.vn/resize/th/upload/2020/07/02/ngocc-06491433.jpg" 
            />
        </div>
    )
}

export default StoryCarousel

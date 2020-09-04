import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div >
            <iframe
                src="https://7news.com.au/news/vic"
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hiden"}}
                scrolling="no"
                frameBorder-="0"
                allowTransparency="true"
                allow="encrypted-media"
                position="fixed"
                small_header = "true"
            ></iframe>
        </div>
    )
}

export default Widgets

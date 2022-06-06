import React from 'react'
import './media_component.css'


const Media_component2 = ({ imgUrl, banner, text }) => (
    <div className='media'>
        <div className="media__image">
        <img src={imgUrl} alt="image" /></div>
        <div className="media__body">
            <h3 className='media__title'>{banner}</h3>
            <p>{text}<p className='link-arrow'>Więcej</p></p>
        </div>
    </div>
);

export default Media_component2

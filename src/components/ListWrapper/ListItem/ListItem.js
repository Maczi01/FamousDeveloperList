import React from 'react';
import './ListItem.css';
import danAbramovImage from '../../../assets/images/danabramov.jpg'

const ListItem = (props) => (
    <li className='listItem__wrapper'>
        <img src={danAbramovImage} className='listItem__image'/>
        <div>
            <h2 className='listItem__name'>{props.name}</h2>
            <p className='listItem__description'>{props.description}</p>
            <button className='listItem__button'>{props.link}</button>
        </div>
    </li>
)

export default ListItem;
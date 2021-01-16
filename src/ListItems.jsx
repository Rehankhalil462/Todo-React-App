import React from 'react';
import {TotalListItems,ListItemsParagraph} from './ListItems.styles';
import FlipMove from 'react-flip-move';

const ListItems = ({ items,deleteItems }) => {
    const listItems = items.map(item => {
        return (

            <TotalListItems key={item.key}>
                <ListItemsParagraph>{item.text}
                <span className='icon' onClick={()=>deleteItems(item.key)}>&#9986;</span>

                </ListItemsParagraph>
            </TotalListItems>
           
        )
    })
    return (
        <div><FlipMove duration={500} easing='ease-in-out'>{listItems}</FlipMove></div>
    )
};

export default ListItems;

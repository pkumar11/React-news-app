import React from 'react';
import { css } from 'glamor';

const NewsItem=({item})=>{

    let news_list=css({
        padding:'20px',
        boxSizing:'border-box',
        borderBottom:'1px solid grey',
        fontSize:'1.6rem'
    })
    return(
            <div {...news_list}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
            </div>
    )

}
export default NewsItem;
import React from 'react';
import NewsItem from './news-item-list';

const NewsList=(props)=>{
const items=props.news.map((item)=>{
    return(
       <NewsItem key={item.id} item={item}/>
    );
})

    return(
        <div>{items}</div>
    )
}
export default NewsList;
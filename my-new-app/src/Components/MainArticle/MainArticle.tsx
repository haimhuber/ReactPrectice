import './MainArticle.css';
import React from 'react'

type MainArticleProps = {
    article: string;
}


export const MainArticle: React.FC<MainArticleProps> =
    ({ article }) => {
        return (
            <div className='article'>
                <h2>New York!</h2>
                <p >{article}</p>
            </div>
        );
    }

import './ArticleList.css';

import React, { useEffect, useState } from 'react'

export const ArticleList = () => {
    const [showArticle, setShowArticle] = useState<boolean[]>([]);


    const articles = [
        {
            id: 101,
            title: "Exploring the Alps",
            summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
        },
        {
            id: 102,
            title: "Top 10 Beaches",
            summary:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        },
        {
            id: 103,
            title: "Hidden Gems in Japan",
            summary:
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
        },
    ];
    useEffect(() => {
        setShowArticle(new Array(articles.length).fill(false));
    }, [articles.length]);


    return (
        <div>
            {articles.map((article, index) =>
                <div key={index}>
                    <h2>Title: {article.title}</h2>
                    {showArticle[index] && <p>{article.summary}</p>}
                    <button type="button"
                        onClick={() => {
                            const updated = [...showArticle];
                            updated[index] = !updated[index];
                            setShowArticle(updated)
                        }}> {showArticle[index] ? 'Show' : 'Hide'}</button>
                </div>
            )}


        </div>
    )
}

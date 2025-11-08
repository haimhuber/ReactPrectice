import { ArticleList } from '../ArticleList/ArticleList';
import './MatchList.css';

import React, { useEffect, useState } from 'react'

type match = {
    teams: string;
    date: string;
    isLive: boolean;

};

type MatchListProps = {
    matches: match[];
};


export const MatchList: React.FC<MatchListProps> =
    ({ matches }) => {
        const [showDate, setShowDate] = useState<boolean[]>([]);

        useEffect(() => {
            setShowDate(new Array(matches.length).fill(false));
        }, [matches.length]);
        return (
            <div>
                {matches.map((match, index) =>
                    <div key={index}>
                        <h1>Team: {match.teams}</h1>
                        {showDate[index] && <p>Dates: {match.date}</p>}
                        <button onClick={() => {
                            const update = [...showDate];
                            update[index] = !update[index];
                            setShowDate(update);
                        }}> Show Dates </button>
                        <p>is Live: {match.isLive ? 'Not live' : 'Live'}</p>
                    </div>
                )}
            </div>
        );
    }

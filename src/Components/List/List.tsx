import './List.css'

import React from 'react'

type ListProps = {
    list: string[];
}


export const List: React.FC<ListProps> =
    ({ list }) => {
        return (
            <div className='list'>
                <h2>Five best things to do in new york</h2>
                {list.map((src) =>
                    <ul>{src}</ul>
                )}

            </div>
        );
    }

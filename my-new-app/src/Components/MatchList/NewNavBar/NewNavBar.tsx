import { Link } from 'react-router-dom';
import './NewNavBar.css';
import type { NavItem } from '../../NavBar/NavBarInfo';

import React from 'react'

export const NewNavBar = (props: { theArr: NavItem[] }) => {
    return (
        <div className='NewNacBar'>
            {props.theArr.map((curr) => {
                return (
                    <div className='navItem'>
                        <Link to={curr.hrefStr}>{curr.displayStr}</Link>
                    </div>
                )
            })}

        </div>
    )
}



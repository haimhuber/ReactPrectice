import { Link } from "react-router-dom";
import './NewNavBar.css';
import type { NavItem } from "../../NavBarInfo";

import React from 'react'

export const NewNavBar = (props: { theArr: NavItem[] }) => {
    return (

        <div className="the-nav-bar">
            {
                props.theArr.map((curr) => {
                    return (
                        <div className="navItem">
                            <Link to={curr.hrefStr}>{curr.displayStr}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

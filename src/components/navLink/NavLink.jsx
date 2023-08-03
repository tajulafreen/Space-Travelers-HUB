import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from '../header/header.module.css';


const navLink = ({ content, path }) => {
    return (

        <NavLink path={path} className={(status) => status.isActive ? classes.activeNav : ''} to={path}>
            {content}
        </NavLink>

    )
}

export default navLink

import React from 'react'
import classes from './header.module.css';
import headerLogo from '../../assets/images/headerLogo.png';
import NavLink from '../navLink/NavLink';

const Header = ({ links }) => {

    return (
        <header className={classes.header}>
            <div className={classes["header-container"]}>
                <div className="">
                    <img src={headerLogo} alt="" />
                </div>

                <div className="">
                    <nav>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <NavLink path={link.path} content={link.navigationContent} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>


        </header>
    )
}

export default Header
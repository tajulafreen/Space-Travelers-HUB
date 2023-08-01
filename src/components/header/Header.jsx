import React from 'react'
import classes from './header.module.css';
import headerLogo from '../../assets/images/headerLogo.png';
import NavLink from '../navLink/NavLink';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes["header-container"]}>
                <div className="">
                    <img src={headerLogo} alt="" />
                </div>

                <div className="">
                    <nav>
                        <ul>
                            <li>
                                <NavLink path={"/"} content={"Rocket"} />
                            </li>

                            <li>
                                <NavLink path={"/missions"} content={"Missions"} />
                            </li>

                            <li>
                                <div className={classes.separater}></div>
                            </li>

                            <li>
                                <NavLink path={"/profile"} content={"My Profile"} />
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>


        </header>
    )
}

export default Header
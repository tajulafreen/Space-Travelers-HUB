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

//  {rocketsdata.data.map((e) => (
//             <>
//               <li key={e.id}>
//                 {e.flickr_images && <img src={e.flickr_images} alt={e.name} />}
//                 <h2>{e.name}</h2>
//                 <p>
//                   {!e.reserved && <p style={{ background: "red", padding: "40px" }}>Reserved</p>} {e.description}
//                 </p>
//               </li>
//               <hr />
//             </>

//           ))}
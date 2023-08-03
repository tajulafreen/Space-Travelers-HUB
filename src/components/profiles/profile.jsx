import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import classes from './profile.module.css';



const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const rockets = useSelector((state) => state.rockets.data);


  const myReservedRockets = useMemo(() => rockets.filter((rocket) => rocket.reserved === true));
  const myJoinedMissions = useMemo(() => missions.filter((mission) => mission.joined), []);

  return (
    <div className={classes["profile-container"]}>
      <div className={classes.column}>
        <h2 className={classes["mission-heading"]} >My Missions</h2>
        {myJoinedMissions.length === 0 ? (
          <p className={classes["message"]}>No joined missions.</p>
        ) : (
          <ul className={classes["list"]}>
            {myJoinedMissions.map((mission) => (
              <li className={classes['mission-element']} key={mission.mission_id}>
                <h4 className={classes["missions-name"]}>{mission.mission_name}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={classes.column}>
        <h2 className={["mission-heading"]}>My Rockets</h2>
        {myReservedRockets.length < 1 ? (
          <p className={classes["message"]}>No reserved rockets.</p>
        ) : (
          <ul className={classes["list"]}>
            {myReservedRockets.map((rocket) => (
              <li className={classes['mission-element']} key={rocket.id}>
                <h4 className={classes["missions-name"]}>{rocket.name}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


export default Profile;
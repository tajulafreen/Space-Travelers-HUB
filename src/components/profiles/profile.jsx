import React from 'react';
import { useSelector } from 'react-redux';
import './profile.module.css'
const Profile = ()=> {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);
  

  const myJoinedMissions = missions.filter((mission) => joinedMissions.includes(mission.mission_id));
  return (
    <div className="profile-container">
      <div className="column">
        <h2 className="mission-heading">My Missions</h2>
        {myJoinedMissions.length === 0? (
          <p className="message">No joined missions.</p>
        ) : (
          <ul className="u-list">
            {myJoinedMissions.map((mission) => (
              <li className="mission-list" key={mission.mission_id}>
                <h4 className="missions-name">{mission.mission_name}</h4>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


export default Profile;
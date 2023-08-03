import React, { useEffect } from 'react';
import { fetchMissionThunk } from '../../redux/missions/missionSlice';
import { missionSelector } from '../../redux/missions/missionSlice';
import { useSelector, } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import classes from './mission.module.css';
import { joinMission as joinMissionAction, cancelMission as cancelMissionAction } from '../../redux/missions/missionSlice';

const Mission = () => {
  const state = useSelector(missionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionThunk())
  }, [])

  const joinMission = (id) => {
    dispatch(joinMissionAction(id));
  }

  const cancelMission = (id) => {
    dispatch(cancelMissionAction(id));
  }

  return (
    <main>
      {state.loading && <p className={classes.loadingIndicator} >...loading</p>}
      <table className={classes.missionTable}>
        <thead className={classes.missionThead}>
          <th >
            <h3>Mision</h3>
          </th>

          <th>
            <h3>Description</h3>
          </th>

          <th>
            <h3>Status</h3>
          </th>

          <th>

          </th>
        </thead>

        <tbody>
          {state.missions.map((mission) => {
            return (
              <tr key={mission.mission_id}>
                <td><h3>{mission.mission_name}</h3></td>
                <td><p>{mission.description}</p></td>
                <td><div className={!mission.joined ? classes.statusNotActive : classes.StatusActive} ><p> {!mission.joined ? <>Not a member</> : <> Active member</>}</p></div></td>
                <td>
                  {mission.joined ?
                    <button onClick={() => cancelMission(mission.mission_id)} >Leave Mission</button> :
                    <button onClick={() => joinMission(mission.mission_id)} className={classes.joinMission}>Join mission</button>}
                </td>
              </tr>
            )

          })}
        </tbody>
      </table>
    </main >
  );
}

export default Mission;
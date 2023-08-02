import React, { useEffect } from 'react';
import { fetchMissionThunk } from '../../redux/missions/missionSlice';
import { missionSelector } from '../../redux/missions/missionSlice';
import { useSelector, } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import classes from './mission.module.css';

const Mission = () => {
  const state = useSelector(missionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionThunk())
  }, [])

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
              <tr key={mission.id}>
                <td><h3>{mission.mission_name}</h3></td>
                <td><p>{mission.description}</p></td>
                <td><div className={classes.status} ><p>active member</p></div></td>
                <td><button>Leave Mission</button></td>
              </tr>
            )

          })}
        </tbody>
      </table>
    </main >
  );
}

export default Mission;
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
      <ul>
        {state.missions.map((mission) => {
          return <>
            <p><strong>mission-name</strong>:{mission.mission_name} </p>
            <p> <strong>mission-description:</strong>  {mission.description} </p>
            <hr />
          </>
        })}
      </ul>

    </main >
  );
}

export default Mission;
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets , cancelReservation} from '../../redux/rockets/rocketSlice';
import classes from './rocket.module.css';
import { bookRocket as bookrocketAction } from '../../redux/rockets/rocketSlice';

const Rocket = () => {
  const rocketsdata = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch])


  const bookRocket = (rocketId, reserved) => {
    if(reserved){
      dispatch(cancelReservation(rocketId));
    }
    else{
      dispatch(bookrocketAction(rocketId));
    }
  }

  return (
    <div>
      {rocketsdata.loading ? (
        <div>Loading ...</div>
      ) : (
        <ul className={classes.rocketsList}>
          {rocketsdata.data.map((rocket) => {
            return (
              <li key={rocket.id}>
                <div className={classes.rocketImgageContainer}>
                  <img src={rocket.flickr_images} alt="" />
                </div>

                <div className={classes.rocketDescription}>
                  <h2>{rocket.name} </h2>
                  <p><>{rocket.reserved && <span>reserved</span>}</>{rocket.description}</p>
                  <button type='button' className={rocket.reserved && classes.cancel} onClick={() => bookRocket(rocket.id, rocket.reserved)}> {rocket.reserved ? <>cancel reservation </> : <>reserve</>}</button>
                </div>
              </li>
            )
          })}

        </ul>
      )}
    </div>
  );
}


export default Rocket;
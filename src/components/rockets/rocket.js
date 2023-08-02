import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketSlice';
const Rocket = ()=> {
    const rocketsdata = useSelector((state) => state.rocketsList);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchRockets());
    }, [dispatch])

    console.log(rocketsdata)

  return (
    <div>
    {rocketsdata.loading ? (
        <div>Loading ...</div>
      ) : (
      <ul className="rocketsList">
      {rocketsdata.value.map((e) => (
        <li key={e.id}>
          {e.flickrImages[0] && <img src={e.flickrImages[0]} alt={e.name} />}
          <h2>{e.name}</h2>
          <p>
            {e.reserved && <p>Reserved</p>} {e.description}
          </p>
        </li>
      ))}
    </ul>
    )}
    </div>
  );
}

export default Rocket;
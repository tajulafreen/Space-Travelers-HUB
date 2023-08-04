import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/missions/mission';
import store from '../redux/store';
import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../redux/missions/missionSlice';

const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);
describe('Mission component', () => {
  it('renders correctly', () => {
    const mockStore = configureStore({
      reducer: {
        missions: missionsReducer, // Replace with your actual reducer name
      },
    });

    const { container } = render(
      <Provider store={mockStore}>
        <Mission />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from '../App_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

 export default Root;

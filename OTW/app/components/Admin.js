import React from 'react';

import ButtonGroup from './ButtonGroup';
import routes from '.'; // fixme where to store all the routes?

const Admin = ({handleNavigate}) => (
  <ButtonGroup routes={routes} handleNavigate={handleNavigate} />
);

export default Admin;
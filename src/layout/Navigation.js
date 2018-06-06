import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationContent = styled.div`
  width: 215px;
  padding: 20px;
`;
const NavigationDrawer = ({ open, toggle }) => {
  return (
    <Drawer anchor="left" open={open} onClick={toggle}>
      <NavigationContent>
        <Link to="/events">Events</Link>
      </NavigationContent>
    </Drawer>
  );
};

export default NavigationDrawer;

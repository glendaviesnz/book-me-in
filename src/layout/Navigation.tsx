import Drawer from '@material-ui/core/Drawer';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavigationContent = styled.div`
  width: 215px;
  padding: 20px;
`;
interface IProps {
  open: boolean;
  toggle: any
}
const NavigationDrawer = ({ open, toggle }: IProps) => {
  return (
    <Drawer anchor="left" open={open} onClick={toggle}>
      <NavigationContent>
        <Link to="/events">Events</Link>
      </NavigationContent>
    </Drawer>
  );
};

export default NavigationDrawer;

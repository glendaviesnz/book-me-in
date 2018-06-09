import Drawer from '@material-ui/core/Drawer';
import { css } from 'emotion'
import * as React from 'react';
import { Link } from 'react-router-dom';

const navigationStyles = css`
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
      <div className={navigationStyles}>
        <Link to="/events">Events</Link>
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;

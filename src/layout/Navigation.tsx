import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventIcon from '@material-ui/icons/Event';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  open: boolean;
  toggle: any;
}
const NavigationDrawer: React.SFC<IProps> = ({ open, toggle }) => {
  return (
    <Drawer anchor="left" open={open} onClick={toggle}>

        <List component="nav">
            <ListItem  component={Link} {...{to: "/home/events"}} button={true}>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItem>
        </List>

    </Drawer>
  );
};

export default NavigationDrawer;

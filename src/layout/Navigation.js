import React from 'react';
import Drawer from 'material-ui/Drawer';
import styled from 'styled-components';

const NavigationContent= styled.div`
    width: 215px;
    padding: 20px;
`;
const NavigationDrawer = ({ open, toggle }) => {
    return (
        <Drawer
            anchor="left"
            open={open}
            onRequestClose={toggle}
            onClick={toggle}
        >
            <NavigationContent>hello</NavigationContent>
        </Drawer>
    );
}

export default NavigationDrawer;

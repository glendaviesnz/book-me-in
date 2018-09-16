import { css } from 'emotion';
import * as React from 'react';

import EventInput from './EventInput';
import EventList from './EventList';

const eventLayout = css`
  display: flex;
  justify-content: space-evenly;
`
const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <div className={eventLayout}>
        <EventList />
        <EventInput />
      </div>
    </div>
  );
};

export default Events;

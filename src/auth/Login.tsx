import { css } from 'emotion'
import * as React from 'react';

import LoginForm from './LoginForm';

const loginStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default () => {
    return (
        <div className={loginStyles}>
            <LoginForm />
        </div>
    )
}
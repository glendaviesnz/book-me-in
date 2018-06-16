import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';

function WithLoading(Component: any) {
  return function WihLoadingComponent({ loading, ...props }: any) {
    if (!loading) { 
        return (<Component {...props} />);
    } else {
        return (<CircularProgress color="primary" size={40} className="fadeOut" />);
    }
  }
}
export default WithLoading;
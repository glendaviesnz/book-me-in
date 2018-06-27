import CircularProgress from '@material-ui/core/CircularProgress';
import * as React from 'react';

interface IWithLoadingProps {
  loading: boolean;
}

const WithLoading = <P extends object>(Component: React.ComponentType<P>)
  : React.SFC<P & IWithLoadingProps> => {
  return ({ loading, ...props }: IWithLoadingProps) => {
    if (!loading) {
      return (<Component {...props} />);
    } else {
      return (<CircularProgress color="primary" size={40} className="fadeOut" />);
    }
  }
}
export default WithLoading;
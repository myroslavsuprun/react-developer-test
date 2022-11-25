import { useParams } from 'react-router-dom';

export const withUseParams = Component => {
  return function (props) {
    const params = useParams();

    return <Component params={params} {...props} />;
  };
};

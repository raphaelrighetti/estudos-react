import React from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ route }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(route);
  }, []);

  return null;
};

export default Redirect;

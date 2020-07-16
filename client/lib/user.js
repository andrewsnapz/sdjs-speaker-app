import React, { useState } from 'react';
import PropTypes from 'prop-types';

const User = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const value = { user, setUser, loading, setLoading };

  return <User.Provider value={value}>{children}</User.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.any,
};

export const useUser = () => React.useContext(User);

import {lsKeys} from 'constants';
import {clearLocalStorage, setLocalStorage} from 'utils';
import React, {createContext, useReducer} from 'react';
import {FC} from 'react';

// Types
type ContextType = {
  state: {
    isLoggedIn: boolean;
  };
  login: () => void;
  logout: () => void;
};

// * initial Value
const initialValue: ContextType = {
  state: {
    isLoggedIn: false,
  },
  login: async () => {},
  logout: async () => {},
};

// * Reducer
type Actions = {
  type: 'SET_IS_LOGGED_IN';
  isLoggedIn: boolean;
};
const reducer = (state: any, action: Actions) => {
  switch (action.type) {
    case 'SET_IS_LOGGED_IN':
      return {...state, isLoggedIn: action.isLoggedIn};
    default:
      return state;
  }
};

export const AuthContext = createContext<ContextType>(initialValue);
export const AuthProvider: FC<{children: any}> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialValue.state);

  const login = async () => {
    dispatch({type: 'SET_IS_LOGGED_IN', isLoggedIn: true});
    await setLocalStorage(lsKeys.isLoggedIn, '1');
  };

  const logout = async () => {
    dispatch({type: 'SET_IS_LOGGED_IN', isLoggedIn: false});
    await clearLocalStorage();
  };

  return (
    <AuthContext.Provider value={{state, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

import { User } from 'models';
import { logOut, selectUser, setUser } from 'persist';
import { useDispatch, useSelector } from 'react-redux';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const login = (user: User) => {
    dispatch(setUser(user));
  };

  const logout = () => {
    dispatch(logOut());
  };

  return { user, login, logout };
};

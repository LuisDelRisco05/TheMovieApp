import { useDispatch, useSelector } from "react-redux";

import { onRegister, onLogin, onLogout, onUpdateStorage } from "../store/auth/authSlice";


export const useAuthStore = () => {

    const dispatch = useDispatch();

    const { user, users, status } = useSelector( state => state.auth);


    const startSaveUser = (newUser) => {
        dispatch( onRegister(newUser) )
    }

    const startLogin = (user) => {

      dispatch( onLogin(user) )
      
    }

    const startLogout = () => {
      dispatch( onLogout())
  }

  const startGetStorageUpdate = (newUsers) => {
    dispatch( onUpdateStorage(newUsers))
}




  return {
    // State
    users,
    user,
    status,

    // Functions
    startSaveUser,
    startLogin,
    startLogout,
    startGetStorageUpdate
  }
}

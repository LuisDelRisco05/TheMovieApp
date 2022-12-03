import { useDispatch, useSelector } from "react-redux";

import { onRegister, onLogin, onUpdateStorage } from "../store/auth/authSlice";


export const useAuthStore = () => {

    const dispatch = useDispatch();

    const { user, users } = useSelector( state => state.auth);


    const startSaveUser = (newUser) => {
        dispatch( onRegister(newUser) )
    }

    const startLogin = (user) => {

        dispatch( onLogin(user) )
    }

    const startGetStorageUpdate = (newUsers) => {
        dispatch( onUpdateStorage(newUsers))
    }




  return {
    // State
    users,
    user,

    // Functions
    startSaveUser,
    startLogin,
    startGetStorageUpdate
  }
}

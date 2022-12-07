import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        users: [],
        user: {},
    },
    reducers: {
        onRegister: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.users = [...state.users, payload ]
            state.user = payload
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload
            console.log('payload user', payload);
        },
        onLogout: ( state ) => {
            state.status = 'not-authenticated';
            state.user = {}
        },
        onUpdateStorage: ( state, { payload }) => {
            state.users = payload
            console.log('desde update', payload);

        }
    }
});


export const { onRegister, onLogin, onLogout, onUpdateStorage } = authSlice.actions;
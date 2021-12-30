import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'

import axios from 'axios'

const usersAdapter = createEntityAdapter({
    selectId: (user) => user.id,
})

// const initialState = usersAdapter.getInitialState()
const localStorageState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : usersAdapter.getInitialState()
const initialState = localStorageState.users

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://localhost:1337/api/users')
    return response.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
    },
})

export default usersSlice.reducer

export const { selectAll: selectAllUsers, selectById: selectUserById } = usersAdapter.getSelectors((state) => state.users)

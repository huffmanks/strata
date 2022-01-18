import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const UserSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        updateUser: (state, action) => {
            state.value.map((user) => {
                if (user.id === action.payload.id) {
                    user = action.payload
                }
            })
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
    },
})

export const { addUser, updateUser, deleteUser } = UserSlice.actions

export default UserSlice.reducer

import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'

import axios from 'axios'

const teamsAdapter = createEntityAdapter({
    selectId: (team) => team.id,
})

// const initialState = teamsAdapter.getInitialState()
const localStorageState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : teamsAdapter.getInitialState()
const initialState = localStorageState.teams

export const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
    const response = await axios.get('http://localhost:1337/api/teams?populate=*')
    return response.data.data
})

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTeams.fulfilled, teamsAdapter.setAll)
    },
})

export default teamsSlice.reducer

export const { selectAll: selectAllTeams, selectById: selectTeamById } = teamsAdapter.getSelectors((state) => state.teams)

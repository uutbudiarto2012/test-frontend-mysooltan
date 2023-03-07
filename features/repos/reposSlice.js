import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'
export const getRepos = createAsyncThunk("repos/getRepos", async () => {
    const response = await axios({
        url: process.env.githubApi + "/users/uutbudiarto2012/repos",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + process.env.githubToken
        }
    })
    return response.data;
})

const repoEntity = createEntityAdapter({
    selectId: (repos) => repos.id
})


export const reposSlice = createSlice({
    name: 'repos',
    initialState: repoEntity.getInitialState(),
    extraReducers: {
        [getRepos.fulfilled]: (state, action) => {
            repoEntity.setAll(state, action.payload)
        }
    }
})


export const repoSelectors = repoEntity.getSelectors(state => state.repos)
export default reposSlice.reducer
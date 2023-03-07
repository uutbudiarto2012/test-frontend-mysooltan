import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const getRepos = createAsyncThunk("repos/getRepos", async (username = "uutbudiarto2012") => {
    const response = await axios({
        url: process.env.githubApi + `/users/${username}/repos`,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + process.env.githubToken
        }
    })
    return response.data;
})


export const reposSlice = createSlice({
    name: 'repos',
    initialState: {
        entities: [],
        status: null,
    },
    extraReducers: {
        [getRepos.pending]: (state) => {
            state.status = 'loading'
        },
        [getRepos.fulfilled]: (state, action) => {
            state.entities = action.payload
            state.status = 'success'
        },
        [getRepos.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})

export default reposSlice.reducer
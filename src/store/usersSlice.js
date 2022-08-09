import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    users: [],
    loading: false,
    error: null,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersRequest: (state) => {
            state.loading = true
            state.error = null
        },
        getUsersSuccess: (state, action) => {
            state.loading = false
            state.users = action.payload
        },
        getUsersFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { getUsersRequest, getUsersSuccess, getUsersFailure } = usersSlice.actions

export default usersSlice.reducer


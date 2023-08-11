import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  projects: {},
  isLoading: false,
  error: null,
}

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const res = await axios(`locales/projects.json`)
    const data = await res.data
    console.log('project reducer', data)
    return {data: data}
  }
)

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.isLoading = false
      state.projects = action.payload.data
    })
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})

export default projectsSlice.reducer
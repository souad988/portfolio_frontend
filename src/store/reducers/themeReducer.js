import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  themeId: 'light',
  theme: {},
  isLoading: false,
  error: null,
}

export const fetchTheme = createAsyncThunk(
  'theme/fetchtheme',
  async (themeId) => {
    const res = await axios(`themes/${themeId}.json`)
    const data = await res.data
    console.log('theme reducer ', res, data)
    return {data: data, themeId: themeId}
  }
)

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTheme.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchTheme.fulfilled, (state, action) => {
      state.isLoading = false
      state.theme= action.payload.data
      state.themeId= action.payload.themeId
    })
    builder.addCase(fetchTheme.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})


export default themeSlice.reducer
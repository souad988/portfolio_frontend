import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  languageId: 'en',
  language: {},
  isLoading: false,
  error: null,
}

export const fetchLanguage = createAsyncThunk(
  'language/fetchLanguage',
  async (languageId) => {
    const res = await axios(`locales/${languageId}.json`)
    const data = await res.data
    return {data: data, languageId: languageId}
  }
)

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLanguage.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchLanguage.fulfilled, (state, action) => {
      state.isLoading = false
      state.language = action.payload.data
      state.languageId= action.payload.languageId
    })
    builder.addCase(fetchLanguage.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
})

export default languageSlice.reducer
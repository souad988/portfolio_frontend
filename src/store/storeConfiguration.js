import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "./reducers/themeReducer";
import languageSlice from "./reducers/languageReducer";

export const store = configureStore({
  reducer: {
    language: languageSlice,
    theme: themeSlice
  },
})


export default store;
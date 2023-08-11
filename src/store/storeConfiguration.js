import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "./reducers/themeReducer";
import languageSlice from "./reducers/languageReducer";
import  projectsSlice  from "./reducers/projectReducer";

export const store = configureStore({
  reducer: {
    language: languageSlice,
    theme: themeSlice,
    projects: projectsSlice
  },
})


export default store;
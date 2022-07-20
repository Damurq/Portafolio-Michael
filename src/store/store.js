/**
 * https://redux-toolkit.js.org/tutorials/quick-start#usage-summary
 * This creates a Redux store, and also automatically configure the Redux DevTools extension so that 
 * you can inspect the store while developing.
 */
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/theme'
import themeLanguage from '../features/language/language'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: themeLanguage,
  },
})
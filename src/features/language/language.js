/**
 * Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
 * Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.
 */
 import { createSlice } from '@reduxjs/toolkit'

 const initialState = {
   currentLanguage: localStorage.getItem('selected-language') || "EN",
 }
 
 export const language = createSlice({
   name: 'counter',
   initialState,
   reducers: {
     changeLanguage: (state) => {
       localStorage.setItem('selected-language', state.currentLanguage === "EN" ? "ES" : "EN")
       state.currentLanguage = state.currentLanguage === "EN" ? "ES" : "EN"
     },
   },
 })
 
 // Action creators are generated for each case reducer function
 export const { changeLanguage } = language.actions
 
 export default language.reducer
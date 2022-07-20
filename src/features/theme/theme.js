/**
 * Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
 * Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.
 */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTheme: localStorage.getItem('selected-theme') || "DARK",
}

export const theme = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeTheme: (state) => {
      localStorage.setItem('selected-theme', state.currentTheme === "DARK" ? "LIGHT" : "DARK")
      state.currentTheme = state.currentTheme === "DARK" ? "LIGHT" : "DARK"
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = theme.actions

export default theme.reducer
import { createSlice } from '@reduxjs/toolkit'

const savedTheme = localStorage.getItem('isDarkMode')

const initialState = {
  isDarkMode: savedTheme !== null ? JSON.parse(savedTheme) : true
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
       state.isDarkMode = !state.isDarkMode
       localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode))
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = themeSlice.actions

export default themeSlice.reducer

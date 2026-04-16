import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false
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
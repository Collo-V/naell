import { createSlice } from '@reduxjs/toolkit'

export const symptomsSlice = createSlice({
    name: 'search',
    initialState:{
        showSearch:false

    },
    reducers: {
        writeShowSearch:(state => {
            state.showSearch = !state.showSearch
            // let showSearch = state.showSearch
            // state.showSearch = !showSearch
        }),
        writeSymptoms: (state,action) => {
            state.symptoms = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { writeShowSearch } = symptomsSlice.actions

export default symptomsSlice.reducer

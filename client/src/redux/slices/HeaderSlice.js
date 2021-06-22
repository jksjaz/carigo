import { createSlice } from '@reduxjs/toolkit'

export const headerSlice = createSlice({
    name: 'header',
    initialState: {
        color: 'Any',
        sunRoof: false,
        allWheelDrive: false,
        lowMiles: false,
        powerWindows: false,
        navigation: false,
        heatedSeats: false
    },
    reducers: {
        changeOption: (state, action) => {
            state[action.payload.option] = action.payload.value
        }
    }
})

export const {
    changeOption
} = headerSlice.actions

export default headerSlice.reducer
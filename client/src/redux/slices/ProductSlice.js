import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { mapObjectToQueryString, truthyKeys } from '../../helpers/utils'

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (payload, { getState, rejectWithValue }) => {
        const options = getState().header
        const params = {
            hasSunroof: options.sunRoof,
            isFourWheelDrive: options.allWheelDrive,
            hasLowMiles: options.lowMiles,
            hasPowerWindows: options.powerWindows,
            hasNavigation: options.navigation,
            hasHeatedSeats: options.heatedSeats,
            color: options.color === 'Any' ? false : options.color
        }
        const truthyParams = truthyKeys(params)
        const query = mapObjectToQueryString(truthyParams)
        try {
            const response = await axios.get(`http://localhost:3001?${query}`)
            return response.data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState: {
      inventory: [],
      error: null,
      loading: false
    },
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.inventory = action.payload
            state.loading = false
        },
        [fetchProducts.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        [fetchProducts.pending]: state => {
            state.error = null
            state.loading = true
        }
    }
})

export default productSlice.reducer
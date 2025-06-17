import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FiltersState {
    techStack: string[]
}

const initialState: FiltersState = {
    techStack: []
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<string>) => {
            if (!state.techStack.includes(action.payload)) {
                state.techStack.push(action.payload)
            }
        },
        removeFilter: (state, action: PayloadAction<string>) => {
            state.techStack = state.techStack.filter(tag => tag !== action.payload);
        }
    }
})

export const { addFilter, removeFilter } = filtersSlice.actions;
export default filtersSlice.reducer
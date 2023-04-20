import { createSlice, current } from '@reduxjs/toolkit'

const stateSlice = createSlice({
	name: 'salesOrderList/state',
	initialState: {
		selectedRows: [],
		selectedRow: [],
		deleteMode: '',
		status: '-'
	},
	reducers: {
		setSelectedRows: (state, action) => {
			state.selectedRows = action.payload
		},
		setSelectedRow: (state, action) => {
			state.selectedRow = action.payload
		},
		addRowItem: (state, { payload }) => {
			const currentState = current(state)
			if (!currentState.selectedRows.includes(payload)) {
				return {
					selectedRows: [...currentState.selectedRows, ...payload]
				}
			}
		},
		removeRowItem: (state, { payload }) => {
			const currentState = current(state)
			if (currentState.selectedRows.includes(payload)) {
				return {
					selectedRows: currentState.selectedRows.filter(id => id !== payload)
				}
			}
		},
		setstatus: (state, action) => {
			state.status= action.payload
		},
		setDeleteMode: (state, action) => {
			state.deleteMode = action.payload
		},
	},
})

export const {
	setSelectedRows,
	setSelectedRow,
	addRowItem,
	removeRowItem,
	toggleDeleteConfirmation,
	setDeleteMode,
	setstatus
} = stateSlice.actions

export default stateSlice.reducer

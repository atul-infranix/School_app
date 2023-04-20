import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetSalesOrders, apigetJobData, apiDeleteSalesOrders, apideleteJobData, apichangeJobStatus, apiupdateJobName } from 'services/SalesService'

export const getOrders = createAsyncThunk('unique name', async (data) => {
    // alert("dgbfhgd");
    const response = await apigetJobData(data);
    console.log(response);
    return response
})

export const deleteOrders = async (data) => {
    const response = await apideleteJobData(data)
    return response
}

export const changeStatus = async (data) => {
    const response = await apichangeJobStatus(data)
    return response
}

export const updateJobName = async (data) => {
    const response = await apiupdateJobName(data)
    return response
}

export const initialTableData = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: {
        order: '',
        key: ''
    }
}

const dataSlice = createSlice({
    name: 'unique name',
    initialState: {
        loading: false,
        orderList: [],
        tableData: initialTableData
    },
    reducers: {
        setOrderList: (state, action) => {
            state.orderList = action.payload
        },
        setTableData: (state, action) => {
            state.tableData = action.payload
        }
    },
    extraReducers: {
        [getOrders.fulfilled]: (state, action) => {
            state.orderList = action.payload;
            state.tableData.total = action.payload.length > 0 ? action.payload[0].total_count : 0
            state.loading = false
        },
        [getOrders.pending]: (state) => {
            state.loading = true
        }
    }
})

export const { setOrderList, setTableData } = dataSlice.actions

export default dataSlice.reducer

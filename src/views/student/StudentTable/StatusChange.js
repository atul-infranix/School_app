import React from 'react'
import { toast, Notification } from 'components/ui'
import { ConfirmDialog } from 'components/shared'
import { useSelector, useDispatch } from 'react-redux'
import {  setSelectedRow, setSelectedRows, setstatus } from '../store/stateSlice'
import { changeStatus, getOrders } from '../store/dataSlice'

const StatusChange = () => {

    const dispatch = useDispatch()
    const selectedRows = useSelector((state) => state.salesOrderList.state.selectedRows)
    const selectedRow = useSelector((state) => state.salesOrderList.state.selectedRow)
    const status = useSelector((state) => state.salesOrderList.state.status)
    const tableData = useSelector((state) => state.salesOrderList.data.tableData)

    const onDialogClose = () => {
        dispatch(setstatus('-'))

        // if (statusChangeMode === 'single') {
        //     dispatch(setSelectedRow([]))
        // }
    }

    const setstatusChange = async () => {
        // dispatch(setstatusChangeMode(''))

        // if(statusChangeMode === 'single') {
        // 	const success = await changeStatus({id: selectedRow})
        // 	changeSucceed(success.status)
        // 	dispatch(setSelectedRow([]))
        // }

        // if(statusChangeMode === 'batch') {
        const success = await changeStatus({ id: selectedRow, status: status });
        changeSucceed(success.status)
        dispatch(setSelectedRows([]))
        // }
    }

    const changeSucceed = (success, orders) => {
        if (success) {
            dispatch(setstatus('-'));
            dispatch(getOrders(tableData))
            toast.push(
                <Notification title={"Successfuly Changed Status"} type="success" duration={2500}>
                    Successfuly chaned status
                </Notification>
                , {
                    placement: 'top-center'
                }
            )
        }
        else{
            dispatch(setstatus('-'));
            toast.push(
                <Notification title={"Some error occured"} type="danger" duration={2500}>
                    Some error occured
                </Notification>
                , {
                    placement: 'top-center'
                }
            )
        }
    }

    return (
        <ConfirmDialog
            isOpen={status == 1 || status == 0}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            type="success"
            title={'Change job status?'}
            onCancel={onDialogClose}
            onConfirm={setstatusChange}
            confirmButtonColor="blue-600"
        >
            <p>
                Are you sure you want to {status == 1 ? 'deactivate' : 'activate'} this job?

            </p>
        </ConfirmDialog>
    )
}

export default StatusChange
import React from 'react'
import reducer from '../store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
import DummyTable from './Table'
import OrderDeleteConfirmation from './OrderDeleteConfirmation'
import OrderTableSearch from './OrderTableSearch'
import OrdersTableTools from './OrdersTableTools'
import StatusChange from './StatusChange'
import { useSelector } from 'react-redux'
injectReducer('salesOrderList', reducer)

const OrderList = () => {
    const tableData = useSelector((state)=>state.salesOrderList.data.tableData)
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Orders ({tableData.total})</h3>
                <OrdersTableTools />
            </div>
            <DummyTable />
            <OrderDeleteConfirmation />
            <StatusChange/>
        </AdaptableCard>
    )
}

export default OrderList
import React from 'react'
// import reducer from '../store'
import { injectReducer } from 'store/index'
import { AdaptableCard } from 'components/shared'
// import DummyTable from './Table'
// import OrderDeleteConfirmation from './StudentDeleteConfirmation'
// import OrderTableSearch from './StudentTableSearch'
// import OrdersTableTools from './StudentTableTools'
// import StatusChange from './StatusChange'
import { useSelector } from 'react-redux'
import StudentTable from './Table'
import StudentTableTools from './SchoolTableTools'
// injectReducer('salesOrderList', reducer)

const StudentList = () => {
    // const tableData = useSelector((state)=>state.salesOrderList.data.tableData)
    return (
        <AdaptableCard className="h-full" bodyClass="h-full">
        <div className="flex items-center justify-between mb-4">
        <h3>School (10)</h3>
        <StudentTableTools/>
    </div>
            <StudentTable/>
        </AdaptableCard>
    )
}

export default StudentList
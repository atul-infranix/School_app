import React from 'react'
import { Button, Dropdown } from 'components/ui'
import { HiDownload, HiOutlineTrash } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import { setDeleteMode } from '../store/stateSlice'
import { Link } from 'react-router-dom'
import { BASE_URL } from 'constants/api.constant'
import StudentTableSearch from './SchoolTableSearch'

const BatchDeleteButton = () => {

  const dispatch = useDispatch()

  const onBatchDelete = () => {
    dispatch(setDeleteMode('batch'))
  }

  return (
    <Button
      variant="solid"
      color="red-600"
      size="sm"
      icon={<HiOutlineTrash />}
      onClick={onBatchDelete}
    >
      Batch Delete
    </Button>
  )
}

const StudentTableTools = () => {
  // const selectedRows = useSelector((state) => state.salesOrderList.state.selectedRows);
  const renderToggle = <Button
    block
    size="sm"
    icon={<HiDownload />}
  >
    Export
  </Button>
  return (
    <div className="flex flex-row items-center gap-4">
  {/*{selectedRows.length > 0 && <BatchDeleteButton />}*/}
      <Link
        to={BASE_URL + "downloadExcel/dummy.xls"}
        target="_blank"
        download
      >
        <Dropdown placement="middle-end-top" renderTitle={renderToggle}>
          <Dropdown.Item eventKey="a">
            <p style={{textAlign:"center",width:"100%"}}>Excel</p>
          </Dropdown.Item>
          <Dropdown.Item eventKey="b">
            <p style={{textAlign:"center",width:"100%"}}>PDF</p>
          </Dropdown.Item>
        </Dropdown>

      </Link>
      <StudentTableSearch />
    </div>
  )
}

export default StudentTableTools
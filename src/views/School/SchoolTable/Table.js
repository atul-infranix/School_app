import React, { useEffect, useCallback, useMemo, useState } from 'react'
import { Badge, Button, Dropdown, Input, Notification, toast, Tooltip } from 'components/ui'
import { DataTable } from 'components/shared'
import { HiOutlineDotsVertical, HiOutlineEye, HiOutlineEyeOff, HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi'
import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
// import { getOrders, setOrderList, setTableData, updateJobName } from '../store/dataSlice'
// import { setSelectedRows, addRowItem, removeRowItem, setDeleteMode, setSelectedRow, setstatus } from '../store/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import dayjs from 'dayjs'
// import { apigetJobData, apiupdateJobName } from 'services/SalesService'
import axios from 'axios'
import { BASE_URL } from 'constants/api.constant'
import { btnStyle, tableInputStyle } from './Style'
import studentData from './schoolData';
import { TbSend } from 'react-icons/tb'


const orderStatusColor = {
	0: { label: 'Paid', dotClass: 'bg-emerald-500', textClass: 'text-emerald-500' },
	1: { label: 'Pending', dotClass: 'bg-amber-500', textClass: 'text-amber-500' },
	2: { label: 'Failed', dotClass: 'bg-red-500', textClass: 'text-red-500' },
}



const StudentColumn = (props) => {
	// let id = props.id
	const { textTheme } = useThemeClass()
	const navigate = useNavigate()
	// console.log({row});

	// const onView = useCallback(() => {
	// 	navigate(`/app/sales/order-details/${id}`);
	// }, [navigate, row])
	// parseInt(props.id) ? parseInt(props.id) + 1 : "";
	return (
		<span
			className={`cursor-pointer select-none font-semibold hover:${textTheme}`}
		// onClick={onView}
		>
			#{props.id}
		</span>
	)
}

const ActionColumn = ({ row }) => {
	const { textTheme } = useThemeClass();
	return (
		<div className="flex justify-center text-lg">
			<Dropdown renderTitle={<HiOutlineDotsVertical className='cursor-pointer' />} placement="middle-end-bottom" title="Hover" trigger="hover">
				<Dropdown.Item eventKey="a" >
					<div style={{display:"flex",alignItems:"center"}}>
						<Tooltip title={"Edit"}>
							<span
								className={`cursor-pointer p-2 hover:${textTheme}`}
							>
								<HiOutlinePencilAlt/>
							</span>
						</Tooltip>
						<Tooltip title={"Delete"}>
							<span
								className={`cursor-pointer p-2 hover:${textTheme}`}
							>
								<HiOutlineTrash/>
							</span>
						</Tooltip>
						<Tooltip title={row.status == 1 ? "Disabled" : "Activated"}>
							<span
								className={`cursor-pointer p-2 hover:${textTheme}`}
							>
								{row.status == 1 ? <HiOutlineEyeOff /> : <HiOutlineEye />}
							</span>
						</Tooltip>
						<Tooltip title={"Send Notification"}>
							<span
								className={`cursor-pointer p-2 hover:${textTheme}`}
							>
								<TbSend/>
							</span>
						</Tooltip>
					</div>
				</Dropdown.Item>
			</Dropdown>
		</div>
	)
}

const StudentTable = () => {

	const columns = React.useMemo(() => [
		{
			Header: 'Reg No.',
			accessor: 'reg_no',
			sortable: false
		},
		{
			Header: "Name",
			accessor: "school_name",
			sortable: true
		},
		{
			Header: 'BOARD',
			accessor: 'board',
			sortable: true
		},
		{
			Header: 'City',
			accessor: 'city',
			sortable: true,
		},
		{
			Header: 'State',
			accessor: 'state',
			sortable: true,
		},
		{
			Header: 'Manager',
			accessor: 'manager',
			sortable: true,
		},
		{
			Header: 'Principal',
			accessor: 'principal',
			sortable: true,
		},
		{
			Header: 'Contact',
			accessor: 'contact',
			sortable: true,
		},
		{
			Header: 'Action',
			id: '',
			accessor: (row) => row,
			Cell: props => <ActionColumn row={props.row.original} />
		},
	], [])





	return (
		<div>
			<DataTable
				columns={columns}
				data={studentData}
				selectable
			/>
		</div>
	)
}

export default StudentTable
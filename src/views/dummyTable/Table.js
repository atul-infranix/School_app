import React, { useEffect, useCallback, useMemo, useState } from 'react'
import { Badge, Button, Input, Notification, toast, Tooltip } from 'components/ui'
import { DataTable } from 'components/shared'
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineTrash } from 'react-icons/hi'
import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, setOrderList, setTableData, updateJobName } from '../store/dataSlice'
import { setSelectedRows, addRowItem, removeRowItem, setDeleteMode, setSelectedRow, setstatus } from '../store/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'
import dayjs from 'dayjs'
import { apigetJobData, apiupdateJobName } from 'services/SalesService'
import axios from 'axios'
import { BASE_URL } from 'constants/api.constant'
import { btnStyle, tableInputStyle } from './Style'

const orderStatusColor = {
	0: { label: 'Paid', dotClass: 'bg-emerald-500', textClass: 'text-emerald-500' },
	1: { label: 'Pending', dotClass: 'bg-amber-500', textClass: 'text-amber-500' },
	2: { label: 'Failed', dotClass: 'bg-red-500', textClass: 'text-red-500' },
}


const PaymentMethodImage = ({ paymentMehod, className }) => {

	switch (paymentMehod) {
		case 'visa':
			return <img className={className} src="/img/others/img-8.png" alt={paymentMehod} />
		case 'master':
			return <img className={className} src="/img/others/img-9.png" alt={paymentMehod} />
		case 'paypal':
			return <img className={className} src="/img/others/img-10.png" alt={paymentMehod} />
		default:
			return <div></div>
	}
}

const OrderColumn = (props) => {
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

	const dispatch = useDispatch()
	const { textTheme } = useThemeClass()
	const navigate = useNavigate()

	const onDelete = () => {
		dispatch(setDeleteMode('single'))
		dispatch(setSelectedRow([row.job_id]))
	}

	// const onView = useCallback(() => {
	// 	navigate(`/app/sales/order-details/${row.job_id}`)
	// }, [navigate, row])
	const status = useSelector((state) => state.salesOrderList.state.status)

	const onStatusChange = () => {
		// alert(status)
		dispatch(setstatus(row.status == 1 ? 0 : 1));
		dispatch(setSelectedRow([row.job_id]));
	}

	return (
		<div className="flex justify-end text-lg">
			<Tooltip title="View">
				<span
					className={`cursor-pointer p-2 hover:${textTheme}`}
					onClick={onStatusChange}
				>
					{row.status == 1 ? <HiOutlineEyeOff /> : <HiOutlineEye />}
				</span>
			</Tooltip>
			<Tooltip title="Delete">
				<span
					className="cursor-pointer p-2 hover:text-red-500"
					onClick={onDelete}
				>
					<HiOutlineTrash />
				</span>
			</Tooltip>
		</div>
	)
}

const DummyTable = () => {
	// const [dataArray, setdataArray] = useState([]);
	const dispatch = useDispatch()
	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state.salesOrderList.data.tableData)
	const loading = useSelector((state) => state.salesOrderList.data.loading)
	// const data = [{
	//     order:"Atu"
	// }]
	const data = useSelector((state) => state.salesOrderList.data.orderList)

	const tableData = useMemo(() =>
		({ pageIndex, pageSize, sort, query, total }),
		[pageIndex, pageSize, sort, query, total]);

	const fetchData = useCallback(() => {
		dispatch(getOrders({ pageIndex, pageSize, sort, query }))
	}, [dispatch, pageIndex, pageSize, sort, query])

	useEffect(() => {
		dispatch(setSelectedRows([]))
		fetchData();
	}, [dispatch, fetchData, pageIndex, pageSize, sort])
	// const [id, setid] = useState(pageIndex);

	const columns = React.useMemo(() => [
		{
			Header: 'Order',
			accessor: 'job_id',
			sortable: false,
			Cell: props => {
				const { offset } = props.row.original;
				return <OrderColumn row={props.row.original} id={offset + props.cell.row.index + 1} />
			}
		},
		{
			Header: "Name",
			accessor: "job_name",
			sortable: true,
			Cell: props => {
				const { job_name, job_id } = props.row.original;
				// console.log(job_name);
				return (
					<Input id={"job" + job_id} value={job_name}
						onChange={(e) => {
							document.querySelector("#job" + job_id).value = e.target.value;
						}}
						onMouseOver={() => {
							document.querySelector("#job" + job_id).style.borderWidth = "1px"
						}}
						onMouseOut={() => {
							document.querySelector("#job" + job_id).style.borderWidth = "0px"
						}}
						style={tableInputStyle} />
				)
			}
		},
		{
			Header: 'Expiry Date',
			accessor: 'expiry_date',
			sortable: true,
			Cell: props => {
				const row = props.row.original
				return (
					<span>{pageIndex}{new Date(row.expiry_date).toDateString().slice(4, 15)}</span>
				)
			},
		},
		{
			Header: 'Company',
			accessor: 'company',
			sortable: true,
		},
		{
			Header: 'Status',
			accessor: 'status',
			sortable: true,
			Cell: props => {
				const { status } = props.row.original
				return (
					<div className="flex items-center">
						<Badge className={orderStatusColor[status].dotClass} />
						<span className={`ml-2 rtl:mr-2 capitalize font-semibold ${orderStatusColor[status].textClass}`}>
							{status == 1 ? "Inactive" : "Active"}
						</span>
					</div>
				)
			},
		},
		// {
		// 	Header: 'Payment Method',
		// 	accessor: 'paymentMehod',
		// 	sortable: true,
		// 	Cell: props => {
		// 		const { paymentMehod, paymentIdendifier } = props.row.original
		// 		return (
		// 			<span className="flex items-center">
		// 				<PaymentMethodImage className="max-h-[20px]" paymentMehod={paymentMehod} />
		// 				<span className="ltr:ml-2 rtl:mr-2">{paymentIdendifier}</span>
		// 			</span>
		// 		)
		// 	},
		// },
		// {
		// 	Header: 'Total',
		// 	accessor: 'totalAmount',
		// 	sortable: true,
		// 	Cell: props => {
		// 		const { totalAmount } = props.row.original
		// 		return (
		// 			<NumberFormat
		// 				displayType="text"
		// 				value={(Math.round(totalAmount * 100) / 100).toFixed(2)}
		// 				prefix={'$'}
		// 				thousandSeparator={true}
		// 			/>
		// 		)
		// 	},
		// },
		{
			Header: 'Action',
			id: 'action',
			accessor: (row) => row,
			Cell: props => <ActionColumn row={props.row.original} />
		},
	], [])

	const onPaginationChange = page => {
		const newTableData = cloneDeep(tableData)
		newTableData.pageIndex = page;
		// setid(parseInt(page));
		// alert(page);
		dispatch(setTableData(newTableData))
	}

	const onSelectChange = value => {
		const newTableData = cloneDeep(tableData)
		newTableData.pageSize = Number(value)
		newTableData.pageIndex = 1
		dispatch(setTableData(newTableData))
	}

	const onSort = (sort, sortingColumn) => {
		const newTableData = cloneDeep(tableData)
		newTableData.sort = sort
		dispatch(setTableData(newTableData))
	}

	const onRowSelect = (checked, row) => {
		if (checked) {
			dispatch(addRowItem([row.job_id]))
		} else {
			dispatch(removeRowItem(row.job_id))
		}
	}

	const onAllRowSelect = useCallback((checked, rows) => {
		if (checked) {
			const originalRows = rows.map(row => row.original)
			const selectedIds = []
			originalRows.forEach(row => {
				selectedIds.push(row.job_id)
			})
			dispatch(setSelectedRows(selectedIds))
		} else {
			dispatch(setSelectedRows([]))
		}
	}, [dispatch])

	const updateJobs = async (data) => {
		let success = await updateJobName({ data: data });
		updateSucceed(success.status)
	}

	const updateSucceed = (success) => {
		if (success) {
			fetchData();
			toast.push(
				<Notification title={"Successfuly Updated"} type="success" duration={2500}>
					Successfuly updated job name
				</Notification>
				, {
					placement: 'top-center'
				}
			)
		}
	}

	return (
		<div>
			<DataTable
				columns={columns}
				data={data}
				loading={loading}
				pagingData={tableData}
				onPaginationChange={onPaginationChange}
				onSelectChange={onSelectChange}
				onSort={onSort}
				onCheckBoxChange={onRowSelect}
				onIndeterminateCheckBoxChange={onAllRowSelect}
				selectable
			/>
			<Button className="mt-4" onClick={() => {
				let arrayInputData = data.map((item) => {
					return { job_id: item.job_id, value: document.querySelector("#job" + item.job_id).value }
				})
				updateJobs(arrayInputData);
			}} style={btnStyle} type="submit" variant="solid" >Update</Button>
		</div>
	)
}

export default DummyTable
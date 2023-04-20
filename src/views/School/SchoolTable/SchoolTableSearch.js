import React, { useRef, useState } from 'react'
import { Dialog, Input } from 'components/ui'
import { HiOutlineFilter, HiOutlineSearch } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, setTableData } from '../store/dataSlice'
import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'
import useMediaQuery from '@mui/material/useMediaQuery';
import { borderColors } from 'utilities/color'
import Filters from './Filters'

const StudentTableSearch = () => {
	const matches = useMediaQuery('(min-width:1023px)');

	// const dispatch = useDispatch()

	const searchInput = useRef()

	// const tableData = useSelector((state) => state.salesOrderList.data.tableData)

	// const debounceFn = debounce(handleDebounceFn, 500)

	// function handleDebounceFn(val) {
	// 	const newTableData = cloneDeep(tableData)
	// 	newTableData.query = val
	// 	newTableData.pageIndex = 1
	// 	if(typeof val === 'string' && val.length > 0) {
	// 		fetchData(newTableData)
	// 	}

	// 	if(typeof val === 'string' && val.length === 0) {
	// 		fetchData(newTableData)
	// 	}
	// }

	// const fetchData = data => {
	// 	dispatch(setTableData(data))
	// 	dispatch(getOrders(data))
	// }

	const onEdit = (e) => {
		// debounceFn(e.target.value)
	}

	const [dialogIsOpen, setIsOpen] = useState(false)

	const openDialog = () => {
		setIsOpen(true)
	}

	const onDialogClose = (e) => {
		console.log('onDialogClose', e)
		setIsOpen(false)
	}

	const onDialogOk = (e) => {
		console.log('onDialogOk', e)
		setIsOpen(false)
	}

	return (
		<div>
			<div style={{ padding: "5px", borderRadius: "8px", border: "1px solid " + borderColors.gray, cursor: "pointer" }} onClick={openDialog}>
				<HiOutlineFilter size={24} />
			</div>
			<Dialog
				isOpen={dialogIsOpen}
				onClose={onDialogClose}
				onRequestClose={onDialogClose}
				width={660}>
				<h4 className="mb-4">Filters</h4>
				<Filters/>
			</Dialog>
			{/*<Input
			ref={searchInput}
			className="lg:w-52"
			size="sm"
			placeholder="Search"
			prefix={<HiOutlineSearch className="text-lg" />}
			// onChange={onEdit}
		/>
		<div className="flex pl-4">
		<Input
			ref={searchInput}
			type="date"
			className="w-36"
			size="sm"
			placeholder="Search"

			prefix={<HiOutlineSearch className="text-lg" />}
		/>&nbsp;&nbsp;
		<Input
		ref={searchInput}
		type="date"
		className="w-36"
		size="sm"
		placeholder="Search"
		prefix={<HiOutlineSearch className="text-lg" />}
	/>
		</div>*/}
		</div>
	)
}

export default StudentTableSearch
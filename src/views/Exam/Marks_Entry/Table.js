import { DataTable } from 'components/shared'
import React from 'react'
import Tools from './Tools';

const Table = () => {
    const columns = React.useMemo(() => [
        {
            Header: '#',
            accessor: 'id',
            sortable: false,
        },
        {
            Header: "REG NO.",
            accessor: "exam_name",
            sortable: true,
        },
        {
            Header: 'ROLL NO.',
            accessor: 'class',
            sortable: true,
        },
        {
            Header: 'NAME',
            accessor: 'company',
            sortable: true,
        },
        {
            Header: 'MAX',
            accessor: 'status',
            sortable: true,
        },
        {
            Header: 'MIN',
            accessor: 'firstName',
        },
        {
            Header: 'THEORY',
            accessor: 'lastName',
        },
        {
            Header: 'PRAC',
            accessor: 'weightage',
            sortable: true,
        },
        {
            Header: 'ACTION',
            accessor: '',
        }
    ], [])

    const data = [];

    return (
        <DataTable
            columns={columns}
            data={data}
        />
    )
}

export default Table
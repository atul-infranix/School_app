import { DataTable } from 'components/shared'
import React from 'react'

const Table = () => {
    const columns = React.useMemo(() => [
        {
            Header: '#',
            accessor: 'id',
            sortable: false,
        },
        {
            Header: "NAME",
            accessor: "exam_name",
            sortable: true,
        },
        {
            Header: 'CLASS',
            accessor: 'class',
            sortable: true,
        },
        {
            Header: 'MAX',
            accessor: 'company',
            sortable: true,
        },
        {
            Header: 'MIN',
            accessor: 'status',
            sortable: true,
        },
        {
            Header: 'OBTAINED',
            columns: [
                {
                    Header: 'THEORY',
                    accessor: 'firstName',
                },
                {
                    Header: 'PRAC',
                    accessor: 'lastName',
                },
            ],
        },
        {
            Header: 'WEIGHTAGE (%)',
            accessor: 'weightage',
            sortable: true,
        },
        {
            Header: 'MONTH',
            accessor: 'month',
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



import React, { useMemo, useCallback, useEffect, useState } from 'react'
import { Table, Spinner } from 'components/ui'
import { useTable, useExpanded } from 'react-table'
import { dataWithSubRows, captertable } from './data'
import { HiOutlineChevronRight, HiOutlineChevronDown, HiOutlinePlusCircle, HiOutlineMinusCircle, HiOutlineXCircle, HiOutlineTrash, HiOutlinePencilAlt, HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi'
import ChapterTable from './chapterTable'
import NewChapterPop from './newChapterPop'
import NewTopicPop from './newTopicPop'

const { Tr, Th, Td, THead, TBody } = Table

function SubRows({ row, rowProps, visibleColumns, data, loading }) {
    if (loading) {
        return (
            <Tr>
                <Td />
                <Td colSpan={visibleColumns.length - 1}>
                    <div className="flex justify-center">
                        <Spinner size={30} />
                    </div>
                </Td>
            </Tr>
        )
    }




    return (
        <>
            {
                captertable.map((element, index) => {
                    return <Tr className='bg-white border-0' >
                        <Td />
                        <Td className=' ' colSpan={visibleColumns.length} style={{ margin: '0', padding: '0' }}>
                            <div className=" ">
                                <ChapterTable rowData={element} />
                            </div>
                        </Td>

                    </Tr>

                })
            }




        </>
    )
}

function SubRowAsync({ row, rowProps, visibleColumns }) {





    return (
        <SubRows
            row={row}
            rowProps={rowProps}
            visibleColumns={visibleColumns}


        />
    )
}


function ReactTable({ columns: userColumns, data, renderRowSubComponent }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        visibleColumns,
    } = useTable(
        {
            columns: userColumns,
            data
        },
        useExpanded // We can useExpanded to track the expanded state
        // for sub components too!
    )

    return (
        <>
            <Table {...getTableProps()}>
                <THead>
                    {headerGroups.map(headerGroup => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <Th style={{ padding: '10px 0px', fontWeight: "bold", fontSize: '14px' }} {...column.getHeaderProps()}>{column.render('Header')}</Th>
                            ))}

                        </Tr>
                    ))}
                </THead>
                <TBody {...getTableBodyProps()} >
                    {rows.map((row, i) => {
                        prepareRow(row)
                        const rowProps = row.getRowProps()
                        return (

                            <React.Fragment key={rowProps.key}>
                                <Tr {...rowProps} style={{ backgroundColor: '#f5f0ff' }}>
                                    {row.cells.map(cell => {
                                        return (
                                            <Td style={{ padding: '10px 0px', fontWeight: 600, fontSize: '12px', }} {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                                        )
                                    })}

                                </Tr>

                                {row.isExpanded &&
                                    renderRowSubComponent({ row, rowProps, visibleColumns })}
                            </React.Fragment>
                        )
                    })}
                </TBody>
            </Table>
        </>
    )
}


const SubjectTable = () => {

    const columns = useMemo(() => [
        {

            Header: () => null,
            id: 'expander',
            Cell: ({ row }) => (

                <span {...row.getToggleRowExpandedProps()} style={{ fontSize: '14px', cursor: 'pointer', }}>
                    {row.isExpanded ? <HiOutlineMinus style={{ margin: "0 auto" }} /> : <HiOutlinePlus style={{ margin: "0 auto" }} />}
                </span>

            ),


        },

        {
            Header: 'Subject',
            accessor: 'firstName',
        },
        {
            Header: 'Chapter',
            accessor: 'lastName',
        },
        {
            Header: 'Topic',
            accessor: 'age',
        },


        {

            Header: "Action",
            Cell: () => (

                <div className='flex ' style={{ cursor: 'pointer' }}>
                    <HiOutlinePencilAlt size={20} />
                    <HiOutlineTrash size={20} />
                    <NewTopicPop />
                </div >

            ),

        },

    ], [])

    const renderRowSubComponent = useCallback(
        ({ row, rowProps, visibleColumns }) => (
            <SubRowAsync
                row={row}
                rowProps={rowProps}
                visibleColumns={visibleColumns}
            />
        ),
        []
    )

    return (
        <div>
            <ReactTable columns={columns} data={dataWithSubRows} renderRowSubComponent={renderRowSubComponent} />
        </div>
    )
}

// export default SubComponent


export default SubjectTable
